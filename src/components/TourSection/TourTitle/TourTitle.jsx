import './TourTitle.scss';
import Title from '../../UI/Title/Title';

const TourTitle = () => {

    const textTitles = 'ЭКСПОЗИЦИЯ КУНСТКАМЕРЫ XVIII ВЕКА';

    return (
        <div className='tourTitle'>
            <div className="tourTitle__conteiner">
                <Title title={textTitles} />
            </div>
        </div>
    )
}

export default TourTitle;