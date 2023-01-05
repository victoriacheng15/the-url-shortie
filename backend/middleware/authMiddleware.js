const jwt = require("jsonwebtoken")
const User = require("../models/user")

const protect = async (req, res, next) => {
  let token;

  const authorization = req.headers.authorization

  if(authorization?.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1]
      const decode = await jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findById(decode.id)

      if(!user) {
        return res.status(404).send("user not found")
      }

      next()
    } catch (error) {
      return res.status(401).send("unauthorized")
    }
  }
}

module.exports = protect;