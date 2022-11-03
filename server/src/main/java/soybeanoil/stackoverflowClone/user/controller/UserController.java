package soybeanoil.stackoverflowClone.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.dto.TagDto;
import soybeanoil.stackoverflowClone.question.dto.TagResponseDto;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.question.mapper.QuestionMapper;
import soybeanoil.stackoverflowClone.question.service.QuestionService;
import soybeanoil.stackoverflowClone.question.service.TagService;
import soybeanoil.stackoverflowClone.response.MultiResponseDto;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserPostDto;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@Validated
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final TagService tagService;

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)),
                HttpStatus.CREATED);
    }

    // 마이페이지
    @GetMapping("/me")
    public ResponseEntity getUser() {
        User user = userService.getLoginUser();
        List<QuestionDto.Response> questions =
                questionMapper.questionsToQuestionResponseDtos(mapper, questionService.findQuestions(user));
        List<AnswerResponseDto> answers = answerMapper.answersToAnswerResponseDtos(answerService.findAnswers(user));
        List<TagResponseDto> tags = questionMapper.tagsToTagResponseDtos(tagService.findUserTags(user));

        return new ResponseEntity(
                new SingleResponseDto<>(mapper.userToUserDataDto(user, questions, answers, tags)),
                HttpStatus.OK);
    }

    // 전체 유저 확인
    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page - 1, size);
        List<User> users = pageUsers.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(mapper.usersToUserResponseDtos(users),
                        pageUsers),
                HttpStatus.OK);
    }
}

