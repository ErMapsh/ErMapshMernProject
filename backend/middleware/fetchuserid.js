const middleware = (req, res, next)=>{
    console.log("Middleware\n");
    next();
}

module.exports = middleware;