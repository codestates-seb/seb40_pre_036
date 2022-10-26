package soybeanoil.stackoverflowClone.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    // 연관관계
//    @OneToMany
//    private List<Question> questions = new ArrayList<>();
//
//    @OneToMany
//    private List<Answer> answer = new ArrayList<>();
//
//    @OneToMany
//    private List<QuestionVote> questionVotes = new ArrayList<>();
//
//    @OneToMany
//    private List<AnswerVote> answerVotes = new ArrayList<>();
//
//    @OneToOne
//    private Answer answerWriter;
//
//    @OneToOne
//    private Question questionWriter;

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
