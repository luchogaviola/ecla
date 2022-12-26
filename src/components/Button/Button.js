import './Button.css';

const Button = ({ handleClick }) => {
    // const { handleClick, label } = props

    return (
        <div>
            <button 
                className="boton-menu boton-categoria"
                onClick={handleClick}
            ></button>
        </div>
        
    )
}

export default Button;