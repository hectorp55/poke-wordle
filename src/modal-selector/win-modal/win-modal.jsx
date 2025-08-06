import './win-modal.css';
import { getPokemonSprite } from "../../hooks/fetchPokemonSprite";
import { IoRefresh } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";


function WinModal({closeModal, resetGame, pokemonName}) {
    const { data, isLoading, isError, error } = getPokemonSprite(pokemonName);
    
    if (isLoading) return <div><img className="loading-image" src="/poke-loading.gif"></img></div>

    function playAgain() {
        resetGame();
        closeModal();
    }
    
    return (
        <main className="win-content">
            <h2>Winner!</h2>
            <div>{!isLoading && <img src={data.front_default}></img>}</div>
            <div className="options">
                <IoRefresh onClick={playAgain} className="icon"/>
                <IoIosCloseCircleOutline onClick={closeModal} className="icon"/>
            </div>
        </main>
    )
}

export default WinModal;