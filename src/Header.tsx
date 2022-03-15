import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

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

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;

  @media screen and (min-width: 769px) {
    display: none;
  }

  svg {
    font-size: 24px;
  }
`;

const HamburgerMenuList = styled.ul<{ open: boolean; yOffset: number }>`
  background-color: black;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  transition: ${({ yOffset }) => (yOffset <= 100 ? "0.5s ease-in-out" : "none")};
  height: 100%;
  width: 40%;
  top: ${({ yOffset }) => (yOffset <= 100 ? "100px" : "0px")};
  right: 0px;
  z-index: 10;
  position: ${({ yOffset }) => (yOffset <= 100 ? "absolute" : "fixed")};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HamburgerMenu = styled.li<{ isActive?: boolean }>`
  ${reset}
  border-bottom: 2px solid gray;
  font-size: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  const onClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Head>
      <Logo>
        <Link to="/">
          <img src="/assets/img/icons/logo.png" alt="" />
        </Link>
      </Logo>
      <MenuList>
        <HamburgerButton onClick={onClick}>{open ? <AiOutlineClose /> : <FaEllipsisV />}</HamburgerButton>
        {menus.map((menu, index) => (
          <Menu key={index} isActive={matchPath === menu.path}>
            <Link to={menu.path}>{menu.title}</Link>
          </Menu>
        ))}
      </MenuList>
      <HamburgerMenuList open={open} yOffset={scrollY}>
        {menus.map((menu, index) => (
          <Link to={menu.path} onClick={() => setOpen((prev) => !prev)}>
            <HamburgerMenu isActive={matchPath === menu.path}>{menu.title}</HamburgerMenu>
          </Link>
        ))}
      </HamburgerMenuList>
    </Head>
  );
}
