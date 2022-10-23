import SocialNetwork from "./SocialNetwork";

function Home() {
    return (
        <div className="home">
            <h1>
                Olá, sou <span style={{color: "var(--blue)"}}>Leonardo Ponciano.</span> Bem vindo!    
            </h1>
            <p>
                Tenho experiência em gerenciamento e desenvolvimento de sites Wordpress. Também já trabalhei um pouco com ReactJS.
            </p>
            <p>
                Continuo sempre em busca de aprimorar e ampliar meu conhecimento.
                Nos meus conhecimentos estão: HTML, CSS, Javascript, ES6, ReactJS, React Native, Java, Kotlin e Groovy.
            </p>
            <SocialNetwork/>
        </div>
    )
}

export default Home;