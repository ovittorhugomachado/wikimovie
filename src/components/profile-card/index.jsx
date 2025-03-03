import { ContainerProfile, PageTitle, Image, Info1, Info2, Info3 } from "./style";

const ProfileCard = ({ name, image, info1, info2, info3 }) => {
    return (
        <ContainerProfile>
            <PageTitle>{name}</PageTitle>
            <Image
                className="profile-card"
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={name}
                onError={(e) => e.target.src = "/default-actor.png"}
            />
            <Info1>{info1}</Info1>
            <Info2>{info2}</Info2>
            {info3 && <Info3>{info3}</Info3>}
        </ContainerProfile>
    )
}

export { ProfileCard }