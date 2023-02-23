import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';
// @ts-nocheck

const SortableList = (props:any) => {
    return (
        <ul>
            {props.items.map((value:any, index:any) => (
                <SortableItem key={`item-${index}`} index={index} value = {value} />
            ))}
        </ul>
    );
}

export default SortableContainer(SortableList);