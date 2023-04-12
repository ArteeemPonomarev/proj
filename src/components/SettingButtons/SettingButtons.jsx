import './SettingButtons.scss';
import { useState } from 'react';
import ControlButton from '../UI/ControlButton/ControlButton';
import imageInfo from '../../assets/image/info.svg';
import imageVolume from '../../assets/image/volume.svg';

const SettingButtons = () => {

    const [isModal, setIsModal] = useState(false);

    const arrControlButtons = [
        ['info', imageInfo,],
        ['volume', imageVolume,],
    ];

    return (
        <div className='settingButtons'>
            {arrControlButtons.map(([name, img]) =>
                <ControlButton
                    key={name}
                    name={name}
                    img={img}
                />)}
        </div>
    )
}

export default SettingButtons;