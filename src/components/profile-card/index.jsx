import { ContainerProfile, PageTitle, Image, Birthday, City } from "./style";

const ProfileCard = ({ name, image, birthday, city }) => {
    return (
        <ContainerProfile>
            <PageTitle>{name}</PageTitle>
            <Image
                className="profile-card"
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={name}
                onError={(e) => e.target.src = "/default-actor.png"}
            />
            <Birthday>{birthday}</Birthday>
            <City>{city}</City>
        </ContainerProfile>
    )
}

export { ProfileCard }