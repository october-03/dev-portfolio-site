import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0px;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  width: 800px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
`

const HelloTextWrapper = styled.p`
  word-break: keep-all;
`

const EmphaText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #008c9e;
`

const Text = styled.span`
  font-size: 1rem;
  font-weight: 400;
`

const ListWrapper = styled.ul``

const Link = styled.a`
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  color: #4FB0C6;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: #4F86C6;
  }
`

const List = styled.li`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 400;
  word-break: keep-all;
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Frontend Dev. JY</title>
        <meta name="description" content="프론트엔드 개발자 김재영" />
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
          <Title>기술스택</Title>
          <ListWrapper>
            <List>TypeScript</List>
            <List>ES6</List>
            <List>React</List>
            <List>React Hooks</List>
            <List>Redux</List>
            <List>Next.js</List>
            <List>React Native</List>
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>관심있는, 공부중인 기술</Title>
          <ListWrapper>
            <List>TDD</List>
            <List>SSR</List>
            <List>Webpack</List>
            <List>Babel</List>
            <List>Zero Install</List>
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>프로젝트</Title>
          <SubTitle>TiOS PAY 앱 리뉴얼</SubTitle>
          <ListWrapper>
            <List>회사 프로젝트</List>
            <List>개발기간: 2022.03 ~ 2022.05</List>
            <List>사용 기술 스택</List>
            <ListWrapper>
              <List>React Native</List>
              <List>Redux</List>
              <List>JavaScript</List>
              <List>React</List>
            </ListWrapper>
            <List>React Native 기반의 TiOS PAY -> AP First로의 전반적인 리뉴얼된 화면 개발 작업을 하였습니다.</List>
            <List>선물하기 관련 기능, 화면들을 중점적으로 개발했습니다</List>
            <List><Link href='https://play.google.com/store/apps/details?id=com.keepercustomerapp&hl=ko&gl=US' target='_blank'>LINK</Link></List>
          </ListWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Home
