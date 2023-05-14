import {Helmet} from "react-helmet";
import Application, {ApplicationProps} from "./Application";
import Card, {CardProps} from "./card";

export default function Meta(props: {
    cardOptions?: CardProps;
    applicationOptions?: ApplicationProps;
}) {
    return (
        <Helmet>
            <Application {...props.applicationOptions}/>
            <Card {...props.cardOptions}/>
        </Helmet>
    )
}
