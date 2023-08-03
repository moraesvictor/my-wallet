import { useMemo, useState } from "react";
import { Content, ContentHeader } from "../../components/Content";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { Wrapper } from "./List.styles";
import { useParams } from "react-router-dom";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import { SelectInput } from "../../components/Content/ContentHeader/ContentHeader.styles";
import {
  months,
  years,
} from "../../components/Content/ContentHeader/ContentHeader";

export const List = () => {
  const { type } = useParams();
  const [expensesState, setExpensesState] = useState(expenses);
  const [gainsState, setGainsState] = useState(gains);
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    (new Date().getMonth() + 1).toString()
  );
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const properties = useMemo(() => {
    if (type === "entries")
      return {
        title: "Entradas",
        underlineColor: "#00C853",
      };
    if (type === "expenses")
      return {
        title: "Saídas",
        underlineColor: "#e44c4e",
      };
  }, [type]);

  console.log(selectedMonth);

  return (
    <Wrapper>
      <ContentHeader
        title={properties?.title || ""}
        underLineColor={properties?.underlineColor}
      >
        <SelectInput
          options={months}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedMonthValue = e.target.value;
            setSelectedMonth(selectedMonthValue);
            if (type === "entries") {
              setGainsState(
                expenses.filter((item) => {
                  const itemYear = new Date(item.date).getFullYear();
                  return itemYear === Number(selectedYear);
                })
              );
              setGainsState((prev) =>
                prev.filter((item) => {
                  const itemMonth = new Date(item.date).getMonth() + 1;
                  return itemMonth === Number(selectedMonthValue);
                })
              );
            }
            if (type === "expenses") {
              setExpensesState(
                expenses.filter((item) => {
                  const itemYear = new Date(item.date).getFullYear();
                  return itemYear === Number(selectedYear);
                })
              );
              setExpensesState((prev) =>
                prev.filter((item) => {
                  const itemMonth = new Date(item.date).getMonth() + 1;
                  return itemMonth === Number(selectedMonthValue);
                })
              );
            }
          }}
        />
        <SelectInput
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedYearValue = e.target.value;
            setSelectedYear(selectedYearValue);

            if (type === "expenses") {
              setExpensesState(
                expenses.filter((item) => {
                  const itemYear = new Date(item.date).getFullYear();
                  return itemYear === Number(e.target.value);
                })
              );
            }

            if (type === "entries") {
              setGainsState(
                gains.filter((item) => {
                  const itemYear = new Date(item.date).getFullYear();
                  return itemYear === Number(e.target.value);
                })
              );
            }
          }}
          options={years.sort((a, b) => b.label - a.label)}
        />
      </ContentHeader>
      <Content>
        {type === "expenses" &&
          expensesState.map((expense) => (
            <HistoryFinanceCard
              cardColor="#313862"
              tagColor="#ff0000"
              title={expense.description}
              subtitle={expense.date}
              amount={`R$ ${expense.amount}`}
            />
          ))}
        {type === "entries" &&
          gainsState.map((gain) => (
            <HistoryFinanceCard
              cardColor="#313862"
              tagColor="#ff0000"
              title={gain.description}
              subtitle={gain.date}
              amount={`R$ ${gain.amount}`}
            />
          ))}
      </Content>
    </Wrapper>
  );
};
