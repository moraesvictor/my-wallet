import * as S from "./Dashboard.styles";
import { ContentHeader } from "../../components/Content";
import { SelectInput } from "../../components/Content/ContentHeader/ContentHeader.styles";
import {
  months,
  years,
} from "../../components/Content/ContentHeader/ContentHeader";
import { DashboardCard } from "../../components/DashboardCard";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

export const Dashboard = () => {
  const sum = (items: typeof gains) => {
    return items.reduce((total, item) => total + parseInt(item.amount, 10), 0);
  };

  return (
    <S.Wrapper>
      <ContentHeader title="Dashboard" underLineColor="#f7319b">
        <SelectInput options={months} />
        <SelectInput options={years.sort((a, b) => b.label - a.label)} />
      </ContentHeader>
      <div style={{ display: "flex" }}>
        <DashboardCard
          title="Saldo"
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          amount={sum(gains) - sum(expenses)}
          color="#4341f0"
        />
        <DashboardCard
          title="Entradas"
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="up"
          amount={sum(gains)}
          color="#f7931b"
        />
        <DashboardCard
          title="Saída"
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="down"
          amount={sum(expenses)}
          color="#e44c4e"
        />
      </div>
    </S.Wrapper>
  );
};
