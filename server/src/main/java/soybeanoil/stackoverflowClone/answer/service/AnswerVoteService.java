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

    public AnswerVote voteAnswer(long answerId, int vote) {

            User user = userService.getLoginUser();

            AnswerVote answerVote = answerVoteRepository.findByAnswerAndUser(
                    answerService.findAnswer(answerId), user);


            if (answerVote == null) {
                AnswerVote newVote = new AnswerVote();
                newVote.addAnswer(answerService.findAnswer(answerId));
                newVote.addUser(user);
                newVote.setAnswerVote(vote);
                answerVoteRepository.save(newVote);
                answerService.refreshVotes(answerId);
                return newVote;

            } else {
                answerVote.setAnswerVote(vote);
                answerVoteRepository.save(answerVote);
                answerService.refreshVotes(answerId);
                return answerVote;
            }
//        if (vote == -1 || vote == 0 || vote == 1) {
//    }
    }

//    public List<AnswerVote> getVoteList(long answerId) {
//        return answerVoteRepository.findAllByAnswer(answerId);
//    }

    public int getVotes(long answerId) {
        int votes = answerVoteRepository.findVoteValue(answerId);
        return votes;
    }

}
