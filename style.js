const container1 = document.querySelector("#products-list-1");
const container2 = document.querySelector("#products-list-2");
const container3 = document.querySelector("#products-list-3");
const container4 = document.querySelector("#products-list-4");
const allProducts = [
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-1.jpg",
        title: "Soda Sparkling Water Maker (Rose Gold)",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        nameProduct: "Fresh vegetable",
        image: "img/product/product-2.jpg",
        title: "Mangosteen Organic From VietNamese",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-3.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-4.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-5.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-6.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-6.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
];
const freshMeat = [
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-7.jpg",
        title: "Soda Sparkling Water Maker (Rose Gold)",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-8.jpg",
        title: "Mangosteen Organic From VietNamese",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-9.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-10.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-11.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
    {
        nameProduct: "Fresh vegetable",
        image: "img/product/product-12.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
        price: "$ 56.00",
        salePrice: "$ 69.00",
        sale: "-50%",
    },
];
function returnCards(allProducts, container1) {
    allProducts.forEach((product) => {
        container1.innerHTML += `<div class="col-6 col-sm-4 col-md-4 col-lg-2">
        <a href="" class="card-product rounded-2">
            <div class="thumb">
                <img src="${product.image}" alt="" />
                <div class="sale">${product.sale}</div>
            </div>
            <div class="content">
                <p class="cate">${product.nameProduct}</p>
                <h3 class="title">${product.title}</h3>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <span>${product.price}</span>
                    <span>${product.salePrice}</span>
                </div>
            </div>
            <div class="info">
                <button type="button" class="btn btn-primary w-100 rounded-pill">Add to card</button>
                <ul>
                    <li>Type: Organic</li>
                    <li>MFG: August 4.2021</li>
                    <li>LIFE: 60 days</li>
                </ul>
            </div>
        </a>
    </div>`;
    });
}

returnCards(allProducts, container1);
returnCards(freshMeat, container2);
returnCards(allProducts, container3);
returnCards(freshMeat, container4);
let sv = {
    name: "An",
    age: "18",
};
console.log(sv.name);
