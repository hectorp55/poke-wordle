import './action-button.css'

function ActionButton({ action }) {
    return (
        <span class="action-button input-button">
            {action}
        </span>
    )
}

export default ActionButton;