


const message = {
  message: "this is about page of csec astu bootcamp project",
};

 const aboutFunction = async  (req, res) => {
  await res.status(200).json(message);
 };




module.exports = aboutFunction