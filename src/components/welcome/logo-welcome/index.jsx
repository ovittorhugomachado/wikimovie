import { ContainerLogo, ImagePopcorn, ContainerTitle, Title } from "./style";

const Logo = () => {
    return (
        <>
            <ContainerLogo>
                <ImagePopcorn src="../popcorn.png" />
                <ContainerTitle>
                    <Title>Wiki</Title>
                    <Title>Movie</Title>
                </ContainerTitle>
            </ContainerLogo>

        </>
    )
}

export { Logo }