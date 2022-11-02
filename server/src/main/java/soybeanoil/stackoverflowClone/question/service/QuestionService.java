package soybeanoil.stackoverflowClone.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.repository.QuestionRepository;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, TagService tagService) {
        this.questionRepository = questionRepository;
        this.tagService = tagService;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        // 별도의 태그 처리 로직이 필요할 경우 이곳에 작성
        return findQuestion;
    }


    public Page<Question> findQuestions(int page, int size, String sort) {

        Page<Question> findAllQuestion = questionRepository.findAllByQuestionStatus(
                PageRequest.of(page, size, Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);

        verifiedNoQuestion(findAllQuestion); // QUESTION_EXIST 상태의 질문이 존재하는지 확인

        return findAllQuestion;
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(findQuestion::setTitle);

        Optional.ofNullable(question.getContent())
                .ifPresent(findQuestion::setContent);

        Optional.ofNullable(question.getQuestionStatus())
                .ifPresent(findQuestion::setQuestionStatus);

        Optional.ofNullable(question.getTags())
                .ifPresent(findQuestion::setTags);

        Question updatedQuestion = questionRepository.save(findQuestion);
        return updatedQuestion;
    }

//    public Question voteQuestion(long questionId, int vote) {
//        Question findQuestion = findVerifiedQuestion(questionId);
//        findQuestion.setVotes(vote);
//
//    }

    public User findQuestionWriter(long questionId) {
        // 질문 작성자만 질문을 수정, 삭제할 수 있도록 질문의 작성자를 찾는 메서드
        Question findQuestion = findVerifiedQuestion(questionId);
        return findQuestion.getUser();
    }

    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND)
        );
        return findQuestion;
    }

    private void verifiedNoQuestion(Page<Question> findAllQuestion) {
        // QUESTION_EXIST 인 질문이 한 개도 없을 경우 에러 발생
        if(findAllQuestion.getTotalElements()==0) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }
}

