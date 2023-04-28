import LinkedIn from '../Assets/linkedin.svg';
import Email from '../Assets/email.svg';
function Contact() {
    return (
      <div className="Contact" id="contact">
        <h1 className="Section-header">CONTACT ME</h1>
        <h2 className="Contact-Description">For any inquiries, please contact Gamela Brice through LinkedIn and Email
        <br/>
        </h2>
        <br/>
        <a className='Logo' href="http://linkedin.com/in/gamelabrice">
                <img src={LinkedIn} alt="LinkedIn Logo"/>
                <div className='Logo-Text'>LinkedIn</div>
        </a>
        <a className='Logo' href="mailto:gamilbrice@gmail.com">
                <img src={Email} alt="Email Logo"/> 
                <div className='Logo-Text'>Email</div>
        </a>
      </div>
    );
  }
  
  export default Contact;