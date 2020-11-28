import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
`;

const HelloWorld = () => {
  const hello = "hello";
  return <Wrapper>{hello} world</Wrapper>;
};

export default HelloWorld;
