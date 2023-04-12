export const createArrTitlesAndPoints = (arrTitles, heightPage) => {

    let heightPointsTitles = parseFloat(heightPage) / ++arrTitles.length;
    let arrPointsHeight = [];
    for (let i = 0; i < parseFloat(heightPage); i += heightPointsTitles) {
        arrPointsHeight.push([i]);
    }

    const arrTitlesAndPoints = [];
    for (let i = 0; i < arrTitles.length; i++) {
        if (arrTitles[i] !== undefined) {
            arrTitlesAndPoints.push([arrTitles[i], arrPointsHeight[i]]);
        }

    }

    return arrTitlesAndPoints;
};