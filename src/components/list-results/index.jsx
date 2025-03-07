import { useState } from "react";
import { Container, TitlePage, FilterContainer, Title, List, ListItem, TitleBold, Filter, FilterItemTitle, FilterItemSubtitle, Cover, ItemName, JobAndMovies, Job, Movies, Info } from "./style";
import { PersonCard } from "./person-card";
import { IoIosArrowDown } from "react-icons/io";

const ListResults = () => {

    const [visibleFilter, setVisibleFilter] = useState(false)

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
                <PersonCard 
                    image={'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6h12pZsgj3WWjMtykUgfLkLEBWz.jpg'}
                    name={'Jack Nicholson'}
                    job={'Actor'}
                    topMovies={'O Iluminado, Um Estranho no Ninho, Marte Ataca'}
                />


            </Container>
        </>
    )
}

export { ListResults }