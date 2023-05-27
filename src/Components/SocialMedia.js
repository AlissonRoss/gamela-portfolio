import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Item(props){
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img className="post-Img" src={props.item.img}/>
        </Paper>
    )
}

function SocialMedia(props) {
    var items = [
      {
          name: "Elmer Chocolate Logo",
          img:require('../Assets/posts/post1.jpg')
      },
      {
        name: "Advantage Medical Professional Logo",
        img:require('../Assets/posts/post5.jpg')
      },
      {
          name: "Advantage Medical Professional Post",
          img:require('../Assets/posts/post2.jpg')
      },
      {
        name: "Advantage Medical Professional Post",
        img:require('../Assets/posts/post3.jpg')
      },
      {
        name: "Advantage Medical Professional Post",
        img:require('../Assets/posts/post4.jpg')
      },
      {
        name: "Elmer Chocolate",
        img:require('../Assets/posts/post6.jpg')
      },
      {
        name: "Elmer Chocolate",
        img:require('../Assets/posts/post7.jpg')
      },
      {
        name: "Elmer Chocolate",
        img:require('../Assets/posts/post8.jpg')
      },
      {
        name: "Elmer Chocolate",
        img:require('../Assets/posts/post9.jpg')
      },
    
    ];

    return (
        <div className="SocialMedia" id="social">
          <h1 className="Section-header">SOCIAL MEDIA</h1>
          <h2 className="SocialMedia-Description">The following are social media related logos and posts of the companies I've worked with</h2>
        <Carousel className='social-posts' animation='fade'
           NextIcon={<ArrowForwardIosRoundedIcon/>}
           PrevIcon={<ArrowBackIosNewRoundedIcon/>}>
          {
            items.map( (item, i) => <Item key={i} item={item} /> )
          }
        </Carousel>
      </div>
    );
  }
  
  export default SocialMedia;