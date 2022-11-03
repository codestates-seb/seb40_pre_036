package soybeanoil.stackoverflowClone.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerVoteMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerVoteService;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@Validated
@RequestMapping("/answer")
public class AnswerVoteController {

    private final AnswerVoteService answerVoteService;
    private final AnswerVoteMapper answerVoteMapper;
    private final UserService userService;

    public AnswerVoteController(AnswerVoteService answerVoteService,
                                AnswerVoteMapper answerVoteMapper,
                                UserService userService) {
        this.answerVoteService = answerVoteService;
        this.userService = userService;
        this.answerVoteMapper = answerVoteMapper;
    }

    @PostMapping("{answer-id}/votes/{vote}")
    public ResponseEntity voteAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                     @RequestParam(value = "vote", defaultValue = "0") int vote) {

        AnswerVote answerVote = answerVoteService.voteAnswer(answerId, vote);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerVoteMapper.answerVoteToResponseDto(answerVote)), HttpStatus.OK);
    }
}
//    @GetMapping("{answer-id}/votes")
//    public List<AnswerVote> getVoteList(@PathVariable long answerId) {
//        return answerVoteService.getVoteList(answerId);
//    }
//}

