package soybeanoil.stackoverflowClone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import soybeanoil.stackoverflowClone.question.entity.Tag;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    // 특정 QuestionId 의 모든 태그를 찾아서 리스트로 불러옴
    @Query("SELECT t FROM Tag t WHERE t.question.questionId = :questionId")
    List<Tag> findAllByQuestion(@Param("questionId") long questionId);

    Optional<Tag> findByTagName(String tagName);
}
