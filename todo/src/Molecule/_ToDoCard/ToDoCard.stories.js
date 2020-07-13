import React from 'react';
import ToDoCard from './ToDoCard';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default{
    component: ToDoCard,
    title:'To Do Card',
    decorators:[withKnobs]
}
export const ToDoCardStory=()=><ToDoCard message="Complete Assignmets" due="Tomorrow" completed={boolean("Finished",false)} />;