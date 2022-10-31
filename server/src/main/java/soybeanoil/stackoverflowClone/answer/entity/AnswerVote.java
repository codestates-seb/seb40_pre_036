package soybeanoil.stackoverflowClone.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.audit.Auditable;
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class AnswerVote extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerVoteId;

    @Column
    private int answerVote = 0;

    @ManyToOne // 한 명의 user는 여러개의 vote를 가진다.
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    public void addAnswer(Answer answer) {
        if(this.answer == null && answer != null)
            this.answer = answer;
    }

    public void addUser(User user) {
        if(this.user == null && user != null)
            this.user = user;
    }
}
