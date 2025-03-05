import { useState } from "react";
import { Container, TitlePage, FilterContainer, Title, List, ListItem, TitleBold, Filter, FilterItemTitle, FilterItemSubtitle } from "./style";
import { IoIosArrowDown } from "react-icons/io";

const ListResults = () => {

    const [ visibleFilter, setVisibleFilter ] = useState(false)

    const OpenFilter = () => {
        setVisibleFilter(!visibleFilter)
    }

    return (
        <>
            <TitlePage>RESULTADO DA BUSCA: <TitleBold>JACK</TitleBold></TitlePage>
            <Container>
                <FilterContainer>
                    <Title onClick={OpenFilter}>FILTRAR <IoIosArrowDown className={`filter-arrow ${visibleFilter ? 'active' : ''}`} /></Title>
                    <Filter className={visibleFilter ? 'show' : ''}>
                        <FilterItemTitle>FILMES</FilterItemTitle>
                        <FilterItemSubtitle>1.860 resultados</FilterItemSubtitle>
                    </Filter>
                    <Filter className={visibleFilter ? 'show' : ''}>
                        <FilterItemTitle>PESSOAS</FilterItemTitle>
                        <FilterItemSubtitle>+ de 10.000 resultados</FilterItemSubtitle>
                    </Filter>
                </FilterContainer>
                <List>
                    <ListItem></ListItem>
                </List>
            </Container>
        </>
    )
}

export { ListResults }