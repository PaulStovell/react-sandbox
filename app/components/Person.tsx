import * as React from "react";

export interface PersonProps { 
    firstName: string;
    lastName: string
}

export class Person extends React.Component<PersonProps, undefined> {
    render() {
        return (
            <dl className="person">
                <dt>First name:</dt>
                <dd>{this.props.firstName}</dd>
                <dt>Last name:</dt>
                <dd>{this.props.lastName}</dd>
            </dl>
        );
    }
}
