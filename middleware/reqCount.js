let page_visits = {};
let visits = function (req, res, next) {
  let counter = page_visits[req.path];
  if(counter || counter === 0) {
    page_visits[req.path] = counter + 1;
  } else {
    page_visits[req.path] = 1;
  }
  // console.log(page_visits);
  req.page_visits = page_visits;
  next();
};

module.exports = visits;