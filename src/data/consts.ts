import type { Product } from "@/types";

export const TITLE_PAGE = "Jelly and Jelly";
export const DESCRIPTION_PAGE =
    "Jelly and Jelly es empresa de mermeladas artesanales con ingredientes naturales y sin conservantes artificiales que busca llevar a tu mesa los sabores de la infancia.";
export const SLOGAN = "Sabores de la infanciaLa mejor mermelada al alcance de tus manos.";

export const SOCIAL_MEDIA = {
    email: "mailto:jellyandjellycompany@gmail.com",
    phone: "tel:+522334457890",
    facebook: "https://www.facebook.com/share/JdGPRXdaptQfurGC/?mibextid=qi2Omg",
    twitter: "https://twitter.com/UnBittenKitten_",
    tiktok: "https://www.tiktok.com/@jelly.and.jelly.c"
};

export const PRODUCTS = [
    {
        title: "Mermelada de Fresa",
        description:
            "La mermelada de fresa es una delicia llena de la dulzura natural de las fresas maduras. Es totalmente saludable, sin conservantes artificiales ni colorantes. Perfecta para un desayuno nutritivo o como un dulce capricho saludable.",
        slug: "mermelada-de-fresa",
        image: "fresa.webp",
        position: "left",
        color: "#D91847"
    },
    {
        title: "Mermelada de piña",
        description:
            "La mermelada de piña es un manjar tropical. Es completamente saludable, sin aditivos artificiales ni colorantes. Ideal para un desayuno energizante o como un delicioso antojo saludable. ¡Pruébala y disfruta del sabor del trópico!",
        slug: "mermelada-de-pina",
        image: "piña.webp",
        position: "right",
        color: "#F8AC0B"
    },
    {
        title: "Mermelada de sandia",
        description:
            "La mermelada de sandía es un festín veraniego, dulce y refrescante. Sin aditivos, es un antojo saludable. ¡Disfruta del sabor del verano!",
        slug: "mermelada-de-sandia",
        image: "sandia.webp",
        position: "left",
        color: "#FD4319"
    }
] as Product[];
