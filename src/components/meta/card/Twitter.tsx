import {CardProps} from "./index";

export default function Twitter(props:CardProps) {
    return (
        <>
            <meta property="twitter:card" content='summary_large_image'/>
            {props.type&&<meta property="twitter:type" content={props.type}/>}
            {props.url&&<meta property="twitter:url" content={props.url}/>}
            {props.description&&<meta property="twitter:description" content={props.type}/>}
            {props.image&&<meta property="twitter:image" content={props.image}/>}
            {props.title&&<meta property="twitter:title" content={props.title}/>}
        </>
    )
}
