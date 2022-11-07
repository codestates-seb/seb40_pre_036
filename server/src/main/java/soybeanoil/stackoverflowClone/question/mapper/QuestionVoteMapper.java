package soybeanoil.stackoverflowClone.question.mapper;

import org.mapstruct.Mapper;
import soybeanoil.stackoverflowClone.question.dto.QuestionVoteResponseDto;
import soybeanoil.stackoverflowClone.question.entity.QuestionVote;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {

    default QuestionVoteResponseDto questionVoteToQuestionVoteDto(QuestionVote questionVote) {
        QuestionVoteResponseDto questionVoteDto = new QuestionVoteResponseDto();
        questionVoteDto.setQuestionId(questionVote.getQuestion().getQuestionId());
        questionVoteDto.setVote(questionVote.getVote());
        questionVoteDto.setTotalVotes(questionVote.getQuestion().getVotes());

        return questionVoteDto;
    }
}
