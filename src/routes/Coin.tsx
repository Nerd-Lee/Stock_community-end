import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ICoins } from "./Coins";

// interface
interface IRouteState {
  coin: ICoins;
  symbolUrl: string;
}

// styled-components
const Container = styled.div`
  padding: 20px 20px;
  margin: 0 auto;
  width: 700px;
`;

const CoinImage = styled.img`
  width: 200px;
  height: 200px;
`;

export function Coin() {
  const {
    state: { coin, symbolUrl },
  } = useLocation<IRouteState>();

  return (
    <Container>
      <CoinImage src={symbolUrl} />
    </Container>
  );
}
