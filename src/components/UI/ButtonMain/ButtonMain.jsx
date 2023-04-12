import './ButtonMain.scss';

const ButtonMain = (props) => {

    let { text, hover = "", className = "", ...objButtonScrolling } = props.objButtonScrolling;

    return (
        <button className={`buttonMain buttonMain-${className}`} style={objButtonScrolling}>
            {text}
        </button>
    )
}

export default ButtonMain;
