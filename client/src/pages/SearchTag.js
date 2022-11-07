import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import TagsHeader from '../components/searchtags/TagsHeader';
import TagBox from '../components/searchtags/TagBox';
import Pagination from '../components/Pagination';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 1088px;
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
  const [tags, setTags] = useState([]);

  // 페이지네이션을 위한 states
  const [limit, setLimit] = useState(32);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('Popular');
  const offset = (page - 1) * limit;

  // 정렬
  const [order, setOrder] = useState('desc');

  // Input의 입력값
  const [value, setValue] = useState('');

  useEffect(() => {
    // name, count 요청 (초기 화면)
    if (value === '') {
      fetch(
        `https://api.stackexchange.com/2.3/tags?pagesize=100&order=${order}&sort=${sort}&site=stackoverflow`,
      )
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => data.items)
        .then(items => setTags(items))
        .catch(err => console.log(err));

      // tag 검색 시
    } else {
      fetch(
        `https://api.stackexchange.com/2.3/tags?pagesize=100&order=${order}&sort=${sort}&inname=${value}&site=stackoverflow`,
      )
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => data.items)
        .then(items => {
          setTags(items);
        })
        .catch(err => console.log(err));
    }
  }, [value, sort]);

  return (
    <Container>
      <Nav path="Tags" />
      <ContentContainer>
        <TagsHeader
          setSort={setSort}
          sort={sort}
          setOrder={setOrder}
          setValue={setValue}
          value={value}
        />
        <TagBoxGrid>
          {tags.slice(offset, offset + limit).map((tag, idx) => (
            <TagBox key={`${idx.toString()}-${tag}`} name={tag.name} count={tag.count} />
          ))}
        </TagBoxGrid>
        <Pagination
          total={tags.length}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
          disable
        />
      </ContentContainer>
    </Container>
  );
}

export default SearchTag;
