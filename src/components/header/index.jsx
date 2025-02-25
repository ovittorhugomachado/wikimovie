import { DivHeader, Logo, Nav, Ul, Li, Button, HamburgerContainer, HamburgerSpan, DivLogo } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import genre from "../../../json/genre.json"

import list from '../../../json/movies.json';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

    console.log(genre[0].slug)



    return (
        <DivHeader className={`${menuActive ? '' : 'headerSmall'}`}>
            <DivLogo>
                <Link to={'/'}>
                    <Logo src="../logo.png" alt="logo" />
                </Link>

                <HamburgerContainer onClick={handleClick}>
                    <HamburgerSpan className={`${menuActive ? 'active' : ''}`} />
                </HamburgerContainer>
            </DivLogo>

            <Nav className={`${menuActive ? 'menuActive' : ''}`}>
                <Ul>
                    {genre.map((genre, index) => (
                        <Li key={index}>
                            <Link to={`/${genre.slug}/${genre.id}`} style={{ textDecoration: 'none' }}>
                                <Button>
                                    {genre.name}
                                </Button>
                            </Link>
                        </Li>
                    ))}
                </Ul>
            </Nav>
        </DivHeader>
    );
};

export { Header };