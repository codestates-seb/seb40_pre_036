import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import TagsHeader from '../components/searchtags/TagsHeader';
import TagBox from '../components/searchtags/TagBox';

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const TagBoxGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  @media screen and (max-width: 1345px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1028px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 711px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

function SearchTag() {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <TagsHeader />
        <TagBoxGrid>
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
          <TagBox />
        </TagBoxGrid>
      </ContentContainer>
    </Container>
  );
}

export default SearchTag;
