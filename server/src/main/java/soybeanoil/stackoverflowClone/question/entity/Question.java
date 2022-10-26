package soybeanoil.stackoverflowClone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.audit.Auditable;
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_EXIST;

    @ManyToOne
    @Column(name = "QUESTION_WRITER")
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "question",cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question",cascade = CascadeType.PERSIST)
    private List<Tag> tags = new ArrayList<>();

    @Column(length = 5, nullable = false)
    private Integer votes = 0; // questionVote 를 스트림으로 votes 값 합계

    public enum QuestionStatus {
        QUESTION_EXIST("존재하는 질문"),
        QUESTION_NOT_EXIST("존재하지 않는 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}