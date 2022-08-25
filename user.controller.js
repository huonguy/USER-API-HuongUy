const sequelize = require("./db_connect");
const initModels = require("./models/init-models");
var models = initModels(sequelize);

const getUserDetails = async (req, res) => {
  const { nickname } = req.params;

  try {
    const user = await models.users.findOne({
      where: {
        nickname,
      },
    });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not existed!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await models.users.create(req.body);

    res.status(201).send({
      message: "Register successfully!",
      status_code: 201,
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const updateUser = async (req, res) => {
  const { email } = req.params;
  const { nickname, password, confirm_password, phone, country } = req.body;

  try {
    let existedUsers = await models.users.findOne({
      where: {
        nickname,
      },
    });

    if (existedUsers) {
      existedUsers.password = password;
      existedUsers.confirm_password = confirm_password;
      existedUsers.phone = phone;
      existedUsers.country = country;

      await existedUsers.save();

      res.status(200).send({
        message: "Update successfully!",
        status_code: 200,
        success: true,
        user: existedUsers,
      });
    } else {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { nickname, password } = req.body;
  try {
    const user = await models.users.findOne({
      where: {
        nickname,
        password,
      },
    });

    if (user != null) {
      res.status(200).send({
        message: "Login successfully!",
        status_code: 200,
        success: true,
        user,
      });
    } else {
      res.status(401).send({
        message: "Login failed. Please try again!",
        status_code: 404,
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getUserDetails,
  createUser,
  updateUser,
  login,
};
