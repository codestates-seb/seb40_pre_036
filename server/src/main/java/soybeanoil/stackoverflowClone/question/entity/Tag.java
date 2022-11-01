package soybeanoil.stackoverflowClone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import soybeanoil.stackoverflowClone.audit.Auditable;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Tag extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    
    public void addQuestion(Question question) {
        this.question = question;
    }

//    @Enumerated(EnumType.STRING)
//    @Column(length = 20, nullable = false)
//    private TagStatus tagStatus = TagStatus.TAG_EXIST;
//
//    public enum TagStatus {
//        TAG_EXIST("존재하는 태그"),
//        TAG_NOT_EXIST("존재하지 않는 태그");
//
//        @Getter
//        private String status;
//
//        TagStatus(String status) {
//            this.status = status;
//        }
//    }
}
