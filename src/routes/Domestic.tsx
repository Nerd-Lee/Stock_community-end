import { Spin } from "antd";
import { Container, Header, Input, List, ListItem, Loader, Search, SearchButton, Title } from "../styles/CategoryStyle";
import { Seo } from "../Seo";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { fetchDomestics } from "../api";
import { Link } from "react-router-dom";

// interfaces
interface IDomestics {
  response: {
    body: {
      items: {
        item: Array<IDomesticVaribale>;
      };
    };
  };
}

interface IDomesticVaribale {
  basDt: string;
  srtnCd: string;
  isinCd: string;
  itmsNm: string;
  mrktCtg: string;
  clpr: string;
  vs: string;
  fltRt: string;
  mkp: string;
  hipr: string;
  lopr: string;
  trqu: string;
  trPrc: string;
  lstgStCnt: string;
  mrktTotAmt: string;
}

export function Domestic() {
  const { isLoading, data } = useQuery<IDomestics>("domestic_stock", fetchDomestics);
  let parsingData: Array<IDomesticVaribale> | undefined = data?.response.body.items.item;
  let finalData: Array<IDomesticVaribale> | undefined;

  parsingData?.sort((a, b) => {
    return Number(b.mrktTotAmt) - Number(a.mrktTotAmt);
  });

  finalData = parsingData?.filter((item, i) => {
    return (
      parsingData?.findIndex((item2, j) => {
        return item.itmsNm === item2.itmsNm;
      }) === i
    );
  });

  return (
    <Container>
      <Seo title="국내 주식" />
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
          <Header>{`- 현재 ${finalData?.slice(0, 200).length}대 기업 시가총액 순 -`}</Header>
          <List>
            {finalData?.slice(0, 200).map((data, index) => (
              <ListItem key={index} isMargin={true}>
                <Link to={{}}>
                  <Title>{`${index + 1}위 : ${data.itmsNm}`}</Title>
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}
