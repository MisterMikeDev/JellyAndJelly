/* empty css                           */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot, i as renderTransition } from '../astro_C_NXfn_E.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/mnt/c/Dev/J&J/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center justify-center gap-2 p-8 bg-green-pastel text-white text-center"> <main class="flex items-center justify-center gap-2"> <img src="/assets/logo.webp" alt="Logo de J&J" class="w-56 aspect-square"> <p class="max-w-xs text-balance text-xl">
La empresa de mermeladas J&J espera que sus productos cumplan tus expetativas.
</p> </main> <small class="text-lg">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} J&J. Todos los derechos reservados.
</small> </footer>`;
}, "/mnt/c/Dev/J&J/src/components/Footer.astro", void 0);

const TITLE_PAGE = "Jelly and Jelly";
const DESCRIPTION_PAGE = "Jelly and Jelly es empresa de mermeladas artesanales con ingredientes naturales y sin conservantes artificiales que busca llevar a tu mesa los sabores de la infancia.";
const SOCIAL_MEDIA = {
  email: "mailto:jellyandjellycompany@gmail.com",
  phone: "tel:+522334457890",
  facebook: "https://www.facebook.com/share/JdGPRXdaptQfurGC/?mibextid=qi2Omg",
  twitter: "https://twitter.com/UnBittenKitten_",
  tiktok: "https://www.tiktok.com/@jelly.and.jelly.c"
};
const PRODUCTS = [
  {
    title: "Mermelada de Fresa",
    description: "La mermelada de fresa es una delicia llena de la dulzura natural de las fresas maduras. Es totalmente saludable, sin conservantes artificiales ni colorantes. Perfecta para un desayuno nutritivo o como un dulce capricho saludable.",
    slug: "mermelada-de-fresa",
    image: "fresa.webp",
    position: "left",
    color: "#D91847",
    slashColor: "217,24,71"
  },
  {
    title: "Mermelada de piña",
    description: "La mermelada de piña es un manjar tropical. Es completamente saludable, sin aditivos artificiales ni colorantes. Ideal para un desayuno energizante o como un delicioso antojo saludable. ¡Pruébala y disfruta del sabor del trópico!",
    slug: "mermelada-de-pina",
    image: "piña.webp",
    position: "right",
    color: "#F8AC0B",
    slashColor: "248,172,11"
  },
  {
    title: "Mermelada de sandia",
    description: "La mermelada de sandía es un festín veraniego, dulce y refrescante. Sin aditivos, es un antojo saludable. ¡Disfruta del sabor del verano!",
    slug: "mermelada-de-sandia",
    image: "sandia.webp",
    position: "left",
    color: "#FD4319",
    slashColor: "253,67,25"
  }
];

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-hsp6otuf> <head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-hsp6otuf": true })}<meta charset="utf-8"><link rel="icon" type="image/webp" href="/assets/logo.webp"><meta name="viewport" content="width=device-width"><title>${TITLE_PAGE}</title><meta name="description"${addAttribute(DESCRIPTION_PAGE, "content")}><meta name="author" content="Diego Emmanuel Rodriguez Ruvalcaba"><meta name="robots" content="index, follow"><meta property="og:title"${addAttribute(TITLE_PAGE, "content")}><meta property="og:description"${addAttribute(DESCRIPTION_PAGE, "content")}><meta property="og:image" content="/assets/logo.webp"><meta property="og:url" content="https://mrmikedev.vercel.app"><meta property="og:type" content="website"><meta property="og:site_name" content="MrMikeDev"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@_MrMikeDev"><meta name="twitter:creator" content="@_MrMikeDev"><meta name="twitter:title"${addAttribute(TITLE_PAGE, "content")}><meta name="twitter:description"${addAttribute(DESCRIPTION_PAGE, "content")}><meta name="twitter:image" content="/assets/logo.webp"><link rel="preload" href="/fonts/Inter.ttf" as="font" type="font/ttf"><link rel="preload" href="/fonts/Pacifico.ttf" as="font" type="font/ttf"><link rel="preload" href="/assets/logo.webp" as="image" type="image/webp"><link rel="preload" href="/assets/leafs-1.webp" as="image" type="image/webp"><link rel="preload" href="/assets/leafs-2.webp" as="image" type="image/webp"><link rel="preload" href="/assets/leafs-3.webp" as="image" type="image/webp"><link rel="preload" href="/assets/leafs-4.webp" as="image" type="image/webp">${renderHead()}</head> <body class="font-inter bg-background" data-astro-cid-hsp6otuf> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-hsp6otuf": true })} </body></html>`;
}, "/mnt/c/Dev/J&J/src/layouts/Main.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  const product = PRODUCTS.find((product2) => product2.slug === slug);
  if (!product) {
    return {
      status: 404
    };
  }
  const { title, description, image } = product;
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full h-[100dvh] flex flex-col items-center justify-center gap-8"> <h2 class="text-3xl font-pacifico"${addAttribute(renderTransition($$result2, "viflc3s2", "", `title ${slug} fade`), "data-astro-transition-scope")}> ${title} </h2> <p class="max-w-[35ch] text-justify"${addAttribute(renderTransition($$result2, "7ul4ve5c", "", `description ${slug} fade`), "data-astro-transition-scope")}> ${description} </p> <img${addAttribute(`/products/${image}`, "src")}${addAttribute(`Foto del producto ${title}`, "alt")} class="w-80 aspect-square object-cover rounded-lg"${addAttribute(renderTransition($$result2, "sejwdkfc", "", `image ${slug} fade`), "data-astro-transition-scope")}> <a href="/" class="text-blue-500 underline"${addAttribute(renderTransition($$result2, "kymhpjlu", "", `back ${slug} fade`), "data-astro-transition-scope")}>
Volver al inicio
</a> <!-- <div
            class="absolute inset-0 z-[-1] opacity-50 w-full h-full"
            style="background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(255,0,0,1) 100%);"
        >
        </div> --> </main> ` })}`;
}, "/mnt/c/Dev/J&J/src/pages/[slug].astro", "self");

const $$file = "/mnt/c/Dev/J&J/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, PRODUCTS as P, SOCIAL_MEDIA as S, _slug_ as _ };
