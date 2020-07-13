import React from "react";
import ToDoMessage from './ToDoMessage';
import { action } from '@storybook/addon-actions'
import {withKnobs,boolean} from '@storybook/addon-knobs';

export default {
    component: ToDoMessage,
    title: "To Do Message",
    decorators:[withKnobs]
};


export const ToDoMessageStory=()=>{
    let finished=boolean("Finished",false);
    return <ToDoMessage message="complete Assignments" finished={finished} />
};