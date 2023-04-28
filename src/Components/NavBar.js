import { Button } from "@mui/material";
import { useState, useEffect } from "react";

function NavBar() {
   
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      var windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
    return (
      <div className={`NavBar ${stickyClass}`}>
        <ul className="Nav-items">
          <Button href="#home" component="button">HOME</Button>
          &#x2022;
          <Button href="#about" component="button">ABOUT</Button>
          &#x2022;
          <Button href="#marketing" component="button">MARKETING</Button>
          &#x2022;
          <Button href="#social" component="button">SOCIAL MEDIA</Button>
          &#x2022;
          <Button href="#design" component="button">GRAPHIC DESIGN</Button>
          &#x2022;
          <Button href="#certifications" component="button">CERTIFICATIONS</Button>
          &#x2022;
          <Button href="#contact" component="button">CONTACT</Button>
        </ul>
            
      </div>
    );
  }
  
  
  export default NavBar;