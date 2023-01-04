import "./whereToGoStyle.sass"

export default function WhereToGo() {
    return (
        <div id="WhereToGo">
            <div className="whereToGo__div">
                <h1 className="whereToGo__title">Para qual estado você deseja ir?</h1>
                <input className="whereToGo__input" type="text" placeholder="Pesquisar" />
                <button className="whereToGo__btn">Buscar</button>
            </div>
        </div>
    )
}