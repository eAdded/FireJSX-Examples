import "./styles/main.css"
import Page from "firejsx/Page";
import React from "react";
import MyNav from "./components/MyNav/MyNav";
import NameContext from "./Hooks/NameContext";

function my_reducer(state) {
    return state ? '' : "Aniket";
}

FireJSX.app = props => {
    const [name, dispatch] = React.useReducer(my_reducer, '');
    return (
        <NameContext.Provider value={{name, dispatch}}>
            <MyNav/>
            <Page {...props}/>
        </NameContext.Provider>
    )
}
