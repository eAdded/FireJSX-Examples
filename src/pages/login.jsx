import NameContext from "../Hooks/NameContext";

export default function () {
    const {name, dispatch} = React.useContext(NameContext);
    return (
        <div>
            <button onClick={dispatch}>
                {name ? "Logout" : "Login"}
            </button>
        </div>
    )
}
