import * as S from "./ContentHeader.styles";

import { SelectInput } from "../../SelectetInput";
import React from "react";

const mesesAno = [
  { value: "janeiro", label: "janeiro" },
  { value: "fevereiro", label: "favereiro" },
  { value: "março", label: "março" },
  { value: "abril", label: "abril" },
  { value: "maio", label: "maio" },
  { value: "junho", label: "junho" },
  { value: "julho", label: "julho" },
  { value: "agosto", label: "agosto" },
  { value: "Setembro", label: "Setembro" },
  { value: "Outubro", label: "Outubro" },
  { value: "Novembro", label: "Novembro" },
  { value: "Dezembro", label: "Dezembro" },
];

type Props = {
  title: string;
  underLineColor?: string;
};

export const ContentHeader = ({ title, underLineColor }: Props) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper underLineColor={underLineColor}>
        <h1>{title}</h1>
      </S.TitleWrapper>
      <S.Controllers>
        <S.SelectInput options={mesesAno} />
        <S.SelectInput options={mesesAno} />
      </S.Controllers>
    </S.Wrapper>
  );
};
