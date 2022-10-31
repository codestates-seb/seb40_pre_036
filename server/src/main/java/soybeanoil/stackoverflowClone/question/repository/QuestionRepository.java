package soybeanoil.stackoverflowClone.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import soybeanoil.stackoverflowClone.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findAllByQuestionStatus(Pageable pageable, Question.QuestionStatus questionStatus);
    List<Question> findAllByUserId(long userId);
}
