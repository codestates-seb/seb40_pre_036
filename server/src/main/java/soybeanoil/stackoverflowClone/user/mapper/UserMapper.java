package soybeanoil.stackoverflowClone.user.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.user.dto.UserPostDto;
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
        userResponseDto.setDisplayName(user.getDisplayName());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setUserStatus(user.getUserStatus());
        return userResponseDto;
    }
}
