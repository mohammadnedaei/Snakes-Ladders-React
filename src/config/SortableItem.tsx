import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const SortableItem = (props:any) => {
    return <li>{props.value}</li>
}

export default SortableElement(SortableItem);