const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const {JWT_SECRET} = require("./config/index");
const User = require("./models/user");

passport.use(new JWTStrategy({
    jwtFromRequest:ExtractJwt.fromHeader("authorization"),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {

        //Find users specified in Token. 
        const user = await User.findById(payload.sub);

        //If user does not exist, handle it
        if(!user) {
            return done(null, false);
        }
        //Otherwise, return the user
        done(null, user);

    } catch (error){
        done(error, false);
    }
}));