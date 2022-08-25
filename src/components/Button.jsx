 
export const Button = (props) => {
    return (
        <div className="button-wrapper" >
            <button className = "btn" onClick={props.handleEvent}>{props.name}</button>
        </div>
    )
}

export default Button;