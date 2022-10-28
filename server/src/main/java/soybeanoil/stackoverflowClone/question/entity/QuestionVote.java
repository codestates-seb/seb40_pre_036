package soybeanoil.stackoverflowClone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;
import soybeanoil.stackoverflowClone.audit.Auditable;
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class QuestionVote extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionVoteId;

    @Column
    @Range(min = -1, max = 1) // up(1) 또는 down(-1)
    private byte vote = 0;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void addQuestion(Question question) {
        if(this.question == null && question != null)
            this.question = question;
    }

    public void addUser(User user) {
        if(this.user == null && user != null)
            this.user = user;
    }
}
