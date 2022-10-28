import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
`;
const Hr = styled.hr`
  border: 1px solid rgb(216, 217, 220);
  width: 750px;
  height: 1px;
  margin: 20px 0;
`;
const Inform = styled.h4`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 0.8em;
`;
const Ul = styled.ul`
  font-size: 0.8em;
`;
const Li = styled.li`
  font-size: 0.8em;
  margin: 5px 15px;
  list-style-type: disc;
`;
const Input = styled.input``;
const Checkexplain = styled.span`
  font-size: 0.7em;
`;
const CheckDelete = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Button = styled.button`
  color: white;
  padding: 10px 15px;
  width: 100px;
  white-space: nowrap;
  border: none;
  background-color: #e49399;
  border-radius: 3px;
  margin-top: 20px;
  text-align: center;
`;
function Deleteprofile() {
  // const [checked, setChecked] = useState(false);
  // const handleCheck = setChecked(!checked);
  return (
    <Container>
      <Title>Delete Profile</Title>
      <Hr />
      <Inform>
        Before confirming that you would like your profile deleted, we&apos;d like to take a moment
        to explain the implications of deletion:
      </Inform>
      <Ul>
        <Li>
          Deletion is irreversible, and you will have no way to regain any of your original content,
          should this deletion be carried out and you change your mind later on.
        </Li>
        <Li>
          Your questions and answers will remain on the site, but will be disassociated and
          anonymized (the author will be listed as &quot;user20312003&quot;) and will not indicate
          your authorship even if you later return to the site.
        </Li>
      </Ul>
      <Inform>
        Confirming deletion will only delete your profile on Stack Overflow - it will not affect any
        of your other profiles on the Stack Exchange network. If you want to delete multiple
        profiles, you&apos;ll need to visit each site separately and request deletion of those
        individual profiles.
      </Inform>
      <CheckDelete>
        <Input type="checkbox" className="checkbox" />
        <Checkexplain>
          I have read the information stated above and understand the implications of having my
          profile deleted. I wish to proceed with the deletion of my profile.
        </Checkexplain>
      </CheckDelete>
      <Button>Delete profile</Button>
    </Container>
  );
}

export default Deleteprofile;
