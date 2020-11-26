const NumberButton = ({ digit, onClick, className }) => {

    const pressButton = () => {
        if (onClick) {
            onClick(digit)
        }
    }

    return (
        <button className={className} onClick={pressButton}>
            {digit}
        </button>
    )

}

export default NumberButton
