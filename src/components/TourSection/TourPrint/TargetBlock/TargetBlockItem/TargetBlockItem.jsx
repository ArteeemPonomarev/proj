import './TargetBlockItem.scss';
import { useContext } from 'react';
import { ListIndexContext } from '../../../../../context/ListIndexContext';
import { addClassNamesByIndex } from '../../../../../utils/addClassNamesByIndex';

const TargetBlockItem = (props) => {

    const { hoverIndex } = useContext(ListIndexContext);

    const { className, onMouseEnter, onMouseLeave } = props;

    let classHover = addClassNamesByIndex(hoverIndex);

    return (
        <div
            className={`${className} block-item ${className}-${classHover}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        ></div>
    )
}

export default TargetBlockItem;