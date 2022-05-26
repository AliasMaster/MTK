import React from 'react'

const Map = () => {
  const iframe = '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.3827998182205!2d19.132106416095265!3d50.26611067945031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dbeaa35b172f%3A0x2f48aadc4eded46c!2sMuzeum%20Telefonii%20Kom%C3%B3rkowej!5e0!3m2!1sen!2sus!4v1652955794730!5m2!1sen!2sus" width="300" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    return (
        <div className="App" dangerouslySetInnerHTML={{__html: iframe}}></div>
    )
    
}

export default Map