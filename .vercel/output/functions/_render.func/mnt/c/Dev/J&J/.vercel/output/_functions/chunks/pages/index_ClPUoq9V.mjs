/* empty css                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, d as addAttribute, i as renderTransition, e as createAstro } from '../astro_C_NXfn_E.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as PRODUCTS, S as SOCIAL_MEDIA, $ as $$Main } from './_slug__BZ1wpYwi.mjs';
import 'clsx';
/* empty css                          */

const $$ArrowDown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="scale-[2.5]"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M12 5v14M18 13l-6 6M6 13l6 6"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/ArrowDown.astro", void 0);

const $$BtnScrollHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="nextSection" class="text-white bg-gray-600/75 w-20 h-20 grid place-content-center rounded-full animate-fade-in-up animate-duration-1000 animate-delay-[1500ms]"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </button> `;
}, "/mnt/c/Dev/J&J/src/components/BtnScrollHome.astro", void 0);

const $$Leafs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/assets/leafs-1.webp" class="animate-fade-in absolute top-0 w-full animate-duration-1000" draggable="false"> <img src="/assets/leafs-2.webp" class="animate-fade-in absolute bottom-0 w-full animate-duration-1000" draggable="false"> <img src="/assets/leafs-3.webp" class="animate-fade-in absolute -left-28 md:-left-16 lg:left-0 h-full animate-duration-1000" draggable="false"> <img src="/assets/leafs-4.webp" class="animate-fade-in absolute -right-28 md:-right-16 lg:right-0 h-full animate-duration-1000" draggable="false">`;
}, "/mnt/c/Dev/J&J/src/components/Leafs.astro", void 0);

const $$Presentation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-green-pastel w-full h-[100dvh] grid place-content-center relative overflow-hidden"> <div class="z-[11] flex flex-col gap-4 mb-10"> <img src="/assets/logo.webp" alt="Jelly and Jelly main logo." class="w-[25rem] mx-auto animate-slide-up-fade animate-duration-1000 animate-delay-500" draggable="false"> <h1 class="-mt-10 text-white text-5xl md:text-6xl text-center animate-slide-up-fade animate-duration-1000 animate-delay-1000 font-pacifico">
Jelly and Jelly
</h1> <h2 class="mx-auto max-w-[20ch] md:max-w-[25ch] lg:max-w-full text-balance text-white text-3xl text-center animate-slide-up-fade animate-duration-1000 animate-delay-1000">
La empresa de mermeladas lider en el mercado
</h2> </div> <div class="w-full grid place-content-center mt-20 z-[11]"> ${renderComponent($$result, "BtnScrollHome", $$BtnScrollHome, {})} </div> ${renderComponent($$result, "Leafs", $$Leafs, {})} </section>`;
}, "/mnt/c/Dev/J&J/src/sections/Presentation.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="p-8 py-32 flex flex-col gap-12"> <h2 class="font-pacifico text-5xl text-center">Nuestra Mision</h2> <p class="text-2xl max-w-[35ch] md:max-w-[60ch] mx-auto">
La misión de J&J es llevar alegría a través del sabor con mermeladas naturales y deliciosas.
        Se comprometen a ofrecer placer gastronómico, tradición artesanal, conexión con la
        naturaleza, satisfacción del cliente y calidad fresca en cada frasco.
</p> </section>`;
}, "/mnt/c/Dev/J&J/src/sections/Home.astro", void 0);

