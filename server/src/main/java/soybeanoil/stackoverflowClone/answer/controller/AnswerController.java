package soybeanoil.stackoverflowClone.answer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
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
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController //HTTP모든 요청 받기
@Validated
@Slf4j
@RequestMapping("/questions")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper){
        this.answerService=answerService;
        this.answerMapper= answerMapper;
    }

    @PostMapping("/{question-id}/answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto,
                                     @PathVariable("question-id")
                                     @AuthenticationPrincipal User user) {
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}/")
    public ResponseEntity patchAnswer(@Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable("answer-id")
                                      @Positive long answerId){

        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.modifyAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
