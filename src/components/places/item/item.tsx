import "./itemStyle.sass"

interface Props {
    place: string;
    image: string;
    color: string;
}
export default function Item({ place, image, color }: Props) {
    return (
        <div id="item" style={{
            backgroundImage: `url(${image})`,
        }}>
            <div className="item__div" style={{
                backgroundColor: color
            }}>
                <h2 className="item__name">{place}</h2>
            </div>
        </div>
    );
}