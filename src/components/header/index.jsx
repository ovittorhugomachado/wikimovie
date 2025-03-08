import {
    DivHeader,
    DivLogo,
    Logo,
    HamburgerContainer,
    HamburgerSpan,
    DivSearch,
    InputSearch,
    Nav,
    Ul,
    Li,
    Button,
} from "./style";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import genre from "../../../json/genre.json"

const Header = () => {

    const { id } = useParams()
    const [ menuActive, setMenuActive ] = useState(false);
    const [ searchValue, setSearchValue ] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        if (searchValue.trim()) {
            navigate(`/search?query=${searchValue}`);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
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
                <InputSearch
                    placeholder={"PESQUISAR"}
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                >
                </InputSearch>
                <IoMdSearch className="button-search" onClick={handleSearch} />
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