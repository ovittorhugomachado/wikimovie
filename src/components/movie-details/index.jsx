import { Header } from "../header"
import { Footer } from "../footer"
import { ContainerActors, ContainerRow, ContainerMovie, Main, MovieCategory, MovieCover, MovieReview, MovieTime, PageTitle, PhotoActor, Title, Text, ContainerColumn, TitleInfoMovie, Actor, NameActor, Director, ContainerSinopse } from "./style"

const ContainerDetails = () => {

    return (
        <>
            <Header />
            <Main>
                <PageTitle>Acompanhante Perfeita</PageTitle>
                <ContainerMovie>
                    <MovieCover src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bjp5zXaIG5tOCtyzUzuf4lsdZub.jpg" />
                    <MovieTime>1h 42min</MovieTime>
                    <MovieCategory>Terror, Thriller</MovieCategory>
                    <MovieReview>Avaliação 79%</MovieReview>
                </ContainerMovie>
                <ContainerColumn>
                    <TitleInfoMovie>Acompanhante Perfeita</TitleInfoMovie>
                    <ContainerSinopse>
                        <Title>Sinopse</Title>
                        <Text className="sinopse">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, debitis cumque vitae eaque et assumenda molestias inventore id quasi maiores. Molestiae corrupti quo veniam inventore eaque consequuntur dolorum debitis quasi!</Text>
                    </ContainerSinopse>
                    <ContainerRow>
                        <Director>
                            <Title>Diretor</Title>
                            <Text>Drew Hankock</Text>
                        </Director>
                        <Director>
                            <Title>Roteiro</Title>
                            <Text>Drew Hankock</Text>
                        </Director>
                    </ContainerRow>
                    <Title>Elenco</Title>
                    <ContainerActors>
                        <Actor>
                            <PhotoActor src="https://media.themoviedb.org/t/p/w276_and_h350_face/rUEPZaDxFdDGM76t4g6cYa8Ru7b.jpg" />
                            <NameActor>Sophie Tatcher</NameActor>
                            <Text>Lis</Text>
                        </Actor>
                        <Actor>
                            <PhotoActor src="https://media.themoviedb.org/t/p/w276_and_h350_face/320qW5yEbxpmyxQ3evmClJbtKag.jpg" />
                            <NameActor>Jack Quaid</NameActor>
                            <Text>Josh</Text>
                        </Actor>
                        <Actor>
                            <PhotoActor src="https://media.themoviedb.org/t/p/w276_and_h350_face/sftjB0MjD92meZqnL9OLtcTI02d.jpg" />
                            <NameActor>Lukas Cage</NameActor>
                            <Text>Patrick</Text>
                        </Actor>
                        <Actor>
                            <PhotoActor src="https://media.themoviedb.org/t/p/w276_and_h350_face/krZBtMPTqVvteqYFXbAU6nnQShy.jpg" />
                            <NameActor>Megan Suri</NameActor>
                            <Text>Kat</Text>
                        </Actor>
                    </ContainerActors>
                </ContainerColumn>
            </Main>
            <Footer />
        </>
    )
}

export { ContainerDetails }