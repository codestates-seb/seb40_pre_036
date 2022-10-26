package soybeanoil.stackoverflowClone.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor  // (생성자 자동 생성) 매개변수 없는 생성자 자동 생성
@Getter
@Setter
@Entity(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId; // 답변자 id

    @Column(nullable = false, columnDefinition = "TEXT")  //컬럼을 text 로 설정하여 데이터를 추출
    private String content;

//    @OneToOne // 1:1매핑 => answer writer <-> user id
//    @JoinColumn(name="USER_ID")
//    private user writer;  // 질문자 user id 엔티티랑 묶기

    @Column(nullable = false)
    private int vote;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "UPDATED")
    private LocalDateTime modifiedAt = LocalDateTime.now();
    public enum AnswerStatus {
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }

}