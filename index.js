const { Console } = require("console");
const http = require("http");
const {getProducts, getProductById, postProduct, updateProductById, deleteProductById} = require('./controllers/productController')
const {getUsers, getUserById, postUser, updateUserById, deleteUserById} = require('./controllers/userController')
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    
    if (req.url.match(/\/product\/([0-9]+)/) && req.method === "PATCH") {
        //response headers
        return updateProductById(req, res)
    }
    if (req.url.match(/\/product\/([0-9]+)/) && req.method === "DELETE") {
        //response headers
        return deleteProductById(req, res)
    }
    if (req.url.match(/\/product\/([0-9]+)/) && req.method === "GET") {
        //response headers
        
        return getProductById(req, res)
    }
    if (req.url === "/product" && req.method === "POST") {
        //response headers
        return postProduct(req, res)
    }
    
    if (req.url === "/products" && req.method === "GET") {
        //response headers
        return getProducts(req, res)
    }


    if (req.url.match(/\/user\/([0-9]+)/) && req.method === "PATCH") {
        //response headers
        return updateUserById(req, res)
    }
    if (req.url.match(/\/user\/([0-9]+)/) && req.method === "DELETE") {
        //response headers
        return deleteUserById(req, res)
    }
    if (req.url.match(/\/user\/([0-9]+)/) && req.method === "GET") {
        //response headers
        
        return getUserById(req, res)
    }
    if (req.url === "/user" && req.method === "POST") {
        //response headers
        return postUser(req, res)
    }
    
    if (req.url === "/user" && req.method === "GET") {
        //response headers
        return getUsers(req, res)
    }
    // If no route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
})
server.listen(PORT, () => console.log(`server runnin on ${PORT}`))