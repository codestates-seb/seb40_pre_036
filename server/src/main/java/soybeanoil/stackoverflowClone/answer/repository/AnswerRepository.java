package soybeanoil.stackoverflowClone.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.entity.Question;

import java.lang.reflect.Member;
import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Page<Answer> finaAllByQuestionAndAnswerStatus(Pageable pageable,
                                                  @Param("question") Question question,
                                                  @Param("answerStatus") Answer.AnswerStatus answerStatus);
}