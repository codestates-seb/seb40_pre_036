package soybeanoil.stackoverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.question.dto.QuestionAnswerResponseDto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor // (생성자 자동 생성) 모든 필드 매개변수 가지는 생성자 자동 생성
@NoArgsConstructor
public class AnswerPostDto {

//    @Positive // 필드 값에 null 값을 허용하지 않는다
    private long answerId;

//    @Positive // 질문자 아이디
//    private long questionId; ;

    @NotBlank(message="내용을 입력하세요.")
    private String answerContent;
}
