/* eslint-disable react/prop-types */

const ButtonJCH = ({ text, onClick, isCorrect, showResult, selected }) => {

    const buttonStyle = {
        /* backgroundColor: isCorrect && showResult ? 'green' : 'red', */
        backgroundColor: selected && showResult && !isCorrect ? 'red' : selected && showResult && isCorrect ? 'green' : selected && !showResult ? 'blue' : 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: '8px 16px',
        margin: '4px',
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            disabled={showResult}
        >
            {text}
        </button>
    )
}

export default ButtonJCH