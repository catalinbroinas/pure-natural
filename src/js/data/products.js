import {
    PRODUCT_CATEGORY,
    PRODUCT_TARGET_GROUP
} from "../constants/products";

import images from "./productImages";

const products = [
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.intenseRomance.cardImage,
            modalImage: images.intenseRomance.modalImage
        },
        name: 'Intense Romance',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,
        amount: 100,
        targetGroup: PRODUCT_TARGET_GROUP.ALL,
        composition: 'alcool din cereale, apă, uleiuri esențiale pure de portocală*, trandafir și geraniu. *ingredient bio/ecologic',
        description: 'Primul produs lansat din pasiune pentru ingrediente curate. Un parfum seducător și rafinat, ce îmbină notele dulci de trandafir și geraniu cu prospețimea portocalei bio, dăruind eleganță și strălucire fiecărei clipe.'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.flowerPower.cardImage,
            modalImage: images.flowerPower.modalImage
        },
        name: 'Flower Power',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,
        amount: 100,
        targetGroup: PRODUCT_TARGET_GROUP.WOMEN,
        composition: 'alcool din cereale, apă, uleiuri esențiale pure de trandafir, iasomie, geraniu și lavandă*. *ingredient bio/ecologic',
        description: 'Al doilea parfum din gama Pure Natural. Un buchet floral bogat ce împletește delicatețea trandafirului și a iasomiei cu notele echilibrate de geraniu și lavandă bio, oferind un plus de rafinament și vitalitate în fiecare zi.'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.citricJoy.cardImage,
            modalImage: images.citricJoy.modalImage
        },
        name: 'Citric Joy',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,
        amount: 100,
        targetGroup: PRODUCT_TARGET_GROUP.MEN,
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
        category: PRODUCT_CATEGORY.MOSQUITO_SPRAY,
        price: 40,
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
        category: PRODUCT_CATEGORY.DISINFECTANT,
        price: 50,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    },
    {
        id: crypto.randomUUID(),
        image: {
            cardImage: images.noMosquitosSummer.cardImage,
            modalImage: images.noMosquitosSummer.modalImage
        },
        name: 'No Mosquitos - Balsam',
        category: PRODUCT_CATEGORY.MOSQUITO_BITE_BALSAM,
        price: 60,
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
        category: PRODUCT_CATEGORY.AROMATHERAPY,
        price: 60,
        amount: 100,
        composition: 'Apă, uleiuri esențiale de trandafir, lavandă și portocale',
        description: 'Un parfum floral-energizant ce aduce prospețime și eleganță în rutina ta zilnică'
    }
];

export default products;
