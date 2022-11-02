package soybeanoil.stackoverflowClone.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPatchDto;
import soybeanoil.stackoverflowClone.answer.dto.AnswerPostDto;
import soybeanoil.stackoverflowClone.answer.dto.AnswerResponseDto;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.service.QuestionService;
import soybeanoil.stackoverflowClone.user.dto.UserResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
//
//    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
//
//    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
//
//    Answer answerToAnswerResponseDto(Answer answer);
//
//    }
//

    default  Answer answerPostDtoToAnswer(long questionId,
                                          QuestionService questionService,
                                          UserService userService,
                                          AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        answer.setQuestion(questionService.findQuestion(questionId));
        answer.setAnswerContent(answerPostDto.getAnswerContent());
        answer.setQuestion(questionService.findVerifiedQuestion(answerPostDto.getQuestionId()));
        answer.setUser(userService.getLoginUser());// 로그인 중 회원정보

        return answer;
    }

    default Answer answerPatchDtoToAnswer(AnswerService answerService,
                                          UserService userService,
                                          AnswerPatchDto answerPatchDto) {
        if (userService.getLoginUser().getUserId() != answerService.findAnswerUser(answerPatchDto.getAnswerId()).getUserId()) { //본인외 답 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setAnswerContent(answerPatchDto.getAnswerContent());
        answer.setAnswerStatus(answerPatchDto.getAnswerStatus());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(UserMapper userMapper, Answer answer, long questionId){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setQuestionId(questionId);
        answerResponseDto.setAnswerStatus(answer.getAnswerStatus());
        answerResponseDto.setAnswerContent(answer.getAnswerContent());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());

        User user = answer.getUser();
        answerResponseDto.setUser(userMapper.userToUserResponseDto(user));
        answerResponseDto.setModifiedAt(answer.getModifiedAt());

        answerResponseDto.setVote(answer.getAnsVotes());

        return answerResponseDto;
    }

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
