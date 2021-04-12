const database = {
    fish: [
        {
            name: "bob",
            imgae: "https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg",
            species: "sponge",
            length: 3,
            location: "pineapple",
            food: "krabby patty",
        },
        {
            name: "Patrick",
            image: "https://i.pinimg.com/originals/62/80/56/6280566a11e6cb4c46dd8843e6ecfd40.jpg",
            species: "Starfish",
            length: 5,
            location: "Rock",
            food: "Anything",
        },
        {
            name: "Mr. Krabs",
            image: "https://nickelodeonuniverse.com/wp-content/uploads/Mr.Krabs_.png",
            species: "Crab",
            length: 4,
            location: "Ship",
            food: "money",
        }
    ]
}

export function createList (fishObjects){
    return fishObjects;
}

console.log (createList);