import React from 'react'


const Stars = ({ stars, reviews }) => {


    const renderStar = () => {

        const fullStar = Math.floor(stars)
        const desimalPoint = (stars - fullStar).toFixed(1)
        const remainingStars = 5 - fullStar - (desimalPoint >= 0.5 ? 1 : 0)

        const starCon = []
        // Render full stars
        for (let i = 0; i < fullStar; i++) {

            starCon.push(<i key={i} className="ri-star-fill" style={{ color: '#F3A847' }}></i>)

        }
        // Render half star if applicable
        if (desimalPoint >= 0.5) {
            starCon.push(<i key='key' className="ri-star-half-line" style={{ color: '#F3A847' }}></i>)
        }
        // Render empty stars for the remaining
        for (let index = 0; index < remainingStars; index++) {
            starCon.push(<i key={`empty-${index}`} className="ri-star-line" style={{ color: '#F3A847' }}></i>)
        }


        return starCon
    }


    return (
        <>
            {stars} {renderStar()} <span style={{ color: '#186592', fontWeight: '500' }}> {reviews} ratings</span>
            <br />

        </>
    )
}

export default Stars