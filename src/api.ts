const BASE_COIN_URL = process.env.REACT_APP_COIN_API_URL;

export function fetchCoins() {
  return fetch(`${BASE_COIN_URL}/coins`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error("coins api error : ", err);
    });
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_COIN_URL}/coins/${coinId}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error("coin info error : ", err);
    });
}

export function fetchCoinTicker(coinId: string) {
  return fetch(`${BASE_COIN_URL}/tickers/${coinId}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error("coin info error : ", err);
    });
}
