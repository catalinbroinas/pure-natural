import images from "./productImages";

const products = [
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.intenseRomance.cardImage },
        name: 'Intense Romance',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'femei',
        composition: 'apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.flowerPower.cardImage },
        name: 'Flower Power',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'femei',
        composition: 'apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.citricJoy.cardImage },
        name: 'Citric Joy',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'bărbați',
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.noMosquitos.cardImage },
        name: 'No Mosquitos',
        category: 'Spray anti-țânțari',
        price: 20,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.deepDisinfect.cardImage },
        name: 'Deep Disinfect',
        category: 'Dezinfectant',
        price: 30,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: { cardImage: images.aromatherapy.cardImage },
        name: 'Difuzor automat aromaterapie',
        category: 'Aromaterapie',
        price: 60,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    }
];

export default products;
