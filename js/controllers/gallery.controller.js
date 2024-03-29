'use strict'

function renderGallery() {
    var strHTML = ''
    var strHTMLs = []

    for (var i = 1; i < 19; i++) {
        const strArticle = `<article class="gallery-img">
                        <img src="img/${i}.jpg" id="${i}" alt="meme-img" onclick="onSelectImg(this)">
                    </article>`
        
        strHTMLs.push(strArticle)
    }

    strHTML = strHTMLs.join('')

    const elGallery = document.querySelector('.img-gallery-grid')
    elGallery.innerHTML = strHTML
}

function onSelectImg(elImg) {
    const imgId = elImg.id
    setImg(imgId)
    displayEditor()
    renderMeme()
}


