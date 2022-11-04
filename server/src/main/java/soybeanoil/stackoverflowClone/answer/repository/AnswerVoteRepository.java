package soybeanoil.stackoverflowClone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
        AnswerVote findByAnswerAndUser(Answer answer, User user);
        List<AnswerVote> findAllByAnswer(long answerId);

    @Query("SELECT sum(qv.ansVote) from AnswerVote qv where qv.answer.answerId = :answerId")
    int findVoteValue(@Param("answerId") long answerId);

}
