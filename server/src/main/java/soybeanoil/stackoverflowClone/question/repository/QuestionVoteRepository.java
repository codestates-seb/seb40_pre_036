package soybeanoil.stackoverflowClone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;

import java.util.List;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    QuestionVote findByQuestionAndUser(long questionId, long userId);
    List<QuestionVote> findAllByQuestion(long questionId);

    @Query("SELECT sum(qv.vote) from QuestionVote qv where qv.question.questionId = :questionId")
    int findVoteValue(@Param("questionId") long questionId);
}
