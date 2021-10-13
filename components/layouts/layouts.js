import { Header } from "../header"

const Layout = (props) => {

    const { children } = props;

    return (
        <>
            <div className="container">
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
