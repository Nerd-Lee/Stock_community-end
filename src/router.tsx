import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Coin } from "./routes/Coin";
import { Coins } from "./routes/Coins";
import { Domestic } from "./routes/Domestic";
import { Home } from "./routes/Home";
import { Overseas } from "./routes/Overseas";
import { StockCalculator } from "./routes/StockCalculator";

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/domestic_stocks" component={Domestic} />
          <Route path="/overseas_stocks" component={Overseas} />
          <Route exact path="/coins" component={Coins} />
          <Route path="/stock_calculator" component={StockCalculator} />
          <Route exact path="/coins/:coinId" component={Coin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
