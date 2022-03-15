import styled from "styled-components";
import { Spin } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";
import { fetchMostOverseas } from "../api";
import { Link } from "react-router-dom";
import { Seo } from "../Seo";

// interfaces
interface IMostStocks {
  data: Array<IMostStockVariable>;
}

interface IMostStockVariable {
  count: number;
  quotes: Array<string>;
}

// styled-components
const Container = styled.div`
  padding: 20px 20px;
`;

const Loader = styled.div`
  left: 50vw;
  top: 50vh;
  position: relative;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 40%;
  height: 30px;
  color: black;

  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  color: black;
`;

const OverseasList = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  text-align: center;
  color: white;
  /* color: white; ${(props) => props.theme.accentColor}; */
`;

const OverseasItem = styled.li`
  background-color: white;
  color: ${(props) => props.theme.accentColor};
  height: 80px;
  border-radius: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    padding-bottom: 30px;
    margin-top: 6px;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.activeColor};
    }
  }
`;

const OverseasTitle = styled.span`
  font-size: 1.25em;
`;

// variables

export function Overseas() {
  const { isLoading, data } = useQuery<IMostStocks>("most_overseas_stock", fetchMostOverseas);

  return (
    <Container>
      <Seo title="해외 주식" />
      <Search>
        <Input />
        <SearchButton>
          <AiOutlineSearch />
        </SearchButton>
      </Search>
      <Header>{`- ${data?.data[0].count}개의 인기 있는 미국 주식 -`}</Header>
      {isLoading ? (
        <Loader>
          <Spin size="large" tip="Loading..." />
        </Loader>
      ) : (
        <OverseasList>
          {data?.data[0].quotes.map((ticker, index) => (
            <OverseasItem>
              <Link
                to={{
                  pathname: `/overseas_stocks/${ticker}`,
                  state: {
                    ticker: ticker,
                  },
                }}
              >
                <OverseasTitle>{`${index + 1}위 : ${ticker}`}&nbsp;&nbsp; &rarr;</OverseasTitle>
              </Link>
            </OverseasItem>
          ))}
        </OverseasList>
      )}
    </Container>
  );
}

{
  /* <Loader>
        <Spin size="large" tip="Loading..." />
      </Loader> */
}
