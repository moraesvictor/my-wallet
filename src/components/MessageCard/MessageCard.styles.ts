import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 38%;
  background-color: ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  height: 150px;

  > header img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
  }
`;
