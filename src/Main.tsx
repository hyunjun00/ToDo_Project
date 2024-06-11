import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const Submit = styled.input`
  placeholder: "Add Task";
`;

function Main() {
  return (
    <Wrapper>
      <Container>
        <Title>What do you need to do?</Title>
        <Submit></Submit>
      </Container>
    </Wrapper>
  );
}

export default Main;
