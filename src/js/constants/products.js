
export const PRODUCT_CATEGORY = {
	PERFUME: "Parfum",
	DISINFECTANT: "Dezinfectant",
	AROMATHERAPY: "Aromaterapie",
	MOSQUITO_SPRAY: "Spray împotriva insectelor",
	MOSQUITO_BITE_BALSAM: "Balsam împotriva insectelor"
};

export const PRODUCT_DEFAULT_ICON = 'fa-leaf';

export const PRODUCT_CATEGORY_ICONS = {
	[PRODUCT_CATEGORY.PERFUME]: "fa-leaf",
	[PRODUCT_CATEGORY.DISINFECTANT]: "fa-pump-medical",
	[PRODUCT_CATEGORY.AROMATHERAPY]: "fa-spa",
	[PRODUCT_CATEGORY.MOSQUITO_SPRAY]: "fa-spray-can",
	[PRODUCT_CATEGORY.MOSQUITO_BITE_BALSAM]: "fa-spray-can",
};

export const PRODUCT_TARGET_GROUP = {
	MEN: "men",
	WOMEN: "women",
	ALL: "all"
};

export const PRODUCT_PACKAGE = {
	BOTTLE: 'Sticlă'
};

export const PRODUCT_DETAIL = {
	QUANTITY: {
		icon: 'fa-bottle-water',
		title: 'Cantitate'
	},

	TARGET_GROUP: {
		icon: {
			[PRODUCT_TARGET_GROUP.MEN]: 'fa-mars',
			[PRODUCT_TARGET_GROUP.WOMEN]: 'fa-venus',
			[PRODUCT_TARGET_GROUP.ALL]: 'fa-mars-and-venus'
		},
		title: 'Grup țintă',
		label: {
			[PRODUCT_TARGET_GROUP.MEN]: 'Potrivit pentru bărbați.',
			[PRODUCT_TARGET_GROUP.WOMEN]: 'Potrivit pentru femei.',
			[PRODUCT_TARGET_GROUP.ALL]: 'General (Unisex).'
		}
	},

	COMPOSITION: {
		icon: 'fa-leaf',
		title: 'Compoziție'
	},

	DESCRIPTION: {
		icon: 'fa-bolt',
		title: 'Descriere'
	}
};
