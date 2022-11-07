package soybeanoil.stackoverflowClone.question.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.response.MultiResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserResponseDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionAnswerResponseDto { // 특정 질문 조회

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String content;
    private Integer votes;
    private Integer view;
    private Integer answerCount;
    private UserResponseDto user;
    private MultiResponseDto<AnswerResponseDto> answers;
    private List<TagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
