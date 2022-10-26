package soybeanoil.stackoverflowClone.question.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.question.entity.Question;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionAnswerResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String content;
    private Integer votes;
//    private UserResponseDto user;
//    private MultiResponseDto<AnswerResponseDto> answers;
    private List<TagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
