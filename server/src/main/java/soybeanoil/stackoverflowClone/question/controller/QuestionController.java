package soybeanoil.stackoverflowClone.question.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.mapper.QuestionMapper;
import soybeanoil.stackoverflowClone.question.service.QuestionService;
import soybeanoil.stackoverflowClone.response.MultiResponseDto;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@Slf4j
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    private final UserService userService;
    private final UserMapper userMapper;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;


    public QuestionController(QuestionService questionService, QuestionMapper questionMapper,
                              UserService userService, UserMapper userMapper,
                              AnswerService answerService, AnswerMapper answerMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.userService = userService;
        this.userMapper = userMapper;
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post questionPostDto) {

        Question question = questionService.createQuestion(
                questionMapper.questionPostDtoToQuestion(userService, questionPostDto)
        );

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper, question)), HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                        @Valid @RequestBody QuestionDto.Patch questionPatchDto) {

        questionPatchDto.setQuestionId(questionId);
        Question question = questionMapper.questionPatchDtoToQuestion(userService,
            questionService, questionPatchDto);

        Question updatedQuestion = questionService.updateQuestion(question);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper, updatedQuestion)), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId,
                                      @Positive @RequestParam(value="page", defaultValue="1") int answerPage,
                                      @Positive @RequestParam(value="size", defaultValue="10") int answerSize,
                                      @RequestParam(value="sort", defaultValue="answerId") String answerSort) {

        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionAnswerResponseDto(
                        answerService, answerMapper, userMapper, question,
                        answerPage, answerSize, answerSort)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(value="page", defaultValue="1") int page,
                                       @Positive @RequestParam(value="size", defaultValue="10") int size,
                                       @RequestParam(value="sort", defaultValue="questionId") String sort) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size, sort);

        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(
                questionMapper.questionsToQuestionResponseDtos(questions),
                pageQuestions),HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
