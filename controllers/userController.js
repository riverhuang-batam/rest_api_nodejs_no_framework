const { dataUser } = require("../data");
const Utils = require("../utils");

const getUsers = async (req, res) => {
  try {
    const users = await Utils.findAllUser();
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (req, res) => {
  try {
    const id = await req.url.split("/")[2];
    const users = await Utils.findByIdUser(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};
const postUser = async (req, res) => {
  try {
    const user = {
      id: 3,
      firstName: "test3",
      lastName: "Votttestner",
      role: "Customer",
    };
    const postUser = await Utils.postUser(user)
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.end(JSON.stringify(dataUser));
  } catch (error) {
    console.log(error);
  }
};
const updateUserById = async (req, res) => {
    try {
        const id = await req.url.split("/")[2];
      const user = {
        id: 1,
        firstName: "test6",
        lastName: "Votttestner",
        role: "Customer",
      };
      const updateUser = await Utils.updateUserById(user)
      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      res.end(JSON.stringify(dataUser));
    } catch (error) {
      console.log(error);
    }
  };
const deleteUserById = async(req, res) => {
    try {

        const id = await req.url.split("/")[2];
    const user = await Utils.deleteUserById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    if(typeof user !== "string"){
      return res.end(JSON.stringify(dataUser));
    }
    return res.end(user)
    } catch (error) {
    console.log(error);
    }
}
module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUserById,
  deleteUserById
};
