package soybeanoil.stackoverflowClone.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.user.dto.UserResponseDto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    public static class Post {

        @NotBlank(message = "질문의 제목을 적어주세요")
        private String title;

        @NotBlank(message = "질문의 내용을 적어주세요")
        private String content;

        @NotNull(message = "태그를 선택해주세요")
        private List<TagDto> tags;
    }

    @Getter
    @Setter
    public static class Patch {

        private Long questionId;

        private String title;
        private String content;
        private List<TagDto> tags;

//        private Question.QuestionStatus questionStatus;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response { // 질문 등록, 수정

        private Long questionId;
        private String title;
        private String content;
        private Question.QuestionStatus questionStatus;
        private Integer votes;
        private Integer view;
        private UserResponseDto user;
        private List<TagResponseDto> questionTags;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }


}
