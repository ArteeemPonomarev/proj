import './Loader.scss';
import LoaderAnimation from './LoaderAnimation/LoaderAnimation';
import LoaderSpiner from './LoaderSpiner/LoaderSpiner';
import SettingButtons from '../SettingButtons/SettingButtons';
import { useFetching } from '../../hooks/useFetching';
import { useEffect } from 'react';

const Loader = ({ setIsLoading }) => {

    let [loading, progress] = useFetching();

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);
    // console.log(progress);

    return (
        <div className='loader'>
            <div className="loader__wrapper">
                <LoaderAnimation progress={progress} />
                <LoaderSpiner progress={progress} />
            </div>
            <SettingButtons />
        </div>
    )
}

export default Loader;