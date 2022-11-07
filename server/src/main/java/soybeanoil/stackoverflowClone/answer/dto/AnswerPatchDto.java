package soybeanoil.stackoverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.entity.Answer;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


@Getter
@Setter
@AllArgsConstructor
public class AnswerPatchDto {

//    @Positive
    private long answerId;

//    private long questionId;  //추가
    @NotBlank(message="내용을 입력하세요.") // 필드 값에 null 값을 허용하지 않는다
    private String answerContent;

    private Answer.AnswerStatus answerStatus;
}
