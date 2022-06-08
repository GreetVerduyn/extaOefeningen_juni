//let cards=document.getElementsByClassName("card");

//2é poging
let cards = [
    {
        name: 'butterfly',
        picture: 'media/butterfly.png',
        order: 1,
        turned: false,
    },
    {
        name: 'dog',
        picture: 'media/dog.png',
        order: 1,
        turned: false,
    },
    {
        name: 'dolphin',
        picture: 'media/dolphin.png',
        order: 1,
        turned: false,
    },
    {
        name: 'elephant',
        picture: 'media/elephant.png',
        order: 1,
        turned: false,
    },

];
let playCards = [...cards, ...cards].map((card, index) => {
    return {
        ...card,
        id: index
    }
});
let card1;
let card1Index;
let card2;
let card2Index;


console.log(playCards);
