import { ContainerIconsLeft, Pause, Stop, Rec, YellowPlay, CoralPlay, GreenPlay, ContainerIconsRight } from "./style";

const MediaIcons = () => {
    return (
        <>
            <ContainerIconsLeft>
            <Pause src="../pause.png"/>
            <Stop src="../stop.png" />
            <Rec src="../rec.png" />
            <YellowPlay src="../yellow-play.png" />
            <CoralPlay src="../coral-play.png" />
            <GreenPlay src="../green-play.png" />
        </ContainerIconsLeft>

        <ContainerIconsRight>
            <Pause src="../pause.png"/>
            <Stop src="../stop.png" />
            <Rec src="../rec.png" />
            <YellowPlay src="../yellow-play.png" />
            <CoralPlay src="../coral-play.png" />
            <GreenPlay src="../green-play.png" />
        </ContainerIconsRight>
        </>
        
    )
}

export { MediaIcons}