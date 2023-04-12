import './BlockExposition.scss';
import { useContext } from 'react';
import TextPrintWrapper from '../../../TextPrintWrapper/TextPrintWrapper';
import { PositionPointerContext } from '../../../../context/PositionPointerContext';


const BlockExposition = (props) => {

    const { positionPointer } = useContext(PositionPointerContext);

    const handleMouseEnter = () => {
        props.setTarget(true);
    };

    const handleMouseLeave = () => {
        props.setTarget(false);
    };

    return (
        <div className='blockExposition'
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            {positionPointer === '0%' ? <TextPrintWrapper /> : ''}
        </div>
    )
}

export default BlockExposition;