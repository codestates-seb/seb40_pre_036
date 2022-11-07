package soybeanoil.stackoverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.answer.dto.AnswerVoteResponseDto;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {

    default AnswerVoteResponseDto answerVoteToAnswerVoteDto(AnswerVote answerVote){

        AnswerVoteResponseDto answerVoteResponseDto = new AnswerVoteResponseDto();

        answerVoteResponseDto.setAnswerId(answerVote.getAnswer().getAnswerId());
        answerVoteResponseDto.setAnsVote(answerVote.getAnsVote());
        answerVoteResponseDto.setAnsTotalVotes(answerVote.getAnswer().getAnsVotes());

        return answerVoteResponseDto;
    }
}
