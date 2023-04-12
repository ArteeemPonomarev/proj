import './TextPrintWrapper.scss';
import TitlePrint from '../PrintSection/Print/TitlePrint/TitlePrint';
import Subtitle from '../UI/Subtitle/Subtitle';
import { useContext } from 'react';
import { PositionPointerContext } from '../../context/PositionPointerContext';
import { createObjectTextPrint } from '../../utils/createObjectTextPrint';

const TextPrintWrapper = () => {

    const { positionPointer } = useContext(PositionPointerContext);

    let objText = createObjectTextPrint(positionPointer);

    return (
        <div className='textPrintWrapper' style={objText.positioinText}>
            <div className='textPrintWrapper__conteiner'>
                <TitlePrint title={objText.textTitle} />
                <Subtitle subtitle={objText.textSubtitle} />
            </div>
        </div>
    )
}

export default TextPrintWrapper;