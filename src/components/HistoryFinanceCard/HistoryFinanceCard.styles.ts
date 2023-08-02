import styled from "styled-components";

type WrapperProps = {
  color: string;
};

export const Wrapper = styled.li<WrapperProps>`
  background-color: ${({ color }) => color && color};
  list-style: none;
  border-radius: 8px;
  margin: 10px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  :hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

type TagProps = {
  color: string;
};

export const Tag = styled.div<TagProps>`
  position: absolute;
  width: 10px;
  height: 60%;
  color: ${(props) => props.color};
`;
