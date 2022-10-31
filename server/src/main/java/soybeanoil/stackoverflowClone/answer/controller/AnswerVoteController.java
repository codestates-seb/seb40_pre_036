package soybeanoil.stackoverflowClone.answer.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.answer.service.AnswerVoteService;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/answer")
public class AnswerVoteController {

    private final AnswerVoteService answerVoteService;

    private final UserService userService;

    public AnswerVoteController(AnswerVoteService answerVoteService, UserService userService) {
        this.answerVoteService = answerVoteService;
        this.userService = userService;
    }

    @PostMapping("/{answer-id}/votes/{vote}")
    public void voteAnswer(@PathVariable @Positive @NotNull long answerId,
                             @PathVariable int vote) {

        answerVoteService.voteAnswer(answerId, vote, userService.getLoginUser().getUserId());
    }

    @GetMapping("/{answer-id}/votes")
    public List<AnswerVote> getVoteList(@PathVariable long answerId) {
        return answerVoteService.getVoteList(answerId);
    }
}

