import { memo } from 'react';
import ButtonMain from '../UI/ButtonMain/ButtonMain';
import './ButtonMainWrapper.scss';
import { Link } from 'react-router-dom';

const ButtonMainWrapper = memo((props) => {

    let { pageHeightNumber, pageY } = props;

    const objButtonScrollingStart = {
        text: 'Используйте колесо мыши',
        width: '242px',
        border: '2px solid #884234',
        background: 'rgba(0, 0, 0, 0)',
        cursor: 'default',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#332B26',
    }

    const objButtonScrollingEnd = {
        text: 'Продолжить',
        width: '232px',
        className: 'hover',
        background: '#884234',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        color: '#ffffff',
    }

    return (
        <div className="buttonMainWrapper">
            {(pageY === window.innerHeight) ?
                <ButtonMain objButtonScrolling={objButtonScrollingStart} />
                : ''}

            {(pageY === pageHeightNumber) ?
                <Link to='print'>
                    <ButtonMain objButtonScrolling={objButtonScrollingEnd} />
                </Link>
                : ''}
        </div>
    )
})

export default ButtonMainWrapper;