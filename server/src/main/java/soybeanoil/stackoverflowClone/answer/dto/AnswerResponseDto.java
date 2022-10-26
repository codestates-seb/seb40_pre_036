package soybeanoil.stackoverflowClone.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private int answerId;
    private String content;
    private int writer;
    private int vote;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
