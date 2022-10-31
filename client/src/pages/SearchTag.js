import React, { useEffect, useState } from 'react';
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
  const [tags, setTags] = useState([]); // setTags

  useEffect(() => {
    // name, count 요청
    fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => data.items)
      .then(items => setTags(items))
      .catch(err => console.log(err));
    //   // tag info 요청
    //   fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
    //     .then(res => res.json())
    //     .then(data => data.items)
    //     .then(items => setTags(items));
  }, []);

  return (
    <Container>
      <Nav path="Tags" />
      <ContentContainer>
        <TagsHeader />
        <TagBoxGrid>
          {tags.map(tag => (
            <TagBox key={tag.count} name={tag.name} count={tag.count} />
          ))}
        </TagBoxGrid>
      </ContentContainer>
    </Container>
  );
}

export default SearchTag;
