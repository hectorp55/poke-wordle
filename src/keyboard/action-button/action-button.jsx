import './action-button.css'

function ActionButton({ actionName, actionMethod }) {
    function onClick() {
        actionMethod();
    }

    return (
        <span className="action-button input-button" onClick={onClick}>
            {actionName}
        </span>
    )
}

export default ActionButton;