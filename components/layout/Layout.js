import Footer from "./footer"
import Link from 'next/link'
import { Container } from "react-bootstrap";
import Intro from '../home-page/intro'
import Navigation from './navigation'

function Layout(props) {
    const { home } = props;

    return (
        <>
            <Container>
                <Intro />
                <Navigation />
                {props.children}
                <hr></hr>
                {!home && <Link href="/"><a>Back Home</a></Link>}
                <Footer />
            </Container>
        </>
    )
}

export default Layout