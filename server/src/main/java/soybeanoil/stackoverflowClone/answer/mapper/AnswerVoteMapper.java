package soybeanoil.stackoverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.answer.dto.AnswerVoteResponseDto;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.entity.AnswerVote;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {

    default AnswerVoteResponseDto answerVoteToResponseDto(AnswerVote answerVote){

        AnswerVoteResponseDto answerVoteResponseDto = new AnswerVoteResponseDto();
        answerVoteResponseDto.setAnswerId(answerVote.getAnswer().getAnswerId());
        answerVoteResponseDto.setAnsVote(answerVote.getAnswerVote());
        answerVoteResponseDto.setAnsTotalVotes(answerVote.getAnswer().getAnsVotes());

        return answerVoteResponseDto;
    }
}
