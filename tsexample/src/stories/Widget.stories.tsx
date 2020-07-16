import React from 'react';
import WidgetText from '../components/Atoms/WidgetText';
import WidgetIcon   from '../components/Atoms/WidgetIcon';
import WidgetCount  from '../components/Atoms/WidgetCount';
import Read from '../Assets/Read.png';
import Widget from '../components/Molecules/Widget';
import { withKnobs, text, number} from "@storybook/addon-knobs";

export default {
  title: 'Widget Components',
  decorators: [withKnobs]
};

export const WidgetStatus = () => <WidgetText status={text("status","CURRENTLY READING")}/>;

WidgetStatus.story = {
  name: "Widget Status",
};

export const Icon=()=><WidgetIcon icon={Read} />;

Icon.story={
  name: "Widget Icon",
}

export const Count=()=><WidgetCount count={number("Count",10)} />;

Count.story={
  name:"Widget Count",
}

export const WidgetStory=()=><Widget icon={Read} status={text("status","CURRENTLY READING")} count={number("Count",10)} />

WidgetStory.story={
  name:"Widget"
}







