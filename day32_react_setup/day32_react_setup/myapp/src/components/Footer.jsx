import { Container } from "reactstrap"

const Footer=()=>{
   return <footer>
        <Container>
            <div className="text-center">
                {new Date().getFullYear()}
                Myapp built with Reactjs
            </div>
        </Container>
    </footer>
}

export default Footer;