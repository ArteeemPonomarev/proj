import './ControlButton.scss';

const ControlButton = ({ name, img }) => {

    return (
        <button className='controlButton'>
            <img src={img} alt={name} />
        </button>
    )
}

export default ControlButton;