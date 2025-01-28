export const isAuth = (req, res, next) => {
  try {
    console.log("is auth");

    next();
  } catch (error) {
    console.log(error.message);
  }
};
