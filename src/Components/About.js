import 'animate.css';
import Flower from '../Assets/flower-pot.gif';
function About() {
    return (
      <div className="SocialMedia" id="about">
        <h1 className="Section-header animate__animated animate__fadeIn">ABOUT ME</h1>
        <h2 className="About-Description">
        &nbsp;My name is Gamela and I specialize in marketing and social media. 
            My job involves designing and implementing marketing campaigns and social media 
            content, as well as tracking website metrics and overseeing advertising efforts. 
            My ultimate objective is to expand and raise awareness of our business by producing compelling content, running effective ad 
            campaigns, and establishing and maintaining strong connections with our customers. I take pleasure in creating content that 
            inspires interaction and drives lead generation, and I have a 
            genuine love for communication and building relationships with others. 
            </h2>
            <img className="About-Img" src={Flower}/>
      </div>
      
    );
  }
  
  export default About;