package soybeanoil.stackoverflowClone.question.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.dto.QuestionAnswerResponseDto;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.dto.TagDto;
import soybeanoil.stackoverflowClone.question.dto.TagResponseDto;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {

        Question question = new Question();
        question.setVotes(0);

        List<Tag> tags = tagsDtosToTags(questionPostDto.getTags(), question);

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setTags(tags);
//        question.setUser(userService.getLoginUser()); // 현재 로그인한 회원의 정보를 불러옴
        return question;
    }

    default List<Tag> tagsDtosToTags(List<TagDto> tagsDtos, Question question){

        return tagsDtos.stream().map(tagDto -> {
            Tag tag = new Tag();
            tag.addQuestion(question);
            tag.setTagName(tagDto.getTagName());
            return tag;
        }).collect(Collectors.toList());
    }

    default List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {

        return tags.stream()
                .map(tag -> TagResponseDto
                        .builder()
                        .tagName(tag.getTagName())
                        .build())
                .collect(Collectors.toList());
    }

    default Question questionPatchDtoToQuestion(
            QuestionService questionService, UserService userService, QuestionDto.Patch questionPatchDto) {
        if(userService.getLoginUser().getUserId() !=
                questionService.findQuestionUser(questionPatchDto.getQuestionId()).getUserId()) { //해당 유저가 쓴 질문글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }

        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());

        if(questionPatchDto.getTags()==null){
            questionPatchDto.setTags(new ArrayList<>());
        }

        List<Tag> tags = tagsDtosToTags(questionPatchDto.getTags(),question);

        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setTags(tags);
        question.setQuestionStatus(questionPatchDto.getQuestionStatus());

        return question;
    }

    default QuestionDto.Response questionToQuestionResponseDto(UserMapper userMapper, Question question){
        List<Tag> tags = question.getTags();

        QuestionDto.Response questionResponseDto = new QuestionDto.Response();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setVotes(question.getVotes());

        User user = question.getUser();//질문 작성자 속성 추가
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));

        questionResponseDto.setQuestionTags(tagsToTagResponseDtos(
                question.getTags()
        ));

        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;
    }

    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    default QuestionAnswerResponseDto questionToQuestionAndAnswerResponseDto(
            AnswerService answerService, AnswerMapper answerMapper, UserMapper userMapper,
            Question question, Integer answerPage, Integer answerSize, String answerSort) {

        QuestionAnswerResponseDto questionAnswerResponseDto = new QuestionAnswerResponseDto();
        questionAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionAnswerResponseDto.setTitle(question.getTitle());
        questionAnswerResponseDto.setContent(question.getContent());
        questionAnswerResponseDto.setVotes(question.getVotes());

        User user = question.getUser();
        questionAnswerResponseDto.setUser(userMapper.userToUserResponseDto(user));

        questionAnswerResponseDto.setQuestionTags(tagsToTagResponseDtos(
                question.getTags()
        ));

        questionAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());

        try {
            Page<Answer> pageAnswers = answerService.findAnswers(
                    question,answerPage,answerSize,answerSort);
            List<Answer> answers = pageAnswers.getContent();
            questionAnswerResponseDto.setAnswers(new MultiResponseDto<>(
                    answerMapper.answersToAnswerResponseDtos(answers), pageAnswers));
        } catch(BusinessLogicException e){

        }

        return questionAnswerResponseDto;
    }
}
