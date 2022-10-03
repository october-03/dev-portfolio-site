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
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"></link>
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
          <SubTitle>연락처</SubTitle>
          <ListWrapper>
            <List><Link href='mailto:season_autumn@kakao.com' target={'_blank'}>season_autumn@kakao.com</Link></List>
          </ListWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Title>LINK</Title>
          <ListWrapper>
            <List><Link href='https://github.com/october-03' target={'_blank'}>GITHUB</Link></List>
            <List><Link href='https://www.rocketpunch.com/@autumnoctoberbus' target={'_blank'}>ROCKETPUNCH</Link></List>
            <List><Link href='https://velog.io/@october03' target={'_blank'}>BLOG</Link></List>
            <List><Link href='https://www.linkedin.com/in/jae-young-kim-761408220/' target={'_blank'}>LINKEDIN</Link></List>
          </ListWrapper>
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
            <List>{`React Native 기반의 TiOS PAY -> AP First로의 전반적인 리뉴얼된 화면 개발 작업을 하였습니다.`}</List>
            <List>선물하기 관련 기능, 화면들을 중점적으로 개발했습니다</List>
            <List><Link href='https://play.google.com/store/apps/details?id=com.keepercustomerapp&hl=ko&gl=US' target='_blank'>LINK</Link></List>
          </ListWrapper>
          <SubTitle>SOOSIM 17.5 개발</SubTitle>
          <ListWrapper>
            <List>개인 프로젝트</List>
            <List>개발기간: 2022.07</List>
            <List>사용 기술 스택</List>
            <ListWrapper>
              <List>React</List>
              <List>TypeScript</List>
            </ListWrapper>
            <List>{`한양사이버대학교 디자인학부 졸업전시회 17.5회 수심 사이트 개발을 하였습니다`}</List>
            <List><Link href='https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/17_5th/index.html' target='_blank'>LINK</Link></List>
          </ListWrapper>
          <SubTitle>롤 전적검색 및 팀 매칭 사이트 개발</SubTitle>
          <ListWrapper>
            <List>개인 프로젝트</List>
            <List>개발기간: 2022.09 ~ 작업중</List>
            <List>사용 기술 스택</List>
            <ListWrapper>
              <List>React</List>
              <List>TypeScript</List>
              <List>Next.js</List>
              <List>Node.js</List>
              <List>Express</List>
              <List>MongoDB</List>
            </ListWrapper>
            <List>{`현재 작업중에 있으며 Node.js, Express, MongoDB를 기반으로 한 API는 개발이 완료되었습니다.`}</List>
          </ListWrapper>
          <SubTitle>mts 앱 제작 (앱 이름 미정)</SubTitle>
          <ListWrapper>
            <List>회사 프로젝트</List>
            <List>개발기간: 2022.04 ~ 작업중</List>
            <List>사용 기술 스택</List>
            <ListWrapper>
              <List>React Native</List>
              <List>TypeScript</List>
            </ListWrapper>
            <List>{`React Native 기반의 코인 트레이딩 봇 관리 앱을 제작하고 있습니다.`}</List>
            <List>전반적인 화면개발 작업과 봇 관련 기능 개발 작업을 했습니다.</List>
          </ListWrapper>
          <SubTitle>거래 관련 앱 제작 (앱 이름 미정)</SubTitle>
          <ListWrapper>
            <List>회사 프로젝트</List>
            <List>개발기간: 2022.04 ~ 작업중</List>
            <List>사용 기술 스택</List>
            <ListWrapper>
              <List>React Native</List>
              <List>React</List>
              <List>TypeScript</List>
            </ListWrapper>
            <List>{`React Native 기반의 거래소 앱을 제작하고 있습니다.`}</List>
            <List>전반적인 화면개발 작업과 경매 기능 개발, 회원 정보 관련 기능 개발작업을 했습니다.</List>
          </ListWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Home
