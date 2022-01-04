import * as S from './Content.styles'

export const Content: React.FC = ({ children }) => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}