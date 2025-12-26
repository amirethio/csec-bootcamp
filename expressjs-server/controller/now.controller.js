const dynamic_content = (req, res) => {
  res.status(200).json({
    message: `now  is ${new Date()}`,
  });
};
const repeat_json = (req, res) => {
  message = req.body.message;
  res.status(200).json({
    message,
    source: "backend",
  });
};

module.exports = { dynamic_content, repeat_json };
