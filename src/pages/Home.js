import React, {useState} from "react";
import Item from "../components/Item";
import {data} from "../data";

const Home = () => {
    const [items, setItems] = useState(data);

    const moveItem = (dragIndex, hoverIndex) => {
        setItems(prevState => {
            const item = items[dragIndex];
            const newItems = [...prevState]
            newItems.splice(dragIndex, 1)
          //  const indexAdd = hoverIndex - 1 > 0 ? hoverIndex - 1  :  0
            newItems.splice(hoverIndex, 0, item);
            return newItems;
        });
    };

    return (
        <div className={"row"}>
            <div className={"col-wrapper"}>
                <h2 className={"col-header"}>{'Job list'}</h2>
                    {items.map((item, index) => <Item key={item.id} item={item} index={index} moveItem={moveItem}/>)}
            </div>
        </div>
    );
};

export default Home;