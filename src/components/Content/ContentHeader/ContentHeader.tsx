import * as S from "./ContentHeader.styles";

import { SelectInput } from "../../SelectetInput";
import React from "react";

const months = [
  { value: 1, label: "janeiro" },
  { value: 2, label: "favereiro" },
  { value: 3, label: "março" },
  { value: 4, label: "abril" },
  { value: 5, label: "maio" },
  { value: 6, label: "junho" },
  { value: 7, label: "julho" },
  { value: 8, label: "agosto" },
  { value: 9, label: "Setembro" },
  { value: 10, label: "Outubro" },
  { value: 11, label: "Novembro" },
  { value: 12, label: "Dezembro" },
];

const years = [
  { value: 1994, label: 1994 },
  { value: 1995, label: 1995 },
  { value: 1996, label: 1996 },
  { value: 1997, label: 1997 },
  { value: 1998, label: 1998 },
  { value: 1999, label: 1999 },
  { value: 2000, label: 2000 },
  { value: 2001, label: 2001 },
  { value: 2002, label: 2002 },
  { value: 2003, label: 2003 },
  { value: 2004, label: 2004 },
  { value: 2005, label: 2005 },
  { value: 2006, label: 2006 },
  { value: 2007, label: 2007 },
  { value: 2008, label: 2008 },
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  { value: 2014, label: 2014 },
  { value: 2015, label: 2015 },
  { value: 2016, label: 2016 },
  { value: 2017, label: 2017 },
  { value: 2018, label: 2018 },
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
  { value: 2023, label: 2023 },
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
        <S.SelectInput options={months} />
        <S.SelectInput options={years.sort((a, b) => b.label - a.label)} />
      </S.Controllers>
    </S.Wrapper>
  );
};
