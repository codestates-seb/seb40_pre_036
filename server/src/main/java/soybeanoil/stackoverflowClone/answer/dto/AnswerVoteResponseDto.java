package soybeanoil.stackoverflowClone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerVoteResponseDto {

    private long answerId;
    private long ansVote;
    private long ansTotalVotes;
}
