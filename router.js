function route( handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname]();
  } else {
    console.log("NO request handler found for " + pathname);
    return "404 shit!"
  }
}

exports.route = route;
