import { ContainerProfile, Cover, Info1, Info2, Info3, Name } from "./style";

const ProfileCard = ({ name, image, info1, info2, info3 }) => {
    return (
        <ContainerProfile>
            <Name>{name}</Name>
            <Cover
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={name}
                onError={(e) => e.target.src = "/default-actor.png"}
            />
            <Info1>{info1}</Info1>
            <Info2>{info2}</Info2>
            <Info3>{info3}</Info3>
        </ContainerProfile>
    )
}

export { ProfileCard }