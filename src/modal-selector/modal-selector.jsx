import WinModal from "./win-modal/win-modal.jsx";
import SettingsModal from "./settings-modal/settings-modal.jsx";
import HelpModal from "./help-modal/help-modal.jsx";

function ModalSelector({selector, closeModal, resetGame}) {
    
    switch(selector) {
        case "WinModal":
            return <WinModal closeModal={closeModal} resetGame={resetGame}></WinModal>
        case "SettingsModal":
            return <SettingsModal closeModal={closeModal}></SettingsModal>
        case "HelpModal":
            return <HelpModal closeModal={closeModal}></HelpModal>
        default: 
            return <div>Modal</div>
    }
}

export default ModalSelector;