package soybeanoil.stackoverflowClone.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;
import soybeanoil.stackoverflowClone.question.mapper.QuestionVoteMapper;
import soybeanoil.stackoverflowClone.question.service.QuestionVoteService;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/questions")
@CrossOrigin
public class QuestionVoteController {

    private final QuestionVoteService questionVoteService;
    private final QuestionVoteMapper questionVoteMapper;
    private final UserService userService;

    public QuestionVoteController(QuestionVoteService questionVoteService,
                                  QuestionVoteMapper questionVoteMapper,
                                  UserService userService) {
        this.questionVoteService = questionVoteService;
        this.questionVoteMapper = questionVoteMapper;
        this.userService = userService;
    }

    @PostMapping("/votes/{question-id}")
    public ResponseEntity voteQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                       @RequestParam(value="vote", defaultValue="0") int vote) {

        QuestionVote questionVote = questionVoteService.voteQuestion(questionId, vote);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionVoteMapper.questionVoteToQuestionVoteDto(questionVote)), HttpStatus.OK);
    }

//    @GetMapping("/{question-id}/votes")
//    public List<QuestionVote> getVoteList(@PathVariable long questionId) {
//        return questionVoteService.getVoteList(questionId);
//    }
}
