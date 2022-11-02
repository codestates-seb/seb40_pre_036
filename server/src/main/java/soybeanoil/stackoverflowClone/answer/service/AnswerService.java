package soybeanoil.stackoverflowClone.answer.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.answer.repository.AnswerRepository;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerVoteService answerVoteService;
    private final AnswerRepository answerRepository;

    public AnswerService(@Lazy AnswerVoteService answerVoteService, AnswerRepository answerRepository) {
        this.answerVoteService = answerVoteService;
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {  //  SOF-A-001 답변 작성
        return answerRepository.save(answer);
    }

    public Answer modifyAnswer(Answer answer) {  // SOF-A-002 답변 수정
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getAnswerContent())
                .ifPresent(findAnswer::setAnswerContent);
        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        // 별도의 태그 처리 로직이 필요할 경우 이곳에 작성
        return findAnswer;
    }

    private Answer findVerifiedAnswer(Long answerId) {  // SOF-A-002 답변 맞는지 확인
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }


    public void deleteAnswer(long answerId) {  // SOF-A-003 답변 삭제  => 작성한 answerId 기준
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);

    }

//    public Answer voteCount(int vote,int count) {  // SOF-A-004 upvote 세기
//
//    }


    private void VerifiedNoAnswer(Page<Answer> findAllAnswer) throws BusinessLogicException { //ANSWER_EXIST List=0 일떄 예외처리
        if (findAllAnswer.getTotalElements() == 0) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
    }

    public User findAnswerUser(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        return findAnswer.getUser();
    }

    public Page<Answer> findAnswers(Question question, int answerPage, int answerSize, String answerSort) throws BusinessLogicException {
        Page<Answer> findAllAnswer = answerRepository.findAllByQuestionAndAnswerStatus(
                PageRequest.of(answerPage - 1, answerSize, Sort.by(answerSort).descending()),
                question, Answer.AnswerStatus.ANSWER_EXIST);
        VerifiedNoAnswer(findAllAnswer);

        return findAllAnswer;
    }

    // 투표
    public void refreshVotes(User userid) {
        Answer answer = answerRepository.findById(userid.getUserId()).get();
        answer.setVotes(answerVoteService.getVoteValue(new AnswerVote()));
        answerRepository.save(answer);
    }

    public List<Answer> findAnswers(User user) {
        return answerRepository.findAllByUser(user);// AnswerService에 추가
    }

}

