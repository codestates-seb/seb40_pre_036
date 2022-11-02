package soybeanoil.stackoverflowClone.user.dto;

import lombok.Getter;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;

@Setter
@Getter
public class UserQuestionAnswerResponseDto {
    private long userId;
    private String displayName;
    private String email;
    private User.UserStatus userStatus;

    // answer
    private List<Answer> answers;
    // question
    private List<Question> questions;
//    // tag
    private List<Tag> tags;
    // vote
    private List<AnswerVote> answerVotes;
    private List<QuestionVote> questionVotes;
}
