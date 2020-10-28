import Link from "firejsx/Link";
import Style from "./Style.css";

export default function () {
    const {name} = React.useContext(global.NameContext);
    return (
        <nav className={Style.nav}>
            <Link href={"/"}>
                Index
            </Link>
            <Link href={"/coms"}>
                Coms
            </Link>
            <Link href={"/content"}>
                Content
            </Link>
            <Link href={"/noop"}>
                Noop
            </Link>
            <Link href={"/login"}>
                {name ? "Logout" : "Login"}
            </Link>
            <h1>
                {name || "Not yet Logged in"}
            </h1>
        </nav>
    )
}
