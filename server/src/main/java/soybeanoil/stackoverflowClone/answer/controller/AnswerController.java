package soybeanoil.stackoverflowClone.answer.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPatchDto;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPostDto;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;
import soybeanoil.stackoverflowClone.question.mapper.QuestionMapper;
import soybeanoil.stackoverflowClone.question.service.QuestionService;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController //HTTP모든 요청 받기
@Validated
@Slf4j
@RequestMapping("/questions")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final UserService userService;
    private final UserMapper userMapper;
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;


    public AnswerController(AnswerService answerService, AnswerMapper answerMapper, UserService userService,
                            UserMapper userMapper, QuestionService questionService, QuestionMapper questionMapper){
        this.answerService=answerService;
        this.answerMapper=answerMapper;
        this.userService=userService;
        this.userMapper=userMapper;
        this.questionService=questionService;
        this.questionMapper=questionMapper;
    }

    @PostMapping("/{question-id}/answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto,
                                     @PathVariable("question-id") @Positive long questionId) {
        Answer question = answerService.createAnswer(
                answerMapper.answerPostDtoToAnswer(questionId,questionService, userService,answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(userMapper,question, questionId)), HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}/answer/{answer-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable("answer-id") @Positive long answerId,
                                      @PathVariable("question-id") @Positive long questionId){

        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerMapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto);
        Answer updatedAnswer = answerService.modifyAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(userMapper,updatedAnswer, questionId)),
                HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/answer/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId,
                                       @PathVariable("question-id") @Positive long questionId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
