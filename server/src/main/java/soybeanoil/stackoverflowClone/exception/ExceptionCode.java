package soybeanoil.stackoverflowClone.exception;

import lombok.Getter;

public enum ExceptionCode {

    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    ACCESS_DENIED_USER(403, "Access Denied User"),
    QUESTION_EXIST(409, "Question Exists"),
    TAG_EXIST(409, "Tag Exists"),
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    ANSWER_NOT_FOUND(404, "Answer not found");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
