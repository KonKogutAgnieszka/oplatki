const photos = ['../img/gallery/1.png',
'../img/gallery/2.png',
'../img/gallery/3.png',
'../img/gallery/4.png',
'../img/gallery/5.png',
]

const authors = ['Irena Luszczyk',
'Ewelina Puchalska',
'Anna Kopiec',
'Natalia Kowalska',
'Sylwia Regulska'
]

const photoDiv = document.querySelector('div.photo');
const photoSub = document.querySelector('.photo__sub');


let i = 0;

function changePhoto(){
    if(i<photos.length){
        photoDiv.style.backgroundImage = `url(${photos[i]})`;
        photoSub.textContent = `${authors[i]}`;
        i++
    }else{
        photoDiv.style.backgroundImage = `url(${photos[0]})`
        photoSub.textContent = `${authors[0]}`;
        i=1;
    }
}

setInterval(changePhoto,4000);