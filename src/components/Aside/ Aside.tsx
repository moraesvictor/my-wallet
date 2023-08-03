import * as S from "./Aside.styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logo from "../../assets/logo.svg";

const MenuItems = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: MdDashboard,
  },
  {
    name: "Entradas",
    route: "/list/entries",
    icon: MdArrowDownward,
  },
  {
    name: "Saídas",
    route: "/list/expenses",
    icon: MdArrowUpward,
  },
  {
    name: "Sair",
    route: "#",
    icon: MdExitToApp,
  },
];

export const Aside = () => {
  return (
    <S.Wrapper>
      <S.SidenavHeader>
        <S.Logo src={logo} alt="logo da carteira" />
        <S.MyWallet>Minha Carteira</S.MyWallet>
      </S.SidenavHeader>

      <S.MenuContainer>
        {MenuItems.map((menuItem, index) => (
          <S.MenuItemLink key={index} href={menuItem.route}>
            {menuItem.icon}
            {menuItem.name}
          </S.MenuItemLink>
        ))}
      </S.MenuContainer>
    </S.Wrapper>
  );
};
