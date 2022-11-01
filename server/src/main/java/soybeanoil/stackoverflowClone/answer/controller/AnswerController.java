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

    private AnswerService answerService;
    private AnswerMapper answerMapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;


//    public AnswerController(AnswerService answerService, AnswerMapper answerMapper){
//        this.answerService=answerService;
//        this.answerMapper=answerMapper;
//    }

    @PostMapping("/{user-id}/answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto,
                                     @PathVariable("user-id")
                                     @Positive long userId
                                     ) {
        Answer question = answerService.createAnswer(
                answerMapper.answerPostDtoToAnswer(questionService, userId, userService,answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}/{user-id}")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable("answer-id") @Positive long answerId,
                                      @PathVariable("user-id") @Positive long userId){

        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerMapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto,userId);
        Answer updatedAnswer = answerService.modifyAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(userMapper,updatedAnswer)),
                HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
