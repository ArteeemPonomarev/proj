import './Slider.scss';
import { useContext } from 'react';
import Pointer from './Pointer/Pointer';
import { PositionPointerContext } from '../../../context/PositionPointerContext';
import HelpText from '../../UI/HelpText/HelpText';


const Slider = () => {

    const { positionPointer } = useContext(PositionPointerContext);

    let position;
    const arrHelpText = [
        'Выберите',
        'экспозицию',
    ]
    // это бы завернуть в функцию и переиспользовать, т.к такая же логика и в текстах гравюры
    if (positionPointer === '0%') {
        position = { justifyContent: 'flex-start' };
    } else if (positionPointer === '50%') {
        position = { justifyContent: 'center' };
    } else if (positionPointer === '100%') {
        position = { justifyContent: 'flex-end' };
    }

    // arrHelpText.map((item) => { <HelpText text={arrHelpText[item]} /> })

    return (
        <div className='slider' style={position}>
            <div className="slider__helpText">
                {positionPointer === '50%' && <HelpText text={arrHelpText[0]} />}
                {positionPointer === '50%' && <HelpText text={arrHelpText[1]} />}
            </div>
            <Pointer />
        </div>
    )
}

export default Slider;