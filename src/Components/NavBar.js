import { Button } from "@mui/material";

function NavBar() {
    return (
      <div className="NavBar">
        <ul className="Nav-items">
          <Button href="#home" component="button">home</Button>
          &#x2022;
          <Button href="#marketing" component="button">marketing</Button>
          &#x2022;
          <Button href="#social" component="button">social media</Button>
          &#x2022;
          <Button href="#design" component="button">graphic design</Button>
          &#x2022;
          <Button href="#certifications" component="button">certifications</Button>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;