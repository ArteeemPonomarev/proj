import { useState, useEffect } from 'react';

export const useFetchingInfinite = () => {

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loadingTimeout = setTimeout(() => {
            if (loading >= 100) return
            setProgress(progress + 1)
        }, 10)

        if (progress === 100) {
            setLoading(false)
        }

        return () => {
            clearTimeout(loadingTimeout)
        }
    }, [progress, loading])

    return [loading, progress];
} 