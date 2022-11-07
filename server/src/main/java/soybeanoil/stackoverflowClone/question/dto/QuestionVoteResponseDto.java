package soybeanoil.stackoverflowClone.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionVoteResponseDto {

    private long questionId;
    private long vote;
    private long totalVotes;
}
