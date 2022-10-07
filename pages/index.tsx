import type { NextPage } from "next";
import Head from "next/head";
import {
  Wrapper,
  ContentWrapper,
  ListWrapper,
  List,
  SubTitle,
  Title,
  Text,
  EmphaText,
  ProjectWrapper,
  InnerWrapper,
  PeriodText,
  Link,
  HelloTextWrapper,
} from "../styled-component";
import {
  LinkData,
  EducationData,
  TechStackData,
  WorkExperienceData,
  ProjectData,
  Email,
} from "../data";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Frontend Dev. JY</title>
        <meta name="description" content="프론트엔드 개발자 김재영" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"
        />
      </Head>
      <InnerWrapper>
        <ContentWrapper>
          <Title>안녕하세요!</Title>
          <HelloTextWrapper>
            <EmphaText>유저를 위한 </EmphaText>
            <Text>개발을 하고, </Text>
            <EmphaText>유저를 위한 </EmphaText>
            <Text>서비스를 만드는 프론트엔드 개발자 김재영입니다. </Text>
            <br />
            <Text>계속 </Text>
            <EmphaText>배우고, 발전하는 </EmphaText>
            <Text>개발자가 되겠습니다.</Text>
          </HelloTextWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <SubTitle>CONTACT</SubTitle>
          <ListWrapper>
            <List>
              <Link href={`mailto:${Email}`} target={"_blank"}>
                {Email}
              </Link>
            </List>
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <SubTitle>LINK</SubTitle>
          <ListWrapper>
            {LinkData.map((data, index) => {
              return (
                <List key={index}>
                  <Link href={data.url} target={"_blank"}>
                    {data.title}
                  </Link>
                </List>
              );
            })}
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>TECH STACK</Title>
          <ListWrapper>
            {TechStackData.usable.map((data, index) => {
              return <List key={index}>{data}</List>;
            })}
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>INTERESTED TECH</Title>
          <ListWrapper>
            {TechStackData.interested.map((data, index) => {
              return <List key={index}>{data}</List>;
            })}
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>WORK EXPERIENCE</Title>
          {WorkExperienceData.map((data, index) => {
            return (
              <div key={index}>
                <SubTitle>{data.companyName}</SubTitle>
                <PeriodText>재직기간: {data.period}</PeriodText>
                {data.list && (
                  <ListWrapper>
                    {data.list.map((list, index) => {
                      return <List key={index}>{list}</List>;
                    })}
                  </ListWrapper>
                )}
              </div>
            );
          })}
        </ContentWrapper>
        <ContentWrapper>
          <Title>EDUCATION</Title>
          {EducationData.map((data, index) => {
            return (
              <div key={index}>
                <SubTitle>{data.schoolName}</SubTitle>
                <PeriodText>재학기간: {data.period}</PeriodText>
                {data.list && (
                  <ListWrapper>
                    {data.list.map((list, index) => {
                      return <List key={index}>{list}</List>;
                    })}
                  </ListWrapper>
                )}
              </div>
            );
          })}
        </ContentWrapper>
        <ContentWrapper>
          <Title>PROJECT</Title>
          {ProjectData.map((data, index) => {
            return (
              <ProjectWrapper key={index}>
                <SubTitle>{data.title}</SubTitle>
                <ListWrapper>
                  {data.list.content.map((content, index) => {
                    return <List key={index}>{content}</List>;
                  })}
                  <List>사용 기술 스택</List>
                  <ListWrapper>
                    {data.list.techStack.map((techStack, index) => {
                      return <List key={index}>{techStack}</List>;
                    })}
                  </ListWrapper>
                  {data.link && (
                    <List>
                      <Link href={data.link} target="_blank">
                        LINK
                      </Link>
                    </List>
                  )}
                </ListWrapper>
              </ProjectWrapper>
            );
          })}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Home;
