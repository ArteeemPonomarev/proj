import './HelpText.scss';

const HelpText = (props) => {

    return (
        <span className='helpText'>
            {props.text}
        </span>
    )
}

export default HelpText;