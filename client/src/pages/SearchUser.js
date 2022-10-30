import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const SearchUserPage = styled.div`
  display: flex;
  margin: 0 5rem 0 3rem;
`;

const MainBar = styled.main`
  padding: 24px;
  width: 100%;
`;

const Start = styled.div`
  margin-bottom: 2rem;
  height: 38px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserSearch = styled.div`
  width: 20%;
`;

const Form = styled.form`
  display: flex;
  max-width: 100%;
  align-items: center;
  position: relative;

  .search {
    position: absolute;
    left: 0px;
    opacity: 0.4;
    margin: 0 0.5rem;
  }
`;

const Input = styled.input`
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
  height: 2.5rem;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
`;

const SerchFilter = styled.div`
  font-size: 0.85rem;
  border-spacing: 0;
`;

const FilterBtn = styled.div`
  display: inline-block;
  padding: 0.8rem;
  flex: 1;
  border: 1px solid hsl(210deg 8% 65%);
  background: white;
  color: hsl(210deg 8% 45%);

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:hover {
    color: hsl(210deg 8% 35%);
    background: hsl(210deg 8% 98%);
    cursor: pointer;
  }

  &.clicked {
    color: #3b4045;
    background: #e3e6e8;
    border: 1px solid hsl(210deg 8% 55%);

    &:first-child {
      border-right: transparent;
    }

    &:last-child {
      border-left: transparent;
    }
  }
`;

const UserBrowser = styled.div`
  margin: 24px 0 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px 6px 7px 7px;
  color: hsl(210deg 8% 45%);

  .div {
    display: flex;
  }
`;

const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 2px;
`;

const UserDetails = styled.div`
  margin-left: 9px;
  height: 20px;
  font-size: 15px;

  a {
    text-decoration: none;
    outline: none;
    display: block;
    margin-bottom: 5px;
    color: hsl(206deg 100% 40%);

    &:hover {
      color: #0a95ff;
      cursor: pointer;
    }
  }

  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserLocation = styled.span`
  margin-top: 5px;
  color: #6a737c;
  font-size: 12px;
  margin: 0 0 2px;
`;

const UserReputation = styled.span`
  margin: 5px 0 5px;
  color: #6a737c;
  font-size: 12px;
  font-weight: bold;
`;

const UserBadge = styled.div`
  display: flex;
  color: #838c95;
  font-size: 12px;
  margin: 5px 0 2px 57px;
`;

const Badges = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  .gold-badge {
    margin-right: 3px;
    width: 6px;
    height: 6px;
    background: #ffcc01;
    border-radius: 50%;
  }

  .silver-badge {
    margin-right: 3px;
    margin-left: 8px;
    width: 6px;
    height: 6px;
    background: #b4b8be;
    border-radius: 50%;
  }

  .bronze-badge {
    margin-right: 3px;
    margin-left: 8px;
    width: 6px;
    height: 6px;
    background: #d2a685;
    border-radius: 50%;
  }
`;

function SearchUser() {
  const [clicked, setClicked] = useState('reputation');
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');

  const fetchUsers = filter => {
    fetch(`https://api.stackexchange.com/2.3/users?order=desc&sort=${filter}&site=stackoverflow`)
      .then(res => res.json())
      .then(res => setUsers(res.items));
  };

  const onClick = useCallback(e => {
    const text = e.target.innerText;

    if (text === 'Reputation') {
      setClicked('reputation');
      fetchUsers('reputation');
    } else {
      setClicked('creation');
      fetchUsers('creation');
    }
  }, []);

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSearch = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // 키를 눌렀을 때 동작할 코드
      // const filtered = users.filter(user => {
      //   return user.display_name.toUpperCase().includes(value.toUpperCase());
      // });
      fetch(
        `https://api.stackexchange.com/2.3/users?order=desc&sort=${clicked}&inname=${value}&site=stackoverflow`,
      )
        .then(res => res.json())
        .then(res => setUsers(res.items));
    }
  };

  useEffect(() => {
    fetchUsers(clicked);
  }, []);

  return (
    <SearchUserPage>
      <Nav path="Users" />
      <MainBar>
        <Start>
          <Title>Users</Title>
        </Start>
        <Search>
          <UserSearch>
            <Form>
              <svg className="search" width="18" height="18" viewBox="0 0 18 18">
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z" />
              </svg>
              <Input
                placeholder="Filter by user"
                type="search"
                value={value}
                onChange={onChange}
                onKeyPress={onSearch}
              />
            </Form>
          </UserSearch>
          <SerchFilter>
            <FilterBtn className={clicked === 'reputation' ? 'clicked' : ''} onClick={onClick}>
              Reputation
            </FilterBtn>
            <FilterBtn className={clicked === 'creation' ? 'clicked' : ''} onClick={onClick}>
              New users
            </FilterBtn>
          </SerchFilter>
        </Search>
        <UserBrowser>
          {users &&
            users.map(user => (
              <UserItem key={user.account_id}>
                <div className="div">
                  <UserAvatar src={user.profile_image} />
                  <UserDetails>
                    <a href={user.link}>{user.display_name}</a>
                    <UserLocation>{user.location}</UserLocation>
                    <UserReputation>
                      {user.reputation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </UserReputation>
                  </UserDetails>
                </div>
                <UserBadge>
                  <Badges>
                    <span className="gold-badge" />
                    <span>{user.badge_counts.gold}</span>
                  </Badges>
                  <Badges>
                    <span className="silver-badge" />
                    <span>{user.badge_counts.silver}</span>
                  </Badges>
                  <Badges>
                    <span className="bronze-badge" />
                    <span>{user.badge_counts.bronze}</span>
                  </Badges>
                </UserBadge>
              </UserItem>
            ))}
        </UserBrowser>
      </MainBar>
    </SearchUserPage>
  );
}

export default SearchUser;
