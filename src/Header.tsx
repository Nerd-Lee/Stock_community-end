import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import reset from "styled-reset";

// Interface
interface IMenus {
  title: string;
  path: string;
}

// styled-components

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;

  a {
    width: 140px;
    height: 100px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`;

const Menu = styled.li<{ isActive?: boolean }>`
  ${reset}
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => (props.isActive ? props.theme.activeColor : props.theme.textColor)};
`;

// variable
const menus: Array<IMenus> = [
  {
    title: "국내 주식",
    path: "/domestic_stocks",
  },
  {
    title: "해외 주식",
    path: "/overseas_stocks",
  },
  {
    title: "코인",
    path: "/coins",
  },
  {
    title: "주식 계산",
    path: "/stock_calculator",
  },
];

export function Header() {
  const matchPath = useLocation().pathname;

  return (
    <Head>
      <Logo>
        <Link to="/">
          <img src="/assets/img/icons/logo.png" alt="" />
        </Link>
      </Logo>
      <MenuList>
        {menus.map((menu, index) => (
          <Menu key={index} isActive={matchPath === menu.path}>
            <Link to={menu.path}>{menu.title}</Link>
          </Menu>
        ))}
      </MenuList>
    </Head>
  );
}
