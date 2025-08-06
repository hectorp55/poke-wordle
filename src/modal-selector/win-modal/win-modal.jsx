function WinModal({closeModal, resetGame}) {
    function playAgain() {
        resetGame();
        closeModal();
    }
    
    return (
        <>
            <button onClick={closeModal}>Close Button</button>
            <h2>Winner!</h2>
            <div>TODO: pokemon sprite</div>
            <button onClick={playAgain}>Play Again?</button>
        </>
    )
}

export default WinModal;