const $$Astro = createAstro();
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
  const { title, description, image, color, slug, position } = Astro2.props.product;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${slug}`, "href")}> <article class="relative w-full text-white hover:-translate-y-1 hover:brightness-95 transition-all duration-300 ease-in-out"> <div class="w-full h-20 [clip-path:polygon(0_50%,_0_100%,_100%_100%);] -mt-8"${addAttribute(`
                background-color: ${color};
            `, "style")}></div> <main${addAttribute(`
                w-full min-h-[20rem] p-8 flex flex-col md:flex-row justify-center items-center gap-8
                ${position === "right" ? "md:flex-row-reverse" : ""}
            `, "class")}${addAttribute(`background-color: ${color};`, "style")}> <div class="flex flex-col gap-4 items-center"> <h2 class="text-3xl font-pacifico"${addAttribute(renderTransition($$result, "ftjgmgqq", "", `title ${slug} fade`), "data-astro-transition-scope")}> ${title} </h2> <p class="max-w-[35ch] text-justify"${addAttribute(renderTransition($$result, "caxtuobh", "", `description ${slug} fade`), "data-astro-transition-scope")}> ${description} </p> </div> <img${addAttribute(`/products/${image}`, "src")}${addAttribute(`Foto del producto ${title}`, "alt")} class="w-80 aspect-square object-cover rounded-lg"${addAttribute(renderTransition($$result, "jls2odpg", "", `image ${slug} fade`), "data-astro-transition-scope")}> </main> <div class="w-full h-20 [clip-path:polygon(0_0,_100%_50%,_100%_0);] -mb-8"${addAttribute(`background-color: ${color};`, "style")}></div> </article> </a>`;
}, "/mnt/c/Dev/J&J/src/components/Product.astro", "self");

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col"> ${PRODUCTS.map((product) => renderTemplate`${renderComponent($$result, "Product", $$Product, { "product": product })}`)} </section>`;
}, "/mnt/c/Dev/J&J/src/sections/Products.astro", void 0);

const $$Separator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<hr class="w-[75%] my-8 mx-auto border-b-2 border-[#383c42]">`;
}, "/mnt/c/Dev/J&J/src/components/Separator.astro", void 0);

const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/Facebook.astro", void 0);

const $$TikTok = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M21 7.917v4.034A9.948 9.948 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917z"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/TikTok.astro", void 0);

const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/Twitter.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/Phone.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path><path d="m3 7 9 6 9-6"></path></svg>`;
}, "/mnt/c/Dev/J&J/src/icons/Mail.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-center my-24 flex flex-col justify-center items-center"> <h2 class="font-pacifico text-5xl text-center mb-4">Contacto</h2> <span class="flex gap-2 hover:underline text-xl"> ${renderComponent($$result, "Phone", $$Phone, {})} <h4 class="font-pacifico font-semibold">Telefono:</h4> <a${addAttribute(SOCIAL_MEDIA.phone, "href")}>+52-233-445-7890</a> </span> <span class="flex gap-2 hover:underline text-xl"> ${renderComponent($$result, "Email", $$Mail, {})} <h4 class="font-pacifico font-semibold">Email:</h4> <a${addAttribute(SOCIAL_MEDIA.email, "href")}>jellyandjellycompany@gmail.com</a> </span> ${renderComponent($$result, "Separator", $$Separator, {})} <h3 class="font-pacifico text-2xl text-center mb-6">Nuestras redes sociales:</h3> <ul class="flex justify-center gap-4 text-2xl"> <li> <a${addAttribute(SOCIAL_MEDIA.facebook, "href")} target="_blank" rel="noopener noreferrer" class="bg-gray-500 text-white scale-110 w-10 h-10 rounded-full grid place-items-center hover:brightness-90 transition-all duration-300 ease-in-out"> ${renderComponent($$result, "Facebook", $$Facebook, {})} </a> </li> <li> <a${addAttribute(SOCIAL_MEDIA.tiktok, "href")} target="_blank" rel="noopener noreferrer" class="bg-gray-500 text-white scale-110 w-10 h-10 rounded-full grid place-items-center hover:brightness-90 transition-all duration-300 ease-in-out"> ${renderComponent($$result, "TikTok", $$TikTok, {})} </a> </li> <li> <a${addAttribute(SOCIAL_MEDIA.twitter, "href")} target="_blank" rel="noopener noreferrer" class="bg-gray-500 text-white scale-110 w-10 h-10 rounded-full grid place-items-center hover:brightness-90 transition-all duration-300 ease-in-out"> ${renderComponent($$result, "Twitter", $$Twitter, {})} </a> </li> </ul> </section>`;
}, "/mnt/c/Dev/J&J/src/sections/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Presentation", $$Presentation, {})} ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Separator", $$Separator, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/mnt/c/Dev/J&J/src/pages/index.astro", void 0);

const $$file = "/mnt/c/Dev/J&J/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
