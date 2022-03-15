import { Spin } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { fetchMostOverseas } from "../api";
import { Link } from "react-router-dom";
import { Seo } from "../Seo";
import { Container, Header, Input, List, ListItem, Loader, Search, SearchButton, Title } from "../styles/CategoryStyle";

// interfaces
interface IMostStocks {
  data: Array<IMostStockVariable>;
}

interface IMostStockVariable {
  count: number;
  quotes: Array<string>;
}

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
      {isLoading ? (
        <Loader>
          <Spin size="large" tip="Loading..." />
        </Loader>
      ) : (
        <>
          <Header>{`- 현재 ${data?.data[0].count}개의 인기 있는 미국 주식 -`}</Header>
          <List>
            {data?.data[0].quotes.map((ticker, index) => (
              <ListItem key={index} isMargin={true}>
                <Link
                  to={{
                    pathname: `/overseas_stocks/${ticker}`,
                    state: {
                      ticker: ticker,
                    },
                  }}
                >
                  <Title>{`${index + 1}위 : ${ticker}`}&nbsp;&nbsp; &rarr;</Title>
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}

{
  /* <Loader>
        <Spin size="large" tip="Loading..." />
      </Loader> */
}
