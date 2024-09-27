const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, and so on
  const hour = now.getHours(); //  0 to 23

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(
      "The website is only available during working hours (Monday to Friday, from 9am to 5am)."
    );
  }
};

module.exports = { workingHoursMiddleware };
