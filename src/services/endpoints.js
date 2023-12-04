const URL_BASE = 'https://miniback-products-taller-refuerzo.onrender.com';

const endpoints = {
    products: `${URL_BASE}/products`,
    productById: (id) => `${URL_BASE}/products/${id}`
}

export default endpoints;