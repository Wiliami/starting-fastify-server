import { products } from '../db.js';

async function Products(fastify, options) {
    fastify.get('/products', (req, reply) => {
        reply.view('products' , { products });
    })
}

export default Products;