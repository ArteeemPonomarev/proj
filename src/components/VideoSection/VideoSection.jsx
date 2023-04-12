import './VideoSection.scss';
// import backgroundVideo from '../../assets/videos/backgroundVideo30.mp4';
import backgroundVideo from '../../assets/videos/backgroundVideo60.mp4';
import VideoTitle from './VideoTitle/VideoTitle';
import { useEffect, useRef, useState } from 'react';
import SettingButtons from '../SettingButtons/SettingButtons';
import ButtonMainWrapper from '../ButtonMainWrapper/ButtonMainWrapper';
import { useFetchingInfinite } from '../../hooks/useFetchingInfinite';

const VideoSection = () => {

    const [currentTime, setCurrentTime] = useState(0);

    // Создается перерисовку из-за которой обновляется значение высоты videoSection__pageHeight. В дальнейшем изменить на предварительную загрузку данных видео
    useFetchingInfinite();

    const videoRef = useRef(null);
    const scrollRef = useRef(null);

    let scrollSpeed = 1900;
    let pageY = window.pageYOffset;
    const browserInnerY = window.innerHeight;

    useEffect(() => {
        setCurrentTime(window.pageYOffset / scrollSpeed);

        if (currentTime) {
            videoRef.current.currentTime = currentTime;
        } else {
            videoRef.current.currentTime = 0;
        }

    }, [currentTime, pageY]);

    const getHeight = () => {
        const video = videoRef.current;
        if (!video) return;
        let height = `${video.duration * scrollSpeed}px`;

        return height;
    };
    const pageHeightNumber = Math.round(parseFloat(getHeight()));

    const getScrollHeight = () => {
        const video = videoRef.current;
        if (!video) return;
        let frameScroll = `${(pageY + browserInnerY) / (video.duration * scrollSpeed) * 100}%`;

        return frameScroll;
    };

    return (
        <div className="videoSection">
            <div
                className="videoSection__scroll"
                ref={scrollRef}
                style={{ height: getScrollHeight() }}
            ></div>
            <div
                className="videoSection__pageHeight"
                style={{ height: getHeight() }}
            ></div>
            <VideoTitle
                pageY={pageY}
                heightPage={getHeight()}
            />
            <ButtonMainWrapper pageHeightNumber={pageHeightNumber} pageY={pageY + browserInnerY} />
            <SettingButtons />
            <div className="videoSection__wrapper">
                <video
                    className='videoSection__background'
                    ref={videoRef}
                    src={backgroundVideo}
                    loop={false}
                    muted
                    preload={'true'}
                />
            </div>
        </div>
    )
}

export default VideoSection;
