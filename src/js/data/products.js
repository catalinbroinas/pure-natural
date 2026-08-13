import {
    PRODUCT_CATEGORY,
    PRODUCT_TARGET_GROUP,
    PRODUCT_PACKAGE
} from "../constants/products";

import images from "./productImages";

const products = [
    // Intense Romance
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.intenseRomance.cardImage,
            modalImage: images.intenseRomance.modalImage
        },

        name: 'Intense Romance',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },

        targetGroup: PRODUCT_TARGET_GROUP.ALL,

        composition: {
            text: 'alcool din cereale, apă, uleiuri esențiale pure de portocală*, trandafir și geraniu.',
            note: 'ingredient bio/ecologic'
        },

        description: 'Un parfum seducător și rafinat, ce îmbină notele dulci de trandafir și geraniu cu prospețimea portocalei bio, dăruind eleganță și strălucire fiecărei clipe.'
    },

    // Flower Power
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.flowerPower.cardImage,
            modalImage: images.flowerPower.modalImage
        },

        name: 'Flower Power',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },

        targetGroup: PRODUCT_TARGET_GROUP.WOMEN,
        composition: {
            text: 'alcool din cereale, apă, uleiuri esențiale pure de trandafir, iasomie, geraniu și lavandă*.',
            note: 'ingredient bio/ecologic'
        },

        description: 'Un buchet floral bogat ce împletește delicatețea trandafirului și a iasomiei cu notele echilibrate de geraniu și lavandă bio, oferind un plus de rafinament și vitalitate în fiecare zi.'
    },

    // Citric Joy
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.citricJoy.cardImage,
            modalImage: images.citricJoy.modalImage
        },

        name: 'Citric Joy',
        category: PRODUCT_CATEGORY.PERFUME,
        price: 70,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },

        targetGroup: PRODUCT_TARGET_GROUP.MEN,

        composition: {
            text: 'alcool din cereale, apă, uleiuri esențiale pure de portocală*, bergamotă (fără bergapten), palmarosa*, vanilie și petitgrain*.',
            note: 'ingredient bio/ecologic'
        },

        description: 'O explozie efervescentă ce unește notele citrice radiante de portocală bio și bergamotă cu delicatețea palmarosei bio, dulceața vaniliei și profunzimea petitgrainului bio, aducând bună dispoziție și un zâmbet luminos pe chipul tău.'
    },

    // No Mosquitos
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.noMosquitos.cardImage,
            modalImage: images.noMosquitos.modalImage
        },

        name: 'No Mosquitos',
        category: PRODUCT_CATEGORY.MOSQUITO_SPRAY,
        price: 40,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },
    },

    // Deep Disinfect
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.deepDisinfect.cardImage,
            modalImage: images.deepDisinfect.modalImage
        },

        name: 'Deep Disinfect',
        category: PRODUCT_CATEGORY.DISINFECTANT,
        price: 50,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },
    },

    // No Mosquitos - Ediție limitată
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.noMosquitosSummer.cardImage,
            modalImage: images.noMosquitosSummer.modalImage
        },

        name: 'No Mosquitos - Ediție limitată',
        category: PRODUCT_CATEGORY.MOSQUITO_BITE_BALSAM,
        price: 60,

        quantity: {
            amount: 100,
            unit: 'ml',
            package: PRODUCT_PACKAGE.BOTTLE
        },
    },

    // Difuzor automat aromaterapie
    {
        id: crypto.randomUUID(),

        image: {
            cardImage: images.aromatherapy.cardImage,
            modalImage: images.aromatherapy.modalImage
        },

        name: 'Difuzor automat aromaterapie',
        category: PRODUCT_CATEGORY.AROMATHERAPY,
        price: 60,

        description: 'Difuzor de aromaterapie.'
    }
];

export default products;
