import { useState } from 'react';
import Loader from "../components/Loader/Loader";
import VideoSection from "../components/VideoSection/VideoSection";

const StartingPage = () => {

    let [isLoading, setIsLoading] = useState(true);

    return (
        <div className="startingPage">
            {isLoading ?
                <Loader setIsLoading={setIsLoading} />
                : <VideoSection isLoading={isLoading} />}
        </div>
    )
}

export default StartingPage;