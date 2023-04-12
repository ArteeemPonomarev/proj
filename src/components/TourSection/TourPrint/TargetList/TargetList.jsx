import React from 'react';
import './TargetList.scss';
import { useContext } from 'react';
import { ListIndexContext } from './../../../../context/ListIndexContext';
import TargetListItem from './TargetListItem/TargetListItem';

const TargetList = () => {

    const { setHoverIndex } = useContext(ListIndexContext);

    // const arrList = [
    //     ['Анатомический театр ', 'anatomicalTheater'],
    //     ['Библиотека, 1 этаж', 'library1rdFloor'],
    //     ['Библиотека, 2 этаж', 'library2rdFloor'],
    //     ['Библиотека, 3 этаж', 'library3rdFloor'],
    //     ['Мюнц-кабинет', 'münzkabinet'],
    //     ['Кабинет Петра I', 'cabinetOfPeter1'],
    //     ['Натуралии, 1 этаж', 'naturalia1ndFloor'],
    //     ['Натуралии, 2 этаж', 'naturalia2ndFloor'],
    //     ['Галерея', 'gallery'],
    //     ['Готторпский глобус', 'gottorpGlobe'],
    //     ['Артифициалии, 3 этаж', 'artifialia3rdFloor'],
    // ];

    const arrListLeft = [
        ['Кабинет Петра I', 'cabinetOfPeter1', 5],
        ['Мюнц-кабинет', 'münzkabinet', 4],
        ['Артифициалии, 3 этаж', 'artifialia3rdFloor', 10],
        ['Натуралии, 2 этаж', 'naturalia2ndFloor', 7],
        ['Натуралии, 1 этаж', 'naturalia1ndFloor', 6],
    ];

    const arrListRight = [
        ['Готторпский глобус', 'gottorpGlobe', 9],
        ['Галерея', 'gallery', 8],
        ['Анатомический театр ', 'anatomicalTheater', 0],
        ['Библиотека, 3 этаж', 'library3rdFloor', 3],
        ['Библиотека, 2 этаж', 'library2rdFloor', 2],
        ['Библиотека, 1 этаж', 'library1rdFloor', 1],
    ];

    return (
        <div className='targetList'>
            <div className="targetList__left">
                {arrListLeft.map(([item, className, id]) =>
                    <TargetListItem
                        key={id}
                        children={item}
                        className={className}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />)}
            </div>
            <div className="targetList__right">
                {arrListRight.map(([item, className, id]) =>
                    <TargetListItem
                        key={id}
                        children={item}
                        className={className}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />)}
            </div>
            {/* {arrList.map(([item, className], index) =>
                <TargetListItem
                    key={index}
                    children={item}
                    className={className}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                />)} */}
        </div>
    )
}

export default TargetList;