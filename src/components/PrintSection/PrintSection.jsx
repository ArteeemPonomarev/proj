import './PrintSection.scss';
import Print from './Print/Print';
import Slider from './Slider/Slider';
import SettingButtons from '../SettingButtons/SettingButtons.jsx';
import { PositionPointerContext } from '../../context/PositionPointerContext';
import { useState } from 'react';

const PrintSection = () => {

    const [positionPointer, setPositionPointer] = useState('50%');

    return (
        <div className='printSection'>
            <div className="printSection__conteiner">
                <PositionPointerContext.Provider value={{
                    positionPointer,
                    setPositionPointer,
                }}>
                    <Print />
                    <Slider />
                </PositionPointerContext.Provider>
                <SettingButtons />
            </div>
        </div>
    )
}

export default PrintSection;