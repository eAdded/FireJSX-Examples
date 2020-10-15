import Wrap from "firejsx/Wrap";
import {hot} from "firejsx/Hot";

Wrap(({content}) => {
    return (
        <div>
            <h1>{content.heading}</h1>
            <p>this heading is provided by a plugin</p>
        </div>
    )
},hot)
