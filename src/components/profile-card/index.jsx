import { ContainerProfile } from "./style";

const ProfileCard = ({ name, image, info1, info2 }) => {
    return (
        <ContainerProfile>
            <h1 className="profile-card">{name}</h1>
            <img
                className="profile-card"
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={name}
                onError={(e) => e.target.src = "/default-actor.png"}
            />
            <h5>{info1}</h5>
            <h5 className="subtitle">{info2}</h5>
        </ContainerProfile>
    )
}

export { ProfileCard }