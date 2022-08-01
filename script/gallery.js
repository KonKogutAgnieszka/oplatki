const photos = ['../img/gallery/AgaManiu.jpg',
'../img/gallery/AgaManiu2.jpg',
'../img/gallery/AgaManiu3.jpg',
'../img/gallery/EwelinaNestoruk1.jpg',
'../img/gallery/JoannaFortuńska1.jpg',
'../img/gallery/KasiaRobaszek.jpg',
'../img/gallery/MoskalIzabela.jpg',
'../img/gallery/MoskalIzabela2.jpg'
]

const photoDivs = [...document.querySelectorAll('.photo')];

function changePhoto(){
    for(let i = 0;i<photoDivs.length;i++){
        photoDivs[i].style.backgroundImage = `url(${photos[i]})`
    }
}

changePhoto()
