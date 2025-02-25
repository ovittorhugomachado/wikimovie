import { DivHeader, Logo, Nav, Ul, Li, Button, HamburgerContainer, HamburgerSpan, DivLogo } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

import list from '../../../json/movies.json';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

    const OpenListPerGenre = (genre) => {
        setCurrentGenre(genre)
    };

    const listGenre = list.generos

    const genres = [
        "AÇÃO", "AVENTURA", "ANIMAÇÃO", "COMÉDIA", "FAMÍLIA", "DRAMA",
        "FICÇÃO CIENTÍFICA", "CRIME", "GUERRA", "MISTÉRIO", "TERROR", "THRILLER"
    ];

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
                    {genres.map((genre, index) => (
                        <Li key={index}>
                            <Link to={`/${listGenre[index].slug}`} style={{ textDecoration: 'none' }}>
                                <Button onClick={() => OpenListPerGenre(genre)}>
                                    {genre}
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