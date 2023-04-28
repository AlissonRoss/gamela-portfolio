import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function Certifications() {
    return (
      <div className="Cert" id="certifications">
        <h1 className="Section-header">CERTIFICATIONS</h1>
        <h2 className="Cert-Description">The following are my certifications
        <ImageList sx={{ width: 850, height: 450 }} cols={2} >
            {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.date}</span>}
                position="below"
            />
            </ImageListItem>
        ))}
    </ImageList>
    </h2>
      </div>
      
    );
  }
  const itemData = [
    {
      img: require('../Assets/cert1.png'),
      title: 'HubSpot Marketing Software Certificate',
      date: '2022-2023',
    },
    {
        img: require('../Assets/cert2.png'),
        title: 'Digital Marketing Certificate',
        date: '2022-2024',
    },
    {
        img: require('../Assets/cert3.png'),
        title: 'Inbound Marketing Certificate',
        date: '2023-2024',
    },
    {
        img: require('../Assets/cert4.png'),
        title: 'Social Media Certificate',
        date: '2023-2024',
    },
    {
        img: require('../Assets/cert5.png'),
        title: 'Content Marketing Certificate',
        date: '2023-2025',
    },
    {
        img: require('../Assets/cert6.png'),
        title: 'Content Marketing Certificate',
        date: '2020',
    },
    {
        img: require('../Assets/cert7.png'),
        title: 'Hootsuite Platform Certification',
        date: '2020',
    },
  ];
  
  export default Certifications;