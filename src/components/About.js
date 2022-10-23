import { Card, CardContent, CardHeader } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FaAndroid, FaCode, FaLinux } from "react-icons/fa";
import  { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator }  from "@mui/lab";
import './About.css';
import theme from "./theme/Theme";

function About(props) {
    const birthDate = new Date('1997-12-13')
    const difference = new Date() - birthDate
    const age = Math.trunc(((difference) / (1000 * 3600 * 24) ) / 365)

    return (
        <div className={ props.isMobile ? "contentMobile content" : "content" }>
            <div className="pageTitle">
                <h1>SOBRE MIM</h1>
            </div>
            <div className="pageContentVertical">
                <div className="tabelaDeInfosPessoais">
                    <table>
                        <tbody>
                            <tr>
                                <td className="infoResume" colSpan={2}>
                                    textinho de resumo lorem ispum textinho de resumo lorem ispum 
                                    textinho de resumo lorem ispum textinho de resumo
                                     lorem ispum textinho de resumo lorem ispum textinho de resumo
                                      lorem ispum
                                </td>
                            </tr>
                            <tr>
                                <td className="infoLabel">Nome</td>
                                <td>Leonardo Ponciano</td>
                            </tr>
                            <tr>
                                <td className="infoLabel">Idade</td>
                                <td>{age}</td>
                            </tr>
                            <tr>
                                <td className="infoLabel">Nacionalidade</td>
                                <td>Brasileiro</td>
                            </tr>
                            <tr>
                                <td className="infoLabel">Línguas</td>
                                <td>Português (Nativo), Inglês (Avançado)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pageTitle">
                    <h1>SKILLS</h1>
                </div>
                <div className="skills">
                    <Card className={ props.isMobile ? "skillsCardMobile" : "skillsCard" }>
                        <CardHeader title={<FaCode /> } subheader="Linguagens" />
                        <CardContent>
                            Lorem ipsum sobre linguagens
                        </CardContent>
                    </Card>
                    <Card className={ props.isMobile ? "skillsCardMobile" : "skillsCard" }>
                        <CardHeader title={<FaAndroid /> } subheader="Mobile"  />
                        <CardContent>
                            React Native, Java para Android e Kotlin.
                        </CardContent>
                    </Card>
                    <Card className={ props.isMobile ? "skillsCardMobile" : "skillsCard" }>
                        <CardHeader title={<FaLinux/> } subheader="OS"  />
                        <CardContent>
                            Linux Debian e CentOS
                        </CardContent>
                    </Card>
                </div>
                <div className="pageTitle">
                    <h1>EXPERIÊNCIA</h1>
                </div>
                <div className="experience">
                    <Card className={ props.isMobile ? "experienceCardMobile" : "experienceCard" }>
                        <ThemeProvider theme={theme}>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        Desenvolvedor de Software <br></br>
                                        fev de 2022 até o momento
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        Analista de Suporte<br></br>
                                        jul de 2017 - jan de 2022 
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </ThemeProvider>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default About;