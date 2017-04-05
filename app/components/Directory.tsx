import * as React from "react";

import { Person } from "./Person";
import "./Directory.less";

export interface DirectoryProps { 
    numberOfPeople: number
}

export class Directory extends React.Component<DirectoryProps, undefined> {
    render() {
        var people = [
            { firstName: "Paul", lastName: "Stovell" },
            { firstName: "Sonia", lastName: "Stovell" },
        ];
        return (
            <div>
                {people.map(person => 
                    <div>
                        <Person firstName={person.firstName} lastName={person.lastName} />
                    </div>
                )}
            </div>
        );
    }
}
