import "./styles/main.css"
import Page from "firejsx/Page";
import React from "react";
import MyNav from "./components/MyNav/MyNav";

global.NameContext = require("./Hooks/NameContext").default;

function my_reducer(state) {
    return state ? undefined : "Aniket";
}

FireJSX.app = props => {
    const [name, dispatch] = React.useReducer(my_reducer, undefined);
    return (
        <div>
            <global.NameContext.Provider value={{name, dispatch}}>
                <MyNav/>
                <Page {...props}/>
            </global.NameContext.Provider>
        </div>
    )
}
