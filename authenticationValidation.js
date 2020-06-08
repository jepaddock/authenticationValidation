module.exports = exports = (req,res,next)=>{

    const request = require("request");

    //if the client no longer has a cookie in their headers, their session is not valid, and an error will be sent. Code execution stops here.
    if(!req.headers.cookie) return res.status(401).send("User session has expired. Please log in (you may need to refresh your page) to continue working.")

    //otherwise, the clients's cookie SID will be pulled and checked with Authenticator to get the user's session data
    var sessionKey = "connect.sid=s%3A" + ( req.headers.cookie.split("connect.sid=s%3A")[1] );
    request({
        "method" : "GET",   "url" : "http://localhost:3002/authenticator/api/userData",     "headers" : {"cookie":req.headers.cookie }
    },
    function(err,response,body){
        if(!err){ //as long as there were no errors in getting the client's data, their data will be added to their session with this app, in order to be used later
            req.session = JSON.parse(body)
            next() //code execution will continue here.
        }else{
            //otherwise, send an error to the client. Code execution will stop here.
            console.log("Error while getting user's Authenticator data:", err)
            return res.status(500).send("There was an error getting your session data. Please refresh and try again.")
        }
    })
}