import { DivHeader, Logo, Nav, Ul, Li, Button, HamburgerContainer, HamburgerSpan } from "./style";
import { useState } from "react";


const Header = () => {

    const [menuActive, setMenuAcive] = useState(false);

    const handleClick = () => {
        setMenuAcive(!menuActive)
    };



    return (
        <DivHeader className={`${menuActive ? '' : 'headerSmall'}`}>
            <Logo src="../logo.png" alt="logo" />
            <HamburgerContainer onClick={handleClick}>
                <HamburgerSpan  className={`${menuActive ? 'active' : ''}`}/>
            </HamburgerContainer>
            <Nav className={`${menuActive ? 'menuActive' : ''}`}>
                <Ul>
                    <Li>
                        <Button>AÇÃO</Button>
                    </Li>
                    <Li>
                        <Button>AVENTURA</Button>
                    </Li>
                    <Li>
                        <Button>ANIMAÇÃO</Button>
                    </Li>
                    <Li>
                        <Button>COMÉDIA</Button>
                    </Li>
                    <Li>
                        <Button>FAMÍLIA</Button>
                    </Li>
                    <Li>
                        <Button>DRAMA</Button>
                    </Li>
                    <Li>
                        <Button className="active">FICÇÃO CIENTÍFICA</Button>
                    </Li>
                    <Li>
                        <Button>CRIME</Button>
                    </Li>
                    <Li>
                        <Button>GUERRA</Button>
                    </Li>
                    <Li>
                        <Button>MISTÉRIO</Button>
                    </Li>
                    <Li>
                        <Button>TERROR</Button>
                    </Li>
                    <Li>
                        <Button>THRILLER</Button>
                    </Li>
                </Ul>
            </Nav>
        </DivHeader>
    )
}

export { Header }