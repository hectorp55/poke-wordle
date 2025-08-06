import './action-button.css';
import { FaDeleteLeft } from "react-icons/fa6";
import { AiOutlineEnter } from "react-icons/ai";

function ActionButton({ actionName, actionMethod }) {
    function onClick() {
        actionMethod();
    }

    return (
        <span className="action-button input-button" onClick={onClick}>
            {actionName === "Enter" && <AiOutlineEnter/>}
            {actionName === "Delete" && <FaDeleteLeft/>}
        </span>
    )
}

export default ActionButton;