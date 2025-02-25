import { DivHeader, Logo, Nav, Ul, Li, Button, HamburgerContainer, HamburgerSpan, DivLogo } from "./style";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GenreContext } from "../../context/genre-context";



const Header = () => {

    const { setCurrentGenre } = useContext(GenreContext)
    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

    const OpenListPerGenre = (genre) => {
        setCurrentGenre(genre)
    };

    const genres = [
        "AÇÃO", "AVENTURA", "ANIMAÇÃO", "COMÉDIA", "FAMÍLIA", "DRAMA",
        "FICÇÃO CIENTÍFICA", "CRIME", "GUERRA", "MISTÉRIO", "TERROR", "THRILLER"
    ];

    //para a url ficar sem espaço e acentos
    const slugify = (text) => 
        text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") 
            .toLowerCase() 
            .replace(/\s+/g, "-"); 

    return (
        <DivHeader className={`${menuActive ? '' : 'headerSmall'}`}>
            <DivLogo>
                <Logo src="../logo.png" alt="logo" />
                <HamburgerContainer onClick={handleClick}>
                    <HamburgerSpan className={`${menuActive ? 'active' : ''}`} />
                </HamburgerContainer>
            </DivLogo>

            <Nav className={`${menuActive ? 'menuActive' : ''}`}>
                <Ul>
                    {genres.map((genre, index) => (
                        <Li key={index}>
                            <Link to={`/${slugify(genre)}`} style={{ textDecoration: 'none' }}>
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