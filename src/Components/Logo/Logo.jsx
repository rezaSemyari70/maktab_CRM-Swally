import React from 'react'

function Logo({dataQuestions}) {
    // console.log(dataQuestions)
    return (
        <div>
            <img style={{width:'150px' , height: '150px' }} src={dataQuestions.logo_url} alt="logo-Brand" ></img>
        </div>
    )
}

export default Logo
