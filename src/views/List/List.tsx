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
          tagColor="e44c4e"
          amount="R$120"
          title="Conta de luz"
          subtitle="02/08/23"
        />
      </Content>
    </Wrapper>
  );
};
