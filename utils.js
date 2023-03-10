const {dataProduct, dataUser} = require('./data')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(dataProduct)
    })
}
function findById(productId) {
    return new Promise((resolve, reject) => {
        resolve(dataProduct.find(user => user.id == productId ))
    })
}
function postProduct(createProductData) {
    return new Promise((resolve, reject) => {
        resolve(dataProduct.push(createProductData))
    })
}
function updateProductById(product) {
    return new Promise((resolve, reject) => {
        const indexDataToUpdate = dataProduct.findIndex(data => data.id == product.id)
        dataProduct[indexDataToUpdate] = product;
        resolve(dataProduct)
    })
}
function deleteProductById(productId) {
    return new Promise((resolve, reject) => {
        const indexDataToRemove = dataProduct.findIndex(data => data.id == productId)
        if (indexDataToRemove !== -1 ){
            const deletedProduct = dataProduct.splice(indexDataToRemove, 1)
            resolve(deletedProduct)
        }
        return resolve("productId not found")
    })
}
function findAllUser() {
    return new Promise((resolve, reject) => {
        resolve(dataUser)
    })
}
function findByIdUser(userId) {
    return new Promise((resolve, reject) => {
        resolve(dataUser.find(user => user.id == userId ))
    })
}
function postUser(createUserData) {
    return new Promise((resolve, reject) => {
        resolve(dataUser.push(createUserData))
    })
}
function updateUserById(user) {
    return new Promise((resolve, reject) => {
        const indexDataToUpdate = dataUser.findIndex(data => data.id == user.id)
        dataUser[indexDataToUpdate] = user;
        resolve(dataUser)
    })
}
function deleteUserById(userId) {
    return new Promise((resolve, reject) => {
        const indexDataToRemove = dataUser.findIndex(data => data.id == userId)
        if (indexDataToRemove !== -1 ){
            const deletedUser = dataUser.splice(indexDataToRemove, 1)
            resolve(deletedUser)
        }
        return resolve("userId not found")
    })
}
module.exports = {
    findAll,
    findById,
    postProduct,
    deleteProductById,
    updateProductById,
    findAllUser,
    findByIdUser,
    postUser,
    deleteUserById,
    updateUserById
}