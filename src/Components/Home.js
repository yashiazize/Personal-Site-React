import imgTitle from "./Assets/yashiry-azize.PNG"
import "./Home.css"

const Home = () => {
  return (
    <section className="home-container">
      <img id="yashiry-azize" src={imgTitle} alt="yashiry-azize" />
      <h2 id="title">Fullstack Web Developer</h2>
    </section>
  );
};


export default Home;