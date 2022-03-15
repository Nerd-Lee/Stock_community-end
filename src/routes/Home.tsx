import { Seo } from "../Seo";
import styled from "styled-components";

// Interface
interface IIntroduce {
  big_topic: string;
  small_topic: string;
  img_src?: string;
}

// styled-components

const Container = styled.div``;

const TopicContainer = styled.div`
  border-bottom: 8px solid #222;
  background: 0 0;
  padding: 70px 45px;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  direction: ltr;
  word-break: keep-all;
  color: #fff;
`;

const TopicCard = styled.div`
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  color: #fff;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TopicCardText = styled.div`
  -webkit-text-size-adjust: 100%;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  color: #fff;
  font-size: 1.625rem;
  font-weight: 400;
  width: 100%;
  height: 50%;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  padding: 0 3rem 0 0;
  z-index: 3;
  margin: -5% 0;
  white-space: pre-line;

  @media ${(props) => props.theme.tablet} {
    padding: 3rem 0 3rem 0;
  }
`;

const BigTopicTitle = styled.h1`
  -webkit-text-size-adjust: 100%;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  color: #fff;
  margin: 0 0 0.4em;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: normal;

  @media ${(props) => props.theme.tablet} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const SmallTopicTitle = styled.h2`
  -webkit-text-size-adjust: 100%;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  color: #fff;
  line-height: 1.3;
  margin: 0.75em 0 0.25em;
  font-size: 1.5rem;
  font-weight: 400;

  @media ${(props) => props.theme.tablet} {
    font-size: 1rem;
    text-align: center;
  }
`;

const TopicImgContainer = styled.div`
  text-size-adjust: 100%;
  font-size: 16px;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  color: rgb(255, 255, 255);
  width: 50%;
  height: 50%;
  display: flex;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  box-sizing: border-box;

  @media ${(props) => props.theme.tablet} {
    justify-content: center;
  }
`;

const TopiccImg = styled.img`
  text-size-adjust: 100%;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  max-width: 100%;
  height: auto;
  position: relative;
`;

// variable
const topics: Array<IIntroduce> = [
  {
    big_topic: "국내뿐만 아니라\n해외주식의 정보를 찾아보세요.",
    small_topic:
      "KOSPI 및 KOSDAQ에 상장되어 있는 여러 주식과\n해외에 상장되어 있는 주식들의 가격을 살펴볼 수 있습니다.",
    img_src: "/assets/img/icons/HomeIcons/1.png",
  },
  {
    big_topic: "100개의 인기 있는 코인 시세도 찾아보세요.",
    small_topic: "인기 있는 100개의 비트코인 시세도 쉽게 찾아볼 수 있습니다.",
    img_src: "/assets/img/icons/HomeIcons/2.png",
  },
  {
    big_topic: "주식 계산도 쉽게 하실 수 있습니다.",
    small_topic: "평단 계산과 실시간 달러 환율을 이용해\n해외주식 수익도 계산이 가능합니다.",
    img_src: "/assets/img/icons/HomeIcons/3.png",
  },
];

// render
export function Home() {
  return (
    <Container>
      <Seo title="Home" />
      {topics.map((topic) => (
        <TopicContainer>
          <TopicCard>
            <TopicCardText>
              <BigTopicTitle>{topic.big_topic}</BigTopicTitle>
              <SmallTopicTitle>{topic.small_topic}</SmallTopicTitle>
            </TopicCardText>
            <TopicImgContainer>
              <TopiccImg src={topic.img_src} />
            </TopicImgContainer>
          </TopicCard>
        </TopicContainer>
      ))}
    </Container>
  );
}
