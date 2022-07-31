import * as S from './SelectInput.styles';

// const mesesAno = [
// 'janeiro', 'fevereiro', 'março',
// 'abril', 'maio', 'junho',
// 'julho', 'agosto', 'setembro', 'outubro',
// 'novembro', 'dezembro']

interface ISelectInputProps {
    className?: string;
    options: {
        value: string | number
        label: string | number;
    }[]
}

export const SelectInput = ({ options, className }: ISelectInputProps) => {
    return (
        <S.Wrapper className={className}>
          <select>
            {options.map((option) => 
                <option value={option.value}>{option.label}</option>
            )}
          </select>
        </S.Wrapper>
       
    );
};