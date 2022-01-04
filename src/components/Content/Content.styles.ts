import styled, { css } from "styled-components";

const getBackgroundColor = () => css`${({ theme })=> theme.color.primary}`;
const getFontColor = () => css`${({ theme }) => theme.color.white}`;

export const Wrapper = styled.div`
grid-area: CT;
color: ${getFontColor};
background-color: ${getBackgroundColor};
padding: 16px;
`;