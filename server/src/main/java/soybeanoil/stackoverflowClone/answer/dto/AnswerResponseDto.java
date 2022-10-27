package soybeanoil.stackoverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.dto.QuestionAnswerResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private int answerId;
    private String content;
    private QuestionAnswerResponseDto questionId; // Uesr? 어느데이타 표시할지 질문=> questionId
    private int vote;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Answer.AnswerStatus answerStatus;
}
