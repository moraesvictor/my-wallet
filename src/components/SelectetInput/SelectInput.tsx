import * as S from "./SelectInput.styles";

// const mesesAno = [
// 'janeiro', 'fevereiro', 'março',
// 'abril', 'maio', 'junho',
// 'julho', 'agosto', 'setembro', 'outubro',
// 'novembro', 'dezembro']

interface ISelectInputProps {
  className?: string;
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const SelectInput = ({
  options,
  className,
  onChange,
}: ISelectInputProps) => {
  return (
    <S.Wrapper className={className}>
      <select onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </S.Wrapper>
  );
};
