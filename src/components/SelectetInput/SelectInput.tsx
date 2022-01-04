import * as S from './SelectInput.styles';

// const mesesAno = [
// 'janeiro', 'fevereiro', 'março',
// 'abril', 'maio', 'junho',
// 'julho', 'agosto', 'setembro', 'outubro',
// 'novembro', 'dezembro']

interface ISelectInputProps {
    options: {
        value: string | number
        label: string | number;
    }[]
}

export const SelectInput = ({ options }: ISelectInputProps) => {
    return (
        <S.Wrapper>
          <select>
            {options.map((option) => 
                <option value={option.value}>{option.label}</option>
            )}
          </select>
        </S.Wrapper>
       
    );
};