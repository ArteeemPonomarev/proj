import './TargetBlock.scss';
import { useContext } from 'react';
import { ListIndexContext } from '../../../../context/ListIndexContext';
import TargetBlockItem from './TargetBlockItem/TargetBlockItem';

const TargetBlock = () => {

    const { setHoverIndex } = useContext(ListIndexContext);

    const arrNamesBlock1 = [
        ['block__cabinetOfPeter1', 5],
        ['block__münzkabinet', 4],
    ];
    const arrNamesBlock2 = [
        ['block__artifialia3rdFloor', 10],
        ['block__naturalia2ndFloor', 7],
        ['block__naturalia1ndFloor', 6],
    ];
    const arrNamesBlock3 = [
        ['block__gottorpGlobe', 9],
        ['block__gallery', 8],
        ['block__anatomicalTheater', 0],
    ];
    const arrNamesBlock4 = [
        ['block__library3rdFloor', 3],
        ['block__library2rdFloor', 2],
        ['block__library1rdFloor', 1],
    ];

    return (
        <div className='targetBlock block'>
            <div className="block1 block-section">
                {arrNamesBlock1.map(([item, id]) =>
                    <TargetBlockItem
                        key={id}
                        className={item}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />
                )}
            </div>
            <div className="block2 block-section">
                {arrNamesBlock2.map(([item, id]) =>
                    <TargetBlockItem
                        key={id}
                        className={item}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />
                )}
            </div>
            <div className="block3 block-section">
                {arrNamesBlock3.map(([item, id]) =>
                    <TargetBlockItem
                        key={id}
                        className={item}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />
                )}
            </div>
            <div className="block4 block-section">
                {arrNamesBlock4.map(([item, id]) =>
                    <TargetBlockItem
                        key={id}
                        className={item}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />
                )}
            </div>
        </div>
    )
}

export default TargetBlock;