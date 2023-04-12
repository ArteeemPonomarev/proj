import './Print.scss';
import startPrint from '../../../assets/image/startPrint.png';
import facadePrint from '../../../assets/image/facade0.75Print.png';
import interiorPrint from '../../../assets/image/interior0.75Print.png';
// import testPrint from '../../../assets/image/Готторпский глобус (1).png';
import BlockArchitecture from './BlockArchitecture/BlockArchitecture';
import BlockExposition from './BlockExposition/BlockExposition';
import { PositionPointerContext } from '../../../context/PositionPointerContext';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';


const Print = () => {

    const [targetArchitecture, setTargetArchitecture] = useState(false);
    const [targetExposition, setTargetExposition] = useState(false);

    const { setPositionPointer } = useContext(PositionPointerContext);

    let printImg = startPrint;

    if (targetExposition === true) {
        setPositionPointer('0%');
        printImg = interiorPrint;
    } else if (targetArchitecture === true) {
        setPositionPointer('100%');
        printImg = facadePrint;
    } else {
        setPositionPointer('50%')
    }

    return (
        <div className='print' >
            <BlockArchitecture setTarget={setTargetArchitecture} />
            <Link to='/map'>
                <BlockExposition setTarget={setTargetExposition} />
            </Link>
            <img src={printImg} alt="print" className='print__img' />
        </div>
    )
}

export default Print;