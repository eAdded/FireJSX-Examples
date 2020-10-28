import Head from "firejsx/Head";
import Loader from "firejsx/Loader";
import Link from "firejsx/Link";
import LazyLoad from "firejsx/LazyLoad"

export default function App() {
    const Lazy = LazyLoad(() => import("../components/lazy"), undefined, () =>
        <div>
            Loading...
        </div>
    )

    return (
        <div>
            <Head>
                <title>Index Page</title>
            </Head>
            <Loader effect={React.useEffect} delay={2000}>
                <span style={{color: "blue"}}>Loading text with 2s delay</span>
                {/*use Loader on page root, delay is optional*/}
            </Loader>
            <br/><br/>
            <Link href="/">Link to Index Page</Link>
            <Lazy/> {/*Use it is a regular component*/}
        </div>
    )
}
