package soybeanoil.stackoverflowClone.question.service;

import org.springframework.stereotype.Service;
import soybeanoil.stackoverflowClone.exception.BusinessLogicException;
import soybeanoil.stackoverflowClone.exception.ExceptionCode;
import soybeanoil.stackoverflowClone.question.entity.Tag;
import soybeanoil.stackoverflowClone.question.repository.TagRepository;
import soybeanoil.stackoverflowClone.user.entity.User;

import java.util.List;
import java.util.Optional;

@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

//    public List<Tag> createTags(List<Tag> tags) {
//        return tags.stream()
//                .map(tagRepository::save)
//                .collect(Collectors.toList());
//    }
    public Tag createTag(Tag tag) {
        verifyExistTag(tag.getTagName());
        return tagRepository.save(tag);
    }

    public void verifyExistTag(String tagName) {
        Optional<Tag> findTag = tagRepository.findByTagName(tagName);
        if(findTag.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.TAG_EXIST);
        }
    }

    public List<Tag> findUserTags(User user) {
        return tagRepository.findAllByUser(user);
    }
}
