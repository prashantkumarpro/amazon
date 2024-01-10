import React from 'react'
import Carousel from 'react-material-ui-carousel'

const Banner = () => {

    const data = [
        'https//images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg',
        'https//images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg',
     '   https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/RedmiNote13/D108421481_INWLD_RedmiNote13_DesktopTallHero_1500x600_2._CB586101062_.jpg'
    ]
    return (
        <Carousel className='carousel'>
            {data.map((img, id) => {
                return (
                    <img key={id} src={img} alt="" />
                )
            })}
        </Carousel>
    )
}

export default Banner