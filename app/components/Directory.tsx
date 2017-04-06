import * as React from "react";
import { Person } from "./Person";
import "./Directory.less";

export interface DirectoryProps { 
    numberOfPeople: number
}

export class Directory extends React.Component<DirectoryProps, undefined> {
    render() {
        var people = [];
        for (var i = 1; i <= this.props.numberOfPeople; i++) {
            people.push({firstName: "First " + i, lastName: "Last " + i });
        }

        return (
            <div>
                {people.map(person => 
                    <div key={person.firstName}>
                        <Person firstName={person.firstName} lastName={person.lastName} />
                    </div>
                )}
            </div>
        );
    }
}
