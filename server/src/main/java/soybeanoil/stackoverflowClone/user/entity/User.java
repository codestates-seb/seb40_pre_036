package soybeanoil.stackoverflowClone.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 100, nullable = false)
    private String displayName;

    @Column(updatable = false, unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false, name = "STATUS")
    private UserStatus userStatus = UserStatus.USER_EXIST;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();;

    // 연관관계
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

//    @OneToMany
//    private List<QuestionVote> questionVotes = new ArrayList<>();
//
//    @OneToMany
//    private List<AnswerVote> answerVotes = new ArrayList<>();

    @Builder
    public User(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    public enum UserStatus {
        USER_EXIST("활동중"),
        USER_NOT_EXIST("탈퇴");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
