import React from 'react'

const Facebook = () => {
    
    
    var width = window.innerWidth
    
    if(width > 768) {
        width /= 2
    }
    
    width -= 40
    
    width = width > 500 ? 500 : width

    var iframe = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmuztelkom&tabs=timeline&width=${width}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="${width}" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
    
    window.onresize = () => {
        width = window.innerWidth
        if(width > 768) {
        width /= 2
        }
    
        width -= 40
        
        width = width > 500 ? 500 : width

        iframe = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmuztelkom&tabs=timeline&width=${width}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="${width}" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
    }


    return (
        <div className="App" dangerouslySetInnerHTML={{__html: iframe}}></div>
    )
}

export default Facebook