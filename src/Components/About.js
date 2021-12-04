import myPhoto from "../Components/Assets/myphoto-react.png"

const About = () => {
    return (
        <section className="aboutContainer">
             {/* <img id="myphoto" src={myPhoto}/>  */}
            <div>
             <p>
              Currently learning to code through Pursuit, an intensive 12 -month
              software engineering fellowship with a 9% acceptance rate. I look
              forward to transitioning into a more tech-centric role that merges my
              experience developing efficient and user-friendly process with my
              passion for coding.
            </p>
            <br />
            <p>
                In addition to my technical skills in Javascript, React and Redux, my
                unquenchable curiosity for life and people's experiences allow me to
                collaborate well with others and make me an asset to any team.
            </p>
            <br />
            <p>
                Beyond tech, I am an avid drawer, cine-phile, gamer and trivia enthusiast - 
                look below for a fun random-fact. I am passionate about sharing ideas and
                 stories through the utilization of gaming, illustrations and other media 
                 technologies, and using these forms to more accurately portray POC stories
                and unify people through shared experiences. I hope to eventually be able to 
                apply my creative side to a future career in app and web development.
            </p>

            </div>
        </section>
    )
}

export default About;