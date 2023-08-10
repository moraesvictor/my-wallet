import { Wrapper } from "./DashboardCard.styles";
import dollarImg from "../../assets/dollar.svg";
import arrowDownImg from "../../assets/arrow-down.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import { useEffect, useState } from "react";

type Props = {
  color: string;
  icon: "dolar" | "up" | "down";
  amount: number;
  title: string;
  footerLabel: string;
};
export const DashboardCard = ({
  color,
  icon,
  amount,
  title,
  footerLabel,
}: Props) => {
  const iconSelected = () => {
    if (icon === "dolar") return dollarImg;
    if (icon === "down") return arrowDownImg;
    if (icon === "up") return arrowUpImg;
  };

  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < amount) {
        setCurrentNumber((prevNumber) => prevNumber + 100);
      } else {
        clearInterval(interval);
      }
    }, 1); // Intervalo de 1 milissegundo para uma animação rápida

    return () => clearInterval(interval);
  }, [amount, currentNumber]);

  return (
    <Wrapper color={color}>
      <span>{title}</span>
      <h1>R$ {currentNumber}</h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Wrapper>
  );
};
