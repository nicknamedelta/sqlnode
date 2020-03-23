const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    // find all users with:
    // email ends with '@domain.com',
    // street equals 'street_name',
    // techs start with 'tech_name'

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@domain.com"
        }
      },
      include: [
        { association: "addresses", where: { street: "street_name" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "tech_name%"
            }
          }
        }
      ]
    });

    return res.json(users);
  }
};
