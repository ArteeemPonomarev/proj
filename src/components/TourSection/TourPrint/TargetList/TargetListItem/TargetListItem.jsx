import './TargetListItem.scss';
import { useContext } from 'react';
import { ListIndexContext } from '../../../../../context/ListIndexContext';
import { addClassNamesByIndex } from '../../../../../utils/addClassNamesByIndex';

const TargetListItem = (props) => {

    const { hoverIndex } = useContext(ListIndexContext);

    const { children, className, onMouseEnter, onMouseLeave } = props;

    let classHover = addClassNamesByIndex(hoverIndex);

    return (
        <div
            className={`targetListItem ${className}-${classHover}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    )
}

export default TargetListItem;