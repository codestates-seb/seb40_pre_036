package soybeanoil.stackoverflowClone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.user.entity.User;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private long userId;
    private String displayName;
    private String email;
    private User.UserStatus userStatus;

    // answer
    // question
    // vote
}