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
    border-right: transparent;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-left: transparent;
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
  // background-image: url(https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=96&d=identicon&r=PG&f=1);
  border-radius: 2px;
`;

const UserDetails = styled.div`
  margin-left: 9px;
  height: 20px;
  font-size: 15px;

  span {
    display: block;
    margin-bottom: 5px;
    &:first-child {
      color: hsl(206deg 100% 40%);
    }

    &:hover {
      &:first-child {
        color: #0a95ff;
        cursor: pointer;
      }
    }
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

const UserTags = styled.div`
  color: hsl(206deg 100% 40%);
  font-size: 12px;
  margin: 5px 0 2px 57px;

  &:hover {
    color: #0a95ff;
    cursor: pointer;
  }
`;

function SearchUser() {
  const [clicked, setClicked] = useState();
  const [users, setUsers] = useState([{}]);

  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);

  const setAllUsers = () => {
    fetch('https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow')
      .then(res => res.json())
      .then(res => setUsers(res.items));
  };
  console.log(users);

  useEffect(() => {
    setAllUsers();
  }, []);

  return (
    <SearchUserPage>
      <Nav />
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
              <Input placeholder="Filter by user" type="text" />
            </Form>
          </UserSearch>
          <SerchFilter>
            <FilterBtn className={clicked === 'Reputation' ? 'clicked' : ''} onClick={onClick}>
              Reputation
            </FilterBtn>
            <FilterBtn className={clicked === 'New users' ? 'clicked' : ''} onClick={onClick}>
              New users
            </FilterBtn>
            <FilterBtn className={clicked === 'Name' ? 'clicked' : ''} onClick={onClick}>
              Name
            </FilterBtn>
          </SerchFilter>
        </Search>
        <UserBrowser>
          {users &&
            users.map(user => (
              <UserItem key={user.user_id}>
                <div className="div">
                  <UserAvatar src={user.profile_image} />
                  <UserDetails>
                    <span>{user.display_name}</span>
                    <UserLocation>{user.location}</UserLocation>
                    <UserReputation>{user.reputation}</UserReputation>
                  </UserDetails>
                </div>
                <UserTags>python, pandas, dataframe</UserTags>
              </UserItem>
            ))}
        </UserBrowser>
      </MainBar>
    </SearchUserPage>
  );
}

export default SearchUser;
