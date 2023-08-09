import { Wrapper } from "./MessageCard.styles";
import Happy from "../../assets/happy.svg";
import Sad from "../../assets/sad.svg";
import Dollar from "../../assets/dollar.svg";

type Props = {
  className?: string;
  title: string;
  description: string;
  footerDescription: string;
  sum: number;
};
export const MessageCard = ({
  className,
  description,
  footerDescription,
  title,
  sum,
}: Props) => {
  const icon = () => {
    if (sum > 0) return Happy;
    if (sum < 0) return Sad;
    return Dollar;
  };
  return (
    <Wrapper className={className}>
      <header>
        <h1>
          {title}
          <img src={icon()} alt="Card" />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerDescription}</span>
      </footer>
    </Wrapper>
  );
};
