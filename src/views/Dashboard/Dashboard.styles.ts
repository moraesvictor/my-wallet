import styled from "styled-components";
import { MessageCard as _MessageCard } from "../../components/MessageCard";

export const MessageCard = styled(_MessageCard)``;

export const Wrapper = styled.div`
  ${MessageCard} {
    margin-top: 12px;
  }
`;
