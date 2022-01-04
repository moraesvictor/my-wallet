import * as S from './Layout.styles';
import { MainHeader } from '../MainHeader';
import { Aside } from '../Aside';
import { Content } from '../Content';
import { Children } from 'react';

export const Layout: React.FC = ({ children }) => {
   return(
        <S.Grid>
            <MainHeader />
            <Aside />
            <Content>
                { children }
            </Content>
        </S.Grid>
    );
};