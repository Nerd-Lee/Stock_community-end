import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Seo } from "../Seo";
import { Spin } from "antd";
import { Container, LogoImage, List, ListItem, Loader, Title } from "../styles/CategoryStyle";

export interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

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
        <List>
          {data?.slice(0, 100).map((coin) => (
            <ListItem key={coin.rank} isMargin={false}>
              <Link
                to={{
                  pathname: `/coins/${coin.id}`,
                  state: {
                    coin: coin,
                    symbolUrl: `https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`,
                  },
                }}
              >
                <LogoImage src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                <Title>{`${coin.rank}위 : ${coin.name}`} &rarr;</Title>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
