package soybeanoil.stackoverflowClone.answer.service;

import org.springframework.stereotype.Service;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.answer.repository.AnswerVoteRepository;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.service.UserService;

import java.util.List;


@Service
public class AnswerVoteService {
    private AnswerService answerService;
    private UserService userService;
    private AnswerVoteRepository answerVoteRepository;

    public AnswerVoteService(AnswerService answerService,
                             UserService userService,
                             AnswerVoteRepository answerVoteRepository) {
        this.answerService = answerService;
        this.userService = userService;
        this.answerVoteRepository = answerVoteRepository;
    }

    public String voteAnswer(long answerId, int vote, long userId) {
        if (vote == -1 || vote == 0 || vote == 1) {
            AnswerVote answerVote = answerVoteRepository.findByAnswerIdAndUserId(answerId, userId);

            if (answerVote == null) {
                AnswerVote newVote = new AnswerVote();
                newVote.addAnswer(answerService.findAnswer(answerId));
                newVote.addUser(userService.findUser(userId));
                answerVoteRepository.save(newVote);
            } else {
                answerVote.setAnswerVote(vote);
                answerVoteRepository.save(answerVote);
            }
            answerService.refreshVotes(new User()); //?...
            return "Vote success";
        } else {
            return "Invalid vote value";
        }
    }

    public List<AnswerVote> getVoteList(long answerId) {
        return answerVoteRepository.findAllByAnswerId(answerId);
    }

    public int getVotes(long questionId) {
        int votes = answerVoteRepository.findVoteValue(questionId);
        return votes;
    }

    public long getVoteValue(AnswerVote answerId) {
        long voteValue = this.answerVoteRepository.findVoteValue(answerId.getAnswerVoteId());
        return voteValue;
    }
}
