import {CardProps} from "./index";

export default function OpenGraph(props:CardProps) {
    return (
        <>
            {props.type&&<meta property="og:type" content={props.type}/>}
            {props.url&&<meta property="og:url" content={props.url}/>}
            {props.description&&<meta property="og:description" content={props.type}/>}
            {props.image&&<meta property="og:image" content={props.image}/>}
            {props.title&&<meta property="og:title" content={props.title}/>}
        </>
    )
}
