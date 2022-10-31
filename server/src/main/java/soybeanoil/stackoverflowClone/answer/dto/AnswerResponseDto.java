package soybeanoil.stackoverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.dto.QuestionAnswerResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private String answerContent;
    private QuestionAnswerResponseDto questionId; // Uesr? 어느데이타 표시할지 질문=> questionId
    private long vote;
    private UserResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Answer.AnswerStatus answerStatus;
}
