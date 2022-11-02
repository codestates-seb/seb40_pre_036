package soybeanoil.stackoverflowClone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {
    @NotBlank(message = "Display name should not be blank.")
    private String displayName;

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "Password should not be blank.")
    private String password;
}