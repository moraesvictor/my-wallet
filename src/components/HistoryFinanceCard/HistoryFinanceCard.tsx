import { Tag, Wrapper } from "./HistoryFinanceCard.styles";

type Props = {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
};
export const HistoryFinanceCard = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}: Props) => {
  return (
    <Wrapper color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Wrapper>
  );
};
