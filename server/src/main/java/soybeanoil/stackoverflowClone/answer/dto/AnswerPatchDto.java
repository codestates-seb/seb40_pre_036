package soybeanoil.stackoverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


@Getter
@Setter
@AllArgsConstructor
public class AnswerPatchDto {

    @NotNull
    @Positive
    private long answerId;  // 질문하는 사람 답변하는 사람 다른 사람??

    @NotBlank(message="내용을 입력하세요.") // 필드 값에 null 값을 허용하지 않는다
    private String body;
}
