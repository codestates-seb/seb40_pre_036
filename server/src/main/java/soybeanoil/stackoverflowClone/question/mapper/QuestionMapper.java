package soybeanoil.stackoverflowClone.question.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import soybeanoil.stackoverflowClone.answer.entity.Answer;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.dto.QuestionAnswerResponseDto;
import soybeanoil.stackoverflowClone.question.dto.QuestionDto;
import soybeanoil.stackoverflowClone.question.dto.TagDto;
import soybeanoil.stackoverflowClone.question.dto.TagResponseDto;
import soybeanoil.stackoverflowClone.question.entity.Question;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.question.service.QuestionService;
import soybeanoil.stackoverflowClone.response.MultiResponseDto;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.mapper.UserMapper;
import soybeanoil.stackoverflowClone.user.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(UserService userService,
                                               QuestionDto.Post questionPostDto) {

        Question question = new Question();
//        question.setVotes(0);
//        question.setView(0);
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

        User user = userService.getLoginUser(); // 태그에 유저 설정하기 위한 유저 생성
        List<Tag> tags = tagsDtosToTags(questionPostDto.getTags(), question, user);

        question.setTags(tags);
        question.setUser(user); // 현재 로그인한 회원의 정보를 불러옴
        return question;
    }

    default List<Tag> tagsDtosToTags(List<TagDto> tagsDtos, Question question, User user){

        return tagsDtos.stream().distinct().map(tagDto -> {
            Tag tag = new Tag();
            tag.setUser(user);
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
                .distinct()
                .collect(Collectors.toList());
    }

    default Question questionPatchDtoToQuestion(UserService userService,
            QuestionService questionService, QuestionDto.Patch questionPatchDto) {
        User user = userService.getLoginUser();
        if(user.getUserId() !=
                questionService.findQuestionWriter(questionPatchDto.getQuestionId()).getUserId()) { //해당 유저가 쓴 질문글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }

        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setUser(user);

        if(questionPatchDto.getTags() == null){ // 태그 수정을 하지 않는 경우 -> 기존 질문에서 태그를 불러옴
            System.out.println("태그 수정 안하는 경우");
            question.setTags(questionService.findVerifiedQuestion(question.getQuestionId()).getTags());
        } else { // 태그 수정을 하는 경우
            System.out.println("태그 수정 하는 경우");
            List<Tag> tags = tagsDtosToTags(questionPatchDto.getTags(), question, user);
            question.setTags(tags);
        }
//        question.setQuestionStatus(questionPatchDto.getQuestionStatus());

        return question;
    }

    default QuestionDto.Response questionToQuestionResponseDto(UserMapper userMapper, Question question){

        QuestionDto.Response questionResponseDto = new QuestionDto.Response();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setVotes(question.getVotes());
        questionResponseDto.setView(question.getView());
        questionResponseDto.setAnswerCount(question.getAnswers().size());

        User user = question.getUser();//질문 작성자 속성 추가
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));

        questionResponseDto.setQuestionTags(tagsToTagResponseDtos(
                question.getTags()
        ));

        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;
    }

    default List<QuestionDto.Response> questionsToQuestionResponseDtos(UserMapper userMapper, List<Question> questions) {
        if(questions == null) return null;

        List<QuestionDto.Response> questionResponseDtos = new ArrayList<>(questions.size());

        for(Question question : questions) {
            questionResponseDtos.add(questionToQuestionResponseDto(userMapper, question));
        }


        return questionResponseDtos;
    }

    default QuestionAnswerResponseDto questionToQuestionAnswerResponseDto(
            AnswerService answerService, AnswerMapper answerMapper, UserMapper userMapper,
            Question question, Integer answerPage, Integer answerSize, String answerSort) {

        QuestionAnswerResponseDto questionAnswerResponseDto = new QuestionAnswerResponseDto();
        questionAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionAnswerResponseDto.setTitle(question.getTitle());
        questionAnswerResponseDto.setContent(question.getContent());
        questionAnswerResponseDto.setVotes(question.getVotes());
        questionAnswerResponseDto.setView(question.getView());

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
            questionAnswerResponseDto.setAnswerCount(answers.size());
            questionAnswerResponseDto.setAnswers(new MultiResponseDto<>(
                    answerMapper.answersToAnswerResponseDtos(userMapper, answers), pageAnswers));
        } catch(BusinessLogicException e){

        }

        return questionAnswerResponseDto;
    }
}
