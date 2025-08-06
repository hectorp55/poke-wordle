import { getPokemonSprite } from "../../hooks/fetchPokemonSprite";
import './../modal-selector.css';
import './help-modal.css';

function HelpModal({pokemonName}) {
    const { data, isLoading, isError, error } = getPokemonSprite(pokemonName);

    if (isLoading) return <div><img className="loading-image" src="/poke-loading.gif"></img></div>

    return (
        <div class="help-modal-content">
            <h2 className="modal-title">Hint</h2>
            <main>
                Do you recognize this pokemon?
            </main>
            {!isLoading && <img src={data.front_default}></img>}
        </div>
    )
}

export default HelpModal;