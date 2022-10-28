package soybeanoil.stackoverflowClone.user.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import soybeanoil.stackoverflowClone.response.MultiResponseDto;
import soybeanoil.stackoverflowClone.response.SingleResponseDto;
import soybeanoil.stackoverflowClone.user.dto.UserPostDto;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@Validated
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)),
                HttpStatus.CREATED);
    }

    // 마이페이지
    @GetMapping("/my-page")
    public ResponseEntity getUser(long userId) {
        // 수정 필요!!!!
        // 로그인된 회원인지 확인해야함
        // userService.getLoginUser();
        User user = userService.findUser(userId);
        return new ResponseEntity(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)),
                HttpStatus.OK);
    }

    // 전체 유저 확인
    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page - 1, size);
        List<User> users = pageUsers.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(mapper.usersToUserResponseDtos(users),
                        pageUsers),
                HttpStatus.OK);
    }
}

