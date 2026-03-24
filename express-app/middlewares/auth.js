function auth(req, res, next) {
  const isAuth = req.query.auth ?? false;
  if (!isAuth) {
    res.status(401);
    res.send("Not authorized!");
  } else {
    next();
  }
}

module.exports = auth;
