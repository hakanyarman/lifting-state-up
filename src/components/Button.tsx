interface buttonProps {
    buttonText: string,
    count: number,
    handleClick: () => void,
    buttonStyle: {backgroundColor: string, display: string, margin: string }
}

export default function Button({ buttonText, count, handleClick, buttonStyle }: buttonProps) {
    return (
        <button onClick={handleClick} style={buttonStyle}>
            <span>{buttonText} <strong>{count}</strong> defa tıklandı</span>
        </button>
    )
}

