const { validationResult } = require('express-validator');

class userController {

  static async createUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = errors.array();
      return res.status(400).json({ 
        status: 400, 
        error: error[0].msg 
      });
    }
  }
  // constructor() {
  //   this
  // }


}

module.exports = userController;