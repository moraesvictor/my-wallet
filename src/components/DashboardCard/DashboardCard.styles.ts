import { styled } from "styled-components";

type CardProps = {
  color: string;
};
export const Wrapper = styled.div<CardProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  margin-right: 8px;
  height: 150px;
  color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;


  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: .3;
  }
`;
