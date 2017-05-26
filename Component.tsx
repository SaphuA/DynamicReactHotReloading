import * as React from "react";

export default class Component extends React.Component<void, void> {
    public constructor(props: void) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <h1>Hello world</h1>
        );
    }
}
