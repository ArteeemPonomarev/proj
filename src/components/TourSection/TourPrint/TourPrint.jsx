import './TourPrint.scss';
import printImg from '../../../assets/image/exposurePrint/interiorFullPrint.png';
import TargetBlock from './TargetBlock/TargetBlock';
import TargetList from './TargetList/TargetList';
import { useState } from 'react';
import { ListIndexContext } from '../../../context/ListIndexContext';

const TourPrint = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className='tourPrint'>
            <div className="tourPrint__conteiner">
                <ListIndexContext.Provider value={{
                    hoverIndex,
                    setHoverIndex,
                }}>
                    <TargetList />
                    <TargetBlock />
                </ListIndexContext.Provider>
                <img src={printImg} alt="tourPrint" className='tourPrint__img' />
            </div>

        </div>
    )
}

export default TourPrint;