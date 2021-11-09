const clothes = [
    {
        id: 1,
        title: "ASYOU top",
        price: 19.00,
        image: "https://images.asos-media.com/products/asyou-tie-detail-cami-top-in-orange/200287085-1-orange?$n_640w$&wid=634&fit=constrain",
        description: "ASYOU tie detail cami top in orange",
        type: "top",
        gender: "Women",
        heart:false
    },
    {
        id: 2,
        title: "Pull&Bear shirt",
        price: 35.91,
        image: "https://images.asos-media.com/products/pullbear-oxford-shirt-in-blue/201468716-1-blue?$n_640w$&wid=634&fit=constrain",
        description: "Pull&Bear oxford shirt in blue",
        type: "shirt",
        gender: "Men",
        heart:false
    },
    {
        id: 3,
        title: "River Island jacket",
        price: 62.15,
        image: "https://images.asos-media.com/products/river-island-quilted-faux-leather-bomber-jacket-in-black/23683387-1-black?$n_640w$&wid=634&fit=constrain",
        description: "River Island quilted faux leather bomber jacket in black",
        type: "jacket",
        gender: "Women",
        heart:false
    },
    {
        id: 4,
        title: "Bershka pants",
        price: 48.00,
        image: "https://images.asos-media.com/products/bershka-organic-cotton-wide-leg-cargo-pant-in-beige/23566477-1-tan?$n_960w$&wid=952&fit=constrain",
        description: "Bershka organic cotton wide leg cargo pant in beige",
        type: "pants",
        gender: "Women",
        heart:false
    },
    {
        id: 5,
        title: "Adidas T-Shirt",
        price: 25.00,
        image: "https://images.asos-media.com/products/adidas-originals-essentials-t-shirt-in-dark-green/200982157-1-green?$n_960w$&wid=952&fit=constrain",
        description: "adidas Originals essentials T-shirt in dark green",
        type: "t-shirt",
        gender: "Men",
        heart:false
    },
    {
        id: 6,
        title: "ASOS dress",
        price: 26.00,
        image: "https://images.asos-media.com/products/asos-design-oversized-mini-smock-dress-with-dropped-waist-in-sage-green/22703277-1-sagegreen?$n_640w$&wid=634&fit=constrain",
        description: "ASOS DESIGN oversized mini smock dress with dropped waist in sage green",
        type: "dress",
        gender: "Women",
        heart:false
    }
]

export const fetchProducts = () => new Promise ((resolve, reject) => {
    try {
        resolve(clothes)
    } catch (error) {
        reject(error)
    }
})