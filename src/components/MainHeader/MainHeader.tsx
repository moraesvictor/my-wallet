import { useMemo } from 'react';
import * as S from './MainHeader.styles';
import emojis from '../../utils/emojis';
import { Switch } from '../Switch';

export const MainHeader = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index];
    }, [])

    return (
        <S.Wrapper>
            <Switch />
            <S.Profile>
                <S.HelloContent>
                    <S.IntroducingMessage> Olá </S.IntroducingMessage>
                    {emoji}
                </S.HelloContent>
                <S.UserName> Victor Moraes </S.UserName>
            </S.Profile>
        </S.Wrapper>
    );
};