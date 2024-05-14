import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,tsx}"],
    theme: {
        extend: {
            colors: {
                "red-pastel": "#D91847",
                "yellow-pastel": "#F8AC0B",
                "green-pastel": "#53C589",
                "orange-pastel": "#FD4319",
                "blue-pastel": "#24A7F0",
                background: "#FADDE2"
            },
            fontFamily: {
                pacifico: [
                    "Pacifico",
                    "Inter",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "'Segoe UI'",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "'Open Sans'",
                    "'Helvetica Neue'",
                    "sans-serif"
                ],
                inter: [
                    "Inter",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "'Segoe UI'",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "'Open Sans'",
                    "'Helvetica Neue'",
                    "sans-serif"
                ]
            }
        }
    },
    plugins: [animations]
};
