import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const SubTitle = styled.h2`
    font-size: 0.5em;
    text-align: right;
    color: black;
`;

const Box = styled.div`
    background: orange;
    padding: 20px;
    color: white;
`;

function StyledComponent() {
  return (
    <Wrapper>
      <Title>
        Hello World, this is my first styled component!
        <SubTitle>This is Sub title</SubTitle>
      </Title>
      <Box>
        Hello World, this is my first styled component!
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default StyledComponent
