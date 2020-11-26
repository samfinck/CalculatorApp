const NumberButton = ({ digit, onClick, className }) => {

    const pressButton = () => {
        if (onClick) {
            onClick(digit)
        }
    }

    return (
        <button className={className} onClick={pressButton} title={`${digit}`}>
            {digit}
        </button>
    )

}

export default NumberButton
