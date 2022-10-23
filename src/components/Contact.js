import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"
import { sendForm } from "emailjs-com";
import { useRef } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import SocialNetwork from './SocialNetwork';
import './Contact.css'
import theme from "./theme/Theme";

function Contact(props) {

    const form = useRef();
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID

    console.log(serviceID, templateID, userID)

    const sendMail = (e) => {
        e.preventDefault();

        sendForm( `${serviceID}`, `${templateID}`, form.current, `${userID}` )
            .then(
                result => console.log(result.text),
                (err) => {
                    console.log(JSON.stringify(err))
                }
            )
    }

    const handleSubmit = (e) => {
        sendMail(e);
    }

    return (
        <div className={props.isMobile ? "contentMobile content contact" : "content contact"}>
            <div className="pageTitle">
                <h1>CONTATO</h1>
            </div>
            <div className="pageContentHorizontal">
                <div className={props.isMobile ? "contentMobile contactForm" : "contactForm"}>
                    <h2>Mande uma mensagem</h2>
                    <form ref={form} onSubmit={sendMail}>
                        <TextField className="inputField" required label="Nome" variant="filled" name="from_name" />
                        <TextField className="inputField" required label="E-mail" variant="filled" name="email" />
                        <TextField className="inputField" required label="Telefone" variant="filled" name="phone" />
                        <TextField className="inputField" required label="Mensagem" variant="filled" name="message" rows={4} multiline />
                        <ThemeProvider theme={theme}>
                            <Button color="primary" variant="contained" onClick={handleSubmit}>Enviar</Button>
                        </ThemeProvider>
                    </form>
                </div>
                <div className={props.isMobile ? "contentMobile info" : "info"}>
                    <Card>
                        <CardHeader title="Dúvidas ou algum projeto em mente?" />
                        <CardContent>
                                <FaWhatsapp /> +55 11 98394-8270
                        </CardContent>
                        <CardContent>
                            <FiMail /> poncileo@gmail.com
                        </CardContent>
                        <SocialNetwork />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact;