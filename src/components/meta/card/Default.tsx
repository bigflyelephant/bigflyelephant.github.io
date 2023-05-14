import {CardProps} from "./index";

export default function Default(props:CardProps) {
    return (
        <>
            {props.type&&<meta property="type" content={props.type}/>}
            {props.url&&<meta property="url" content={props.url}/>}
            {props.description&&<meta property="description" content={props.type}/>}
            {props.image&&<meta property="image" content={props.image}/>}
            {props.title&&<meta property="title" content={props.title}/>}
        </>
    )
}
