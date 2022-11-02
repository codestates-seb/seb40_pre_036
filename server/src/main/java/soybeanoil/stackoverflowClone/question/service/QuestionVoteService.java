package soybeanoil.stackoverflowClone.question.service;

import org.springframework.stereotype.Service;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;
import soybeanoil.stackoverflowClone.question.repository.QuestionVoteRepository;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.service.UserService;


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

    public QuestionVote voteQuestion(long questionId, int vote) {
        User user = userService.getLoginUser();

        QuestionVote questionVote = questionVoteRepository.findByQuestionAndUser(
                questionService.findQuestion(questionId), user);

        if(questionVote == null) {
            QuestionVote newVote = new QuestionVote();
            newVote.addQuestion(questionService.findQuestion(questionId));
            newVote.addUser(user);
            newVote.setVote(vote);
            questionVoteRepository.save(newVote);
            questionService.refreshVotes(questionId);
            return newVote;

        } else {
            questionVote.setVote(vote);
            questionVoteRepository.save(questionVote);
            questionService.refreshVotes(questionId);
            return questionVote;
        }


    }

//    public List<QuestionVote> getVoteList(long questionId) {
//        return questionVoteRepository.findAllByQuestion(questionId);
//    }

    public int getVotes(long questionId) {
        int votes = questionVoteRepository.findVoteValue(questionId);
        return votes;
    }
}
