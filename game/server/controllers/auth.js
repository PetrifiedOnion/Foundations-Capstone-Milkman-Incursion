const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        console.log("username matches");
        const passIsGood = bcrypt.compareSync(password, users[i].passHash);
        if (passIsGood) {
          const userObjCopy = { ...users[i] };
          delete userObjCopy.passHash;
          res.status(200).send(userObjCopy);
          return;
        } else {
          res.status(400).send("Your information is invalid.");
        }
      }
    }
    res.status(400).send("Your information is invalid.");
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log("init: ", req.body);

    const salt = bcrypt.genSaltSync(5);
    const passHash = bcrypt.hashSync(req.body.password, salt);
    req.body.passHash = passHash;
    delete req.body.password;
    console.log("finl: ", req.body);

    users.push(req.body);
    res.status(200).send(req.body);
  },
};
