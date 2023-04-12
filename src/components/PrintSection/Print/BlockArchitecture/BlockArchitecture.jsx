import './BlockArchitecture.scss';
import { useContext } from 'react';
import TextPrintWrapper from '../../../TextPrintWrapper/TextPrintWrapper';
import { PositionPointerContext } from '../../../../context/PositionPointerContext';

const BlockArchitecture = (props) => {

    const { positionPointer } = useContext(PositionPointerContext);

    const handleMouseEnter = () => {
        props.setTarget(true);
    };

    const handleMouseLeave = () => {
        props.setTarget(false);
    };

    return (
        <div className='blockArchitecture'
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            {positionPointer === '100%' ? <TextPrintWrapper /> : ''}
        </div>
    )
}

export default BlockArchitecture;