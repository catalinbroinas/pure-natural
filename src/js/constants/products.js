
export const PRODUCT_CATEGORY = {
	PERFUME: "Parfum",
	DISINFECTANT: "Dezinfectant",
	AROMATHERAPY: "Aromaterapie",
	MOSQUITO_SPRAY: "Spray împotriva insectelor",
	MOSQUITO_BITE_BALSAM: "Balsam împotriva țânțarilor"
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

export const PRODUCT_TARGET_GROUP_LABEL = {
	[PRODUCT_TARGET_GROUP.MEN]: "Potrivit pentru bărbați",
	[PRODUCT_TARGET_GROUP.WOMEN]: "Potrivit pentru femei",
	[PRODUCT_TARGET_GROUP.ALL]: "General (Unisex)"
};

export const PRODUCT_TARGET_GROUP_ICONS = {
	[PRODUCT_TARGET_GROUP.MEN]: "fa-mars",
	[PRODUCT_TARGET_GROUP.WOMEN]: "fa-venus",
	[PRODUCT_TARGET_GROUP.ALL]: "fa-mars-and-venus"
};
