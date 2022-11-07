package soybeanoil.stackoverflowClone.user.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.dto.TagResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserPostDto;
import soybeanoil.stackoverflowClone.user.dto.UserDataDto;
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

    default UserDataDto userToUserDataDto(User user, List<QuestionDto.Response> questions,
                                          List<AnswerResponseDto> answers, List<TagResponseDto> tags) {
        UserDataDto userDataDto = new UserDataDto();
        userDataDto.setUserId(user.getUserId());
        userDataDto.setDisplayName(user.getDisplayName());
        userDataDto.setEmail(user.getEmail());
        userDataDto.setUserStatus(user.getUserStatus());
        userDataDto.setQuestions(questions);
        userDataDto.setAnswers(answers);
        userDataDto.setTags(tags);
//        userDataDto.setAnswerVotes(answerVotes);
//        userDataDto.setQuestionVotes(questionVotes);
        return userDataDto;
    }

}
