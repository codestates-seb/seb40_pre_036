package soybeanoil.stackoverflowClone.user.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.dto.TagResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;

@Setter
@Getter
public class UserDataDto {
    private long userId;
    private String displayName;
    private String email;
    private User.UserStatus userStatus;

    // answer
    private List<AnswerResponseDto> answers;
    // question
    private List<QuestionDto.Response> questions;
//    // tag
    private List<TagResponseDto> tags;
}
