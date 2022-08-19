import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import ITEM_TYPE from "../data/types";

const Item = ({item, index, moveItem}) => {
    const ref = useRef(null);

    const [{isOver}, drop] = useDrop({
        accept: ITEM_TYPE,
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
        drop: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;
            moveItem(dragIndex, hoverIndex);
        },
        hover(item, monitor) {

        },
    });

    const [{isDragging}, drag] = useDrag({
        type: ITEM_TYPE,
        item: {...item, index},
        collect: monitor => ({
            isDragging: monitor.isDragging(),

        }),
    });
    drop(drag(ref));

    return (
        <div ref={ref} className={"item"}>
            <div className={"color-bar"} style={{backgroundColor: 'red'}}/>
            <p className={"item-title"}>{item.title}</p>
            <p className={"item-content"}>{item.content}</p>
            <p className={"item-status"}>{item.icon}</p>
        </div>
    );
};

export default Item;