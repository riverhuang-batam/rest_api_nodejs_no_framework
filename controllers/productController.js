const { dataProduct } = require("../data");
const Utils = require("../utils");

const getProducts = async (req, res) => {
  try {
    const products = await Utils.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
const getProductById = async (req, res) => {
  try {
    const id = await req.url.split("/")[2];
    const product = await Utils.findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
};
const postProduct = async (req, res) => {
  try {
    const product = {
      id: 3,
      item: "Jam Tangan",
      price: "30"
    };
    const postProduct = await Utils.postProduct(product)
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(dataProduct));
  } catch (error) {
    console.log(error);
  }
};
const updateProductById = async (req, res) => {
    try {
        const id = await req.url.split("/")[2];
      const product = {
        id: 1,
        item: "Game Console",
        price: "90",
      };
      const updateProduct = await Utils.updateProductById(product)
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(dataProduct));
    } catch (error) {
      console.log(error);
    }
  };
const deleteProductById = async(req, res) => {
    try {
        const id = await req.url.split("/")[2];
        const product = await Utils.deleteProductById(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        if(typeof product !== "string"){
          res.end(JSON.stringify(dataProduct));
        }
        return res.end(product)
        } catch (error) {
        console.log(error);
    }
}
module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProductById,
  deleteProductById
};
