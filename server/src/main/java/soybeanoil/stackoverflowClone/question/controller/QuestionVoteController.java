package soybeanoil.stackoverflowClone.question.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;
import soybeanoil.stackoverflowClone.question.service.QuestionVoteService;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/questions")
public class QuestionVoteController {

    private final QuestionVoteService questionVoteService;
    private final UserService userService;

    public QuestionVoteController(QuestionVoteService questionVoteService, UserService userService) {
        this.questionVoteService = questionVoteService;
        this.userService = userService;
    }

    @PostMapping("/{question-id}/votes/{vote}/{user-id}")
    public void voteQuestion(@PathVariable("user-id") @Positive @NotNull long userId,
                             @PathVariable("question-id") @Positive @NotNull long questionId,
                             @PathVariable("vote") int vote) {

        questionVoteService.voteQuestion(questionId, vote, userId);
    }

    @GetMapping("/{question-id}/votes")
    public List<QuestionVote> getVoteList(@PathVariable long questionId) {
        return questionVoteService.getVoteList(questionId);
    }
}
