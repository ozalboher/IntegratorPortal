
import './Msg.css';


export const Msg = ({ msg, isError }) => {
    return (

        <div className="error-container">
        <div className="Msg" data-error={isError}>
            <span>{msg}</span>
        </div>
        </div>

    )
}