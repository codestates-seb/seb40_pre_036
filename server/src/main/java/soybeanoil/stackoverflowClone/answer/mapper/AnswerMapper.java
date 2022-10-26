package soybeanoil.stackoverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPatchDto;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPostDto;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        User user = new User();
        Question question = new Question();

        user.setUserId(answerPostDto.getAnswerId());
        question.setQuestionId(answerPostDto.getAnswerId());

        answer.setUser(user); //
        answer.setQuestion(question);
        answer.setAnswerContent(answerPostDto.getContent());

        return answer;
    }
}
