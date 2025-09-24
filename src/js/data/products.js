import images from "./productImages";

const products = [
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.intenseRomance.cardImage,
            modalImage: images.intenseRomance.modalImage
        },
        name: 'Intense Romance',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'women',
        composition: 'apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.flowerPower.cardImage,
            modalImage: images.flowerPower.modalImage
        },
        name: 'Flower Power',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'women',
        composition: 'apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.citricJoy.cardImage,
            modalImage: images.citricJoy.modalImage
        },
        name: 'Citric Joy',
        category: 'Parfum',
        price: 50,
        amount: 100,
        targetGroup: 'men',
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.noMosquitos.cardImage,
            modalImage: images.noMosquitos.modalImage
        },
        name: 'No Mosquitos',
        category: 'Spray anti-țânțari',
        price: 20,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.deepDisinfect.cardImage,
            modalImage: images.deepDisinfect.modalImage
        },
        name: 'Deep Disinfect',
        category: 'Dezinfectant',
        price: 30,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.aromatherapy.cardImage,
            modalImage: images.aromatherapy.modalImage
        },
        name: 'Difuzor automat aromaterapie',
        category: 'Aromaterapie',
        price: 60,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    }
];

export default products;
