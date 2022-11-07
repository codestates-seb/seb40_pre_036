package soybeanoil.stackoverflowClone.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class TagDto {

//    @Positive
//    private Long tagId;

    @NotBlank(message = "태그를 기입해주세요")
    private String tagName;

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof TagDto) {
            TagDto tagDto = (TagDto) obj;
            return tagDto.tagName.equals(tagName);
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return tagName.hashCode();
    }

}
