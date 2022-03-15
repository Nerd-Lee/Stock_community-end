import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Seo } from "../Seo";
import { Spin } from "antd";

export interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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

const CoinsList = styled.ul`
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

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.accentColor};
  height: 80px;
  border-radius: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 24px;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.activeColor};
    }
  }
`;

const CoinImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const CoinTitle = styled.span`
  font-size: 0.95em;
`;

export function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Seo title="Coin" />
      {isLoading ? (
        <Loader>
          <Spin size="large" tip="Loading..." />
        </Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.rank}>
              <Link
                to={{
                  pathname: `/coins/${coin.id}`,
                  state: {
                    coin: coin,
                    symbolUrl: `https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`,
                  },
                }}
              >
                <CoinImage src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                <CoinTitle>{`${coin.rank}위 : ${coin.name}`} &rarr;</CoinTitle>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
