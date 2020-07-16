
interface WidgetProps{
    icon:string,
    status:string,
    count:number
}
interface AllWidgetProps{
    widgets:WidgetProps[]
}

interface BookCardProps{
    image:string,
    title:string,
    author:string,
    categoryname:string
}
interface AllBookCardProps{
    bookcards:BookCardProps[]
}