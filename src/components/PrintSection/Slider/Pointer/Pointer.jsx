import './Pointer.scss';
import pointer from '../../../../assets/image/controlElementPrint.svg'

const Pointer = (props) => {

    // let positionPointer = props.positionPointer;
    let stylePosition;
    if (props.positionPointer === '50%') {
        stylePosition = 'justifyContent: center';
    } else if (props.positionPointer === '0%') {
        stylePosition = 'justifyContent: flex-start'
    }

    return (
        <div className='pointer'>
            <img src={pointer} alt="pointer" className='pointer__controlElementPrint' />
        </div>
    )
}

export default Pointer;