import { useEffect, useState } from 'react';
import { createArrTitlesAndPoints } from '../../../utils/createArrTitlesAndPoints.js';
import Title from '../../UI/Title/Title.jsx';
import './VideoTitle.scss';

const VideoTitle = (props) => {

    const [activeTitle, setActiveTitle] = useState('');

    useEffect(() => {
        const arrActiveTitle = arrTitlesAndPoints.filter((item) => Math.abs(item[1] - props.pageY) < 1200);
        if (arrActiveTitle[0]) {
            setActiveTitle(arrActiveTitle[0]);
        }
    }, [props.pageY])

    const arrTitles = [
        'Как многое в замыслах Петра I, Кунсткамера своим силуэтом напоминает корабль над водами Невы.',
        'С 6 декабря 1728 года она открыта для публики, чтобы, как задумал император, «люди смотрели и учились».',
        'Кунсткамера – колыбель науки и первый музей России.',
        'Основанная Петром I в 1714 году, она служит хранилищем коллекций и исследовательской лабораторией для созданной в 1724 году Академии наук и художеств.',
        'Все академические экспедиции XVIII века передают свои коллекции в Кунсткамеру.',
    ];

    const arrTitlesAndPoints = createArrTitlesAndPoints(arrTitles, props.heightPage);
    const showTitle = activeTitle[0] ? activeTitle[0] : arrTitles[0];

    return (
        <div className='videoTitle'>
            <div className="videoTitle__conteiner">
                <Title title={showTitle} />
            </div>
        </div>
    )
}

export default VideoTitle;
