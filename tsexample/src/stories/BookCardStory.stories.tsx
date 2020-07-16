import React from 'react';
import LightText from '../components/Atoms/LightText';
import Names from '../components/Atoms/Names';
import Pages from '../components/Atoms/Pages';
import Title from '../components/Atoms/Title';
import BookCard from '../components/Molecules/BookCard';
import size from '../Assets/size.png';
import { withKnobs, text} from "@storybook/addon-knobs";


export default{
    title:'BookCard Components',
    decorators: [withKnobs]
}

export const TitleStory = () => <Title title={text("title","Inorganic Chemistry")}/>;

TitleStory.story = {
  name: "Title",
};

export const LightTextStory = () => <LightText sideHeading="by"/>;

LightTextStory.story = {
  name: "Light Text",
};

export const NamesStory = () => <Names name={text("Author","Joe Pearson")}/>;

NamesStory.story = {
  name: "Name",
};

export const PageStory = () => <Pages pages={text("pages","12 pages/245 pages")}/>;

PageStory.story = {
  name: "Pages",
};

export const BookCardStory = () => 
<BookCard image={size} 
    author={text("Author","Joe Pearson")}
    title={text("title","Inorganic Chemistry")} 
    categoryname={text("Category","Chemistry")}/>;

BookCardStory.story = {
  name: "BookCard",
};