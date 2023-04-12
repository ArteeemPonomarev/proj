import './LoaderAnimation.scss';
import logoVideo from '../../../assets/videos/logo.mp4';
import { useRef, useEffect } from 'react';

const LoaderAnimation = ({ progress }) => {

    const logoVireoRef = useRef(null)

    useEffect(() => {

        if (progress < 100) {
            let duration = !!logoVireoRef.current.duration ? logoVireoRef.current.duration : 0;
            logoVireoRef.current.currentTime = duration * progress / 100;
        }

    }, [progress]);

    return (
        <div className='loader__animation animation'>
            <video
                className='animation__video'
                ref={logoVireoRef}
                src={logoVideo}
                muted
            />
        </div>
    )
}

export default LoaderAnimation;