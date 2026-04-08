export const PERFUME_CATEGORY_DEFINITIONS = [
    { id: 1, name: "Ahumados", slug: "ahumados" },
    { id: 2, name: "Jamones", slug: "jamones" },
    { id: 3, name: "Chorizos", slug: "chorizos" },
    { id: 4, name: "Lácteos", slug: "lacteos" },
    { id: 5, name: "Otros", slug: "otros" },
];

export const PERFUME_CATEGORY_NAMES = PERFUME_CATEGORY_DEFINITIONS.map((category) => category.name);

const normalizeCategoryValue = (value = "") =>
    String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");

export const CATEGORY_ID_TO_NAME = PERFUME_CATEGORY_DEFINITIONS.reduce(
    (acc, category) => ({ ...acc, [category.id]: category.name }),
    {
        6: "Ahumados",
    }
);

const CATEGORY_ALIASES = {
    1: [
        "Ahumados",
        "Fragancias de Hombre",
        "Masculinos",
        "Perfumes masculinos",
        "Perfumes Masculinos",
        "Vapes Desechables",
        "Perfumes",
    ],
    2: [
        "Jamones",
        "Fragancias de Mujer",
        "Femeninos",
        "Pods Recargables",
    ],
    3: [
        "Chorizos",
        "Productos Karseell",
        "Unisex",
        "Líquidos",
        "Liquidos",
    ],
    4: [
        "Lácteos",
        "Lacteos",
        "Cremas",
        "Resistencias",
    ],
    5: [
        "Otros",
        "Body Splash Victoria Secret",
        "Body splash victoria secret",
        "Perfumes de Diseñador",
        "Perfumes de Disenador",
        "Celulares",
    ],
};

export const CATEGORY_NAME_TO_ID = Object.entries(CATEGORY_ALIASES).reduce((acc, [id, names]) => {
    names.forEach((name) => {
        acc[name] = Number(id);
    });
    return acc;
}, {});

export const LEGACY_CATEGORY_NAME_TO_CURRENT = Object.entries(CATEGORY_ALIASES).reduce((acc, [id, names]) => {
    const currentName = CATEGORY_ID_TO_NAME[Number(id)];
    names.forEach((name) => {
        acc[name] = currentName;
    });
    return acc;
}, {});

export const SLUG_TO_NAME = PERFUME_CATEGORY_DEFINITIONS.reduce(
    (acc, category) => ({ ...acc, [category.slug]: category.name }),
    {
        "perfumes-masculinos": "Ahumados",
        femeninos: "Jamones",
        unisex: "Chorizos",
        "vapes-desechables": "Ahumados",
        "pods-recargables": "Jamones",
        liquidos: "Chorizos",
        resistencias: "Lácteos",
        celulares: "Otros",
        perfumes: "Ahumados",
    }
);

export const SLUG_TO_ID = PERFUME_CATEGORY_DEFINITIONS.reduce(
    (acc, category) => ({ ...acc, [category.slug]: category.id }),
    {
        "perfumes-masculinos": 1,
        femeninos: 2,
        unisex: 3,
        "vapes-desechables": 1,
        "pods-recargables": 2,
        liquidos: 3,
        resistencias: 4,
        celulares: 5,
        perfumes: 1,
    }
);

export const NAME_TO_SLUG = Object.entries(CATEGORY_ALIASES).reduce((acc, [id, names]) => {
    const slug = PERFUME_CATEGORY_DEFINITIONS.find((category) => category.id === Number(id))?.slug;
    if (!slug) return acc;

    names.forEach((name) => {
        acc[name] = slug;
    });
    return acc;
}, {});

export const mapCategoryIdFromName = (value = "") => {
    const normalized = normalizeCategoryValue(value);

    if (!normalized) return 1;

    if (normalized.includes("ahum")) return 1;
    if (normalized.includes("jamon")) return 2;
    if (normalized.includes("choriz")) return 3;
    if (normalized.includes("lacteo") || normalized.includes("crema")) return 4;
    if (normalized.includes("otro")) return 5;

    if (normalized.includes("disen")) return 5;
    if (normalized.includes("body") || normalized.includes("victoria") || normalized.includes("celular")) return 5;
    if (normalized.includes("mascul") || normalized.includes("vapes") || normalized.includes("perfume")) return 1;
    if (normalized.includes("femen") || normalized.includes("pod")) return 2;
    if (normalized.includes("unisex") || normalized.includes("karseell") || normalized.includes("liquido")) return 3;
    if (normalized.includes("resistencia")) return 4;

    return 1;
};

export const getDisplayCategoryName = (product) => {
    const byId = CATEGORY_ID_TO_NAME[Number(product?.category_id)];
    if (byId) return byId;

    const raw = String(product?.category_name || "").trim();
    if (!raw) return "Sin categoría";

    return LEGACY_CATEGORY_NAME_TO_CURRENT[raw] || raw;
};
