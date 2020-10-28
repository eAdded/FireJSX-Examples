export default function () {
    const {name, dispatch} = React.useContext(global.NameContext);
    return (
        <div>
            <button onClick={dispatch}>
                {name ? "Logout" : "Login"}
            </button>
        </div>
    )
}
