package soybeanoil.stackoverflowClone.user.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.user.dto.UserPostDto;
import soybeanoil.stackoverflowClone.user.dto.UserQuestionAnswerResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);

    default User userPostDtoToUser(UserPostDto userPostDto) {
        User user = new User();
        user.setDisplayName(userPostDto.getDisplayName());
        user.setEmail(userPostDto.getEmail());
        user.setPassword(userPostDto.getPassword());
        return user;
    }

    default UserResponseDto userToUserResponseDto(User user) {
        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setUserId(user.getUserId());
        userResponseDto.setDisplayName(user.getDisplayName());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setUserStatus(user.getUserStatus());
        return userResponseDto;
    }

    default UserQuestionAnswerResponseDto userToUserQuestionAnswerResponseDto(User user, List<Question> questions, List<Answer> answers) {
        UserQuestionAnswerResponseDto userQuestionAnswerResponseDto = new UserQuestionAnswerResponseDto();
        userQuestionAnswerResponseDto.setUserId(user.getUserId());
        userQuestionAnswerResponseDto.setDisplayName(user.getDisplayName());
        userQuestionAnswerResponseDto.setEmail(user.getEmail());
        userQuestionAnswerResponseDto.setUserStatus(user.getUserStatus());
        userQuestionAnswerResponseDto.setQuestionList(questions);
        userQuestionAnswerResponseDto.setAnswerList(answers);
        return userQuestionAnswerResponseDto;
    }
}
