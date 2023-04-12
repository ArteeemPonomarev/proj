export const createObjectTextPrint = (pointerValue) => {

    let objText = {};

    if (pointerValue === '100%') {
        objText = {
            name: 'architecture',
            textTitle: 'АРХИТЕКТУРА',
            textSubtitle: 'История строительства здания музея Кунсткамеры (проект в разработке)',
            isName: true,
            positioinText: { justifyContent: 'flex-start' },
        };
    } else if (pointerValue === '0%') {
        objText = {
            name: 'exposition',
            textTitle: 'ЭКСПОЗИЦИЯ',
            textSubtitle: 'Интерактивный тур по Кунсткамере, просмотр эскпонатов',
            isName: true,
            positioinText: { justifyContent: 'flex-end' },
        };
    } else {
        objText = { isName: false };
    }

    return objText;
};