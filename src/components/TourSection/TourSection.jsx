import './TourSection.scss';
import ReturnButton from '../ReturnButton/ReturnButton';
import SettingButtons from '../SettingButtons/SettingButtons';
import TourTitle from './TourTitle/TourTitle';
import TourPrint from './TourPrint/TourPrint';

const TourSection = () => {

    return (
        <div className="tourSection">
            <div className="tourSection__conteiner">
                <TourTitle />
                <TourPrint />
                <ReturnButton />
                <SettingButtons />
            </div>
        </div>
    )
}

export default TourSection;