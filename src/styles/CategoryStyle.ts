import styled from "styled-components";

// styled-components
export const Container = styled.div`
  margin: 20px 20px;
`;

export const Loader = styled.div`
  left: 50vw;
  top: 50vh;
  position: relative;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemList = styled.ul``;

export const Search = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 40%;
  height: 30px;
  color: black;

  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  color: black;
`;

export const Header = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
  color: white;
  /* color: white; ${(props) => props.theme.accentColor}; */
`;

export const List = styled.ul`
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

export const ListItem = styled.li<{ isMargin: boolean }>`
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
    margin-top: ${(props) => (props.isMargin ? "6px" : "0px")};
    transition: color 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.activeColor};
    }
  }
`;

export const Title = styled.span`
  font-size: 1.25em;
`;

export const LogoImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
