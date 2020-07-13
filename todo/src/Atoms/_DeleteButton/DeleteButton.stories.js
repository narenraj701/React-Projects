import React from "react";
import DeleteButton from './DeleteButton';
import { action } from "@storybook/addon-actions";

export default {
    component: DeleteButton,
    title: "Delete Button Message",
};

export const DeleteButtonStory=()=><DeleteButton delete={action("clicked")} />