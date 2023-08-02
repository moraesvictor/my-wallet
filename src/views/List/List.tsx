import { Content, ContentHeader } from "../../components/Content";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { Wrapper } from "./List.styles";

export const List = () => {
  return (
    <Wrapper>
      <ContentHeader title="Saídas" underLineColor="#e44c4e" />
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#ff0000"
          title="Pagamento Mensal"
          subtitle="Salário"
          amount="R$ 1000,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#00ff00"
          title="Compras Recentes"
          subtitle="Supermercado"
          amount="R$ 500,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#ff6600"
          title="Receita Mensal"
          subtitle="Investimentos"
          amount="R$ 2000,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#0088cc"
          title="Gastos Essenciais"
          subtitle="Aluguel, Água, Luz"
          amount="R$ 800,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#cc0066"
          title="Despesas do Mês"
          subtitle="Diversos"
          amount="R$ 350,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#66cc33"
          title="Renda Extra"
          subtitle="Freelance"
          amount="R$ 600,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#9900cc"
          title="Investimentos"
          subtitle="Ações"
          amount="R$ 300,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#336699"
          title="Contas a Pagar"
          subtitle="Cartão de Crédito"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#cc9933"
          title="Economias"
          subtitle="Viagem"
          amount="R$ 1200,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#ff3366"
          title="Despesas Variáveis"
          subtitle="Lazer"
          amount="R$ 250,00"
        />
      </Content>
    </Wrapper>
  );
};
