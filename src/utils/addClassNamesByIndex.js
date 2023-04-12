export const addClassNamesByIndex = (hoverIndex) => {

    if (hoverIndex === 0) {
        return 'anatomicalTheater-hover';
    } else if (hoverIndex === 1) {
        return 'library1rdFloor-hover';
    } else if (hoverIndex === 2) {
        return 'library2rdFloor-hover';
    } else if (hoverIndex === 3) {
        return 'library3rdFloor-hover';
    } else if (hoverIndex === 4) {
        return 'münzkabinet-hover';
    } else if (hoverIndex === 5) {
        return 'cabinetOfPeter1-hover';
    } else if (hoverIndex === 6) {
        return 'naturalia1ndFloor-hover';
    } else if (hoverIndex === 7) {
        return 'naturalia2ndFloor-hover';
    } else if (hoverIndex === 8) {
        return 'gallery-hover';
    } else if (hoverIndex === 9) {
        return 'gottorpGlobe-hover';
    } else if (hoverIndex === 10) {
        return 'artifialia3rdFloor-hover';
    } else {
        return '';
    }

};