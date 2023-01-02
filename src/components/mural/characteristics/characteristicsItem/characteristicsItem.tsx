import "./characteristicsItemStyle.sass"

interface Props {
    image: string,
    paragraph: string,
    primary: boolean
}

export default function CharacteristicsItem({ image, paragraph, primary }: Props) {
    return (
        <div id="itemCharacteristics" style={{
            backgroundColor: primary ? "#005BD5" : "#EEEEEE",
        }}>
            <img src={image} alt="" />
            <p style={{
                color: primary ? "#FFFFFF" : "#005BD5",
            }}>{paragraph}</p>
        </div>
    )
}