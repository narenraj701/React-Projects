import React from 'react';
import AddToDo from './AddToDo';
import { withKnobs, text } from '@storybook/addon-knobs';

export default{
    component: AddToDo,
    title:'Add To Do ',
    decorators:[withKnobs]
}

export const addToDoStory=()=><AddToDo message={text("task","Go for a Movie")} due={text("due","saturday")} />;