package soybeanoil.stackoverflowClone.question.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.question.repository.QuestionRepository;
import soybeanoil.stackoverflowClone.question.repository.TagRepository;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final TagRepository tagRepository;
    private final QuestionVoteService questionVoteService;

    public QuestionService(QuestionRepository questionRepository, TagRepository tagRepository,
                           @Lazy QuestionVoteService questionVoteService) {
        this.questionRepository = questionRepository;
        this.tagRepository = tagRepository;
        this.questionVoteService = questionVoteService;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setView(findQuestion.getView()+1);
        questionRepository.save(findQuestion);
        return findQuestion;
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_NOT_EXIST);
        questionRepository.save(findQuestion);
    }

    public Page<Question> findQuestions(int page, int size, String sort) {

        Page<Question> findAllQuestion = questionRepository.findAllByQuestionStatus(
                PageRequest.of(page, size, Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);

//        verifiedNoQuestion(findAllQuestion); // QUESTION_EXIST ????????? ????????? ??????????????? ??????

        return findAllQuestion;
    }

    public List<Question> findQuestions(User user) {
        return questionRepository.findAllByUserAndQuestionStatus(user, Question.QuestionStatus.QUESTION_EXIST);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(findQuestion::setTitle);

        Optional.ofNullable(question.getContent())
                .ifPresent(findQuestion::setContent);

        List<Tag> tagList = question.getTags();
        Optional.ofNullable(tagList)
                .ifPresent(findQuestion::setTags);

        if(tagList != null) {
            for(Tag tag: tagList)
                tagRepository.save(tag);
        }

        Question updatedQuestion = questionRepository.save(findQuestion);
        return updatedQuestion;
    }

    public void refreshVotes(long questionId) {
        // ????????? ?????? ?????? ?????? ???????????? ?????????
        Question question = findVerifiedQuestion(questionId);
        question.setVotes(questionVoteService.getVotes(questionId));
        questionRepository.save(question);
    }

    public User findQuestionWriter(long questionId) {
        // ?????? ???????????? ????????? ??????, ????????? ??? ????????? ????????? ???????????? ?????? ?????????
        Question findQuestion = findVerifiedQuestion(questionId);
        return findQuestion.getUser();
    }

    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(long questionId) { // ????????? ????????? ???????????? ???????????? ?????????
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        if(findQuestion.getQuestionStatus() == Question.QuestionStatus.QUESTION_NOT_EXIST) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        } // ?????? ????????? ????????? ????????? ?????? ?????? ??????
        return findQuestion;
    }

//    private void verifiedNoQuestion(Page<Question> findAllQuestion) {
//        // QUESTION_EXIST ??? ????????? ??? ?????? ?????? ?????? ?????? ??????
//        if(findAllQuestion.getTotalElements()==0) {
//            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
//        }
//    }
}

