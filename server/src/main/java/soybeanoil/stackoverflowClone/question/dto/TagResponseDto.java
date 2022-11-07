package soybeanoil.stackoverflowClone.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TagResponseDto {

    private String tagName;

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof TagResponseDto) {
            TagResponseDto tagResponseDto = (TagResponseDto) obj;
            return tagResponseDto.tagName.equals(tagName);
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return tagName.hashCode();
    }
}
