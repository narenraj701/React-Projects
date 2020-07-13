import React from "react";
import MarkButton from './MarkButton';
import { action } from '@storybook/addon-actions'
import {withKnobs,boolean} from '@storybook/addon-knobs';

export default {
    component: MarkButton,
    title: "Mark Button",
    decorators:[withKnobs]
};


export const MarkButtonStory=()=>{
    let disabled=boolean("isDisabled", false);
    return <MarkButton disableit={action('clicked')} disabled={disabled} />
};