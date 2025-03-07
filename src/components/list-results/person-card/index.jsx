import { List, ListItem, Cover, Info, Name, JobAndMovies, Job, Movies } from "./style";

const PersonCard = ({ image, name, job, topMovies }) => {

    return (
        <List>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
            <ListItem>
                <Cover src={image} />
                <Info>
                    <Name>{name}</Name>
                    <JobAndMovies>
                        <Job>{job}</Job>
                        <Movies>{topMovies}</Movies>
                    </JobAndMovies>
                </Info>
            </ListItem>
        </List>
    )
}

export { PersonCard }