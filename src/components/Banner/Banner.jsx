import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css'

const Banner = () => {

    const data = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/RedmiNote13/D108421481_INWLD_RedmiNote13_DesktopTallHero_1500x600_2._CB586101062_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/prime/JanART/GW/T2/PC_Hero_1500x600_deals_ft._CB585907150_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/imgg/hero/1499/30th/nov/hero1300x1200._CB572143637_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/hsbc/WA_WW_3000._CB585877492_.jpg'
    ]
    return (
        <Carousel
            className='carouseal'
            autoPlay={true}
            animation='slide'
            indicators={false}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: '#fff',
                    color: 'black',
                    width: '50px',
                    height: '150px',
                    borderRadius: '5px'

                }
            }}

        >
            {
                data.map((img, id) => {
                    return (
                        <img key={id} src={img} alt="img" className='banner_img' />
                    )
                })
            }
        </Carousel >
    )
}

export default Banner