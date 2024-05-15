export interface Product {
    title: string;
    description: string;
    slug: string;
    image: string;
    position: "left" | "right";
    color: `#${string}`;
    slashColor: string;
}
