import { Container, Title, FilterContainer, FilterTitle, List, ListItem, TitleBold } from "./style";

const ListResults = () => {

    return (
        <Container>
            <Title>RESULTADO DA BUSCA: <TitleBold>JACK</TitleBold></Title>
            <FilterContainer>
                <FilterTitle>FILTRAR</FilterTitle>

            </FilterContainer>
            <List>
                <ListItem></ListItem>
            </List>
        </Container>
    )
}

export { ListResults }