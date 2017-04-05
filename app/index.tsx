import * as React from "react";
import * as ReactDOM from "react-dom";

import { Directory } from "./components/Directory";

ReactDOM.render(
    <Directory numberOfPeople={3} />,
    document.getElementById("app")
);
