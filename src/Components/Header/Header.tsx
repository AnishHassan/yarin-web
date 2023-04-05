import React, { useState } from 'react';
import { HeaderActions, HeaderContainer, HeaderLingoContainer, HeaderLogo, MessageNotifyContainer, UserModuleContainer, UserModuleText, UserWelcomeContainer } from './Header.style';
import logo from '../../assests/images/ARAZIM.jpg'
import LanguageSelectorComponent from '../LanguageSelector';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

const Header = () => {

    const [userName,] = useState('Yarin')

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt='ARAZIM-logo' />

            <HeaderActions>
                <HeaderLingoContainer>
                    <LanguageSelectorComponent />
                </HeaderLingoContainer>
                <MessageNotifyContainer >
                    <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2.7rem', color: '#fff' }}>
                        <Badge severity="danger"></Badge>
                    </i>
                </MessageNotifyContainer>
                <UserWelcomeContainer>
                    <UserModuleText>
                        Welcome {userName} !
                    </UserModuleText>
                </UserWelcomeContainer>
                <UserModuleContainer>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="large" shape="circle" />
                </UserModuleContainer>
            </HeaderActions>
        </HeaderContainer>
    )
}


export default Header
