import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 800px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ProjectWrapper = styled.div`
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
`;

const HelloTextWrapper = styled.p`
  word-break: keep-all;
`;

const EmphaText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #008c9e;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const PeriodText = styled.span`
  font-size: 0.8rem;
  margin-top: 0.8rem;
`;

const ListWrapper = styled.ul``;

const Link = styled.a`
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  color: #4fb0c6;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: #4f86c6;
  }
`;

const List = styled.li`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 400;
  word-break: keep-all;
`;

export {
  Wrapper,
  ContentWrapper,
  ListWrapper,
  List,
  HelloTextWrapper,
  Text,
  EmphaText,
  PeriodText,
  InnerWrapper,
  ProjectWrapper,
  Link,
  Title,
  SubTitle,
};
