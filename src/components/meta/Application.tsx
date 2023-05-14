type ApplicationProps = {
    applicationName?: string;
    author?: string;
    description?: string;
    Keywords?: string;
    robots?: string;
    slurp?: string;
    viewport?: string;
}

type ApplicationPropKeys = keyof ApplicationProps;

export default function Application(props: ApplicationProps) {
    const arr: string[][] = [];
    for (let propsKey in props) {
        let key = (propsKey as ApplicationPropKeys);
        let value = props[key];
        if (value !== undefined) {
            arr.push([propsKey, value]);
        }
    }
    return (
        <>
            <meta Net-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"/>
            {
                arr.map((v) => <meta name={v[0]} content={v[1]}/>)
            }

            {/*<meta name='application-name' content={`ZQA's HomePage`}/>*/}
            {/*<meta name='author' content={`ZQA`}/>*/}
            {/*<meta name='description' content={`ZQA's HomePage, want to have some fun, please enjoy`}/>*/}
            {/*<meta name="Keywords" content="ZQA,HomePage,fun,bytedancer,study"/>*/}
            <meta name='robots' content={`index,follow`}/>
            <meta name='slurp' content={`index,follow`}/>
        </>
    )
}

export type {
    ApplicationProps
}
