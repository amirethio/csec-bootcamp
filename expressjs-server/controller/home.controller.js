const message = {
  message: "wellcome to this page this is home page",
};

const home_controller = (req, res, next) => {
  res.status(200).json(message);
};

module.exports = home_controller;
