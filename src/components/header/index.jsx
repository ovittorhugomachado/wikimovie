import {
    DivHeader,
    Logo,
    Nav,
    Ul,
    Li,
    Button,
    HamburgerContainer,
    HamburgerSpan,
    DivLogo,
    InputSearch,
    DivSearch,
} from "./style";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import genre from "../../../json/genre.json"
import { IoMdSearch } from "react-icons/io";

const Header = () => {
    
    const { id } = useParams()
    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

    return (
        <DivHeader className={`${menuActive ? '' : 'headerSmall'}`}>
            <DivLogo>
                <Link to={'/'}>
                    <Logo src="/logo.png" alt="logo" />
                </Link>
                <HamburgerContainer onClick={handleClick}>
                    <HamburgerSpan className={`${menuActive ? 'active' : ''}`} />
                </HamburgerContainer>
            </DivLogo>
            <DivSearch>
                <InputSearch placeholder={"PESQUISAR"}></InputSearch>
                <IoMdSearch className="button-search" />
            </DivSearch>
            <Nav className={`${menuActive ? 'menuActive' : ''}`}>
                <Ul>
                    {genre.map((genre, index) => (
                        <Li key={index}>
                            <Link to={`/${genre.slug}/${genre.id}`} style={{ textDecoration: 'none' }}>
                                <Button className={genre.id == id ? 'active' : ''}>
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