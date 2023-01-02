import "./whereToGoStyle.sass"

export default function WhereToGo() {
    return (
        <div id="WhereToGo">
            <div>
                <h1>Para qual estado você deseja ir?</h1>
                <input type="text" placeholder="Pesquisar" />
                <button>Buscar</button>
            </div>
        </div>
    )
}