import Default from "./Default";
import OpenGraph from "./OpenGraph";
import Twitter from "./Twitter";

type CardProps = {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    image?: string;
}

export type {
    CardProps
}

export default function Card(props: CardProps) {
    return (
        <>
            <Default {...props}/>
            <OpenGraph {...props}/>
            <Twitter {...props}/>
        </>
    )
}
