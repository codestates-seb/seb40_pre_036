package soybeanoil.stackoverflowClone.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import soybeanoil.stackoverflowClone.audit.Auditable;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor  // (생성자 자동 생성) 매개변수 없는 생성자 자동 생성
@Getter
@Setter
@Entity
@Table(name = "answer")
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId; // 답변자 id

    @Column(nullable = false, columnDefinition = "TEXT")  //컬럼을 text 로 설정하여 데이터를 추출
    private String answerContent; // content -> Q & A 따로 구별

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;  // 질문자 user id 엔티티랑 묶기

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;   // Question 에 붙은 답변 => Question 연결

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "UPDATED")
    private LocalDateTime modifiedAt = LocalDateTime.now();


    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_EXIST;

    public enum AnswerStatus {
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
    @Column(nullable = false)
    private long vote;

    public void setVotes(long votes) {
        this.vote = votes;
    }
}