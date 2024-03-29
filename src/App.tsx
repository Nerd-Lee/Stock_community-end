import { ReactQueryDevtools } from "react-query/devtools";
import { Router } from "./router";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./app.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
