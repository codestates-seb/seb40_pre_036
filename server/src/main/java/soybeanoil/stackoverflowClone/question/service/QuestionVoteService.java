package soybeanoil.stackoverflowClone.question.service;

import org.springframework.stereotype.Service;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;
import soybeanoil.stackoverflowClone.question.repository.QuestionVoteRepository;
import soybeanoil.stackoverflowClone.user.service.UserService;

import java.util.List;

@Service
public class QuestionVoteService {

    private QuestionService questionService;
    private UserService userService;
    private QuestionVoteRepository questionVoteRepository;

    public QuestionVoteService(QuestionService questionService, UserService userService,
                               QuestionVoteRepository questionVoteRepository) {
        this.questionService = questionService;
        this.userService = userService;
        this.questionVoteRepository = questionVoteRepository;
    }

    public String voteQuestion(long questionId, int vote, long userId) {
        if(vote == -1 || vote == 0 || vote == 1) {
            QuestionVote questionVote = questionVoteRepository.findByQuestionAndUser(questionId, userId);

            if(questionVote == null) {
                QuestionVote newVote = new QuestionVote();
                newVote.addQuestion(questionService.findQuestion(questionId));
                newVote.addUser(userService.findUser(userId));
                questionVoteRepository.save(newVote);
            } else {
                questionVote.setVote(vote);
                questionVoteRepository.save(questionVote);
            }
            questionService.refreshVotes(questionId);
            return "Vote success";
        } else {
            return "Invalid vote value";
        }
    }

    public List<QuestionVote> getVoteList(long questionId) {
        return questionVoteRepository.findAllByQuestion(questionId);
    }

    public int getVotes(long questionId) {
        int votes = questionVoteRepository.findVoteValue(questionId);
        return votes;
    }
}
