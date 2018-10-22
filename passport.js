const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const LocalSrategy = require("passport-local");
const { ExtractJwt } = require("passport-jwt");
const {JWT_SECRET} = require("./config/index");
const User = require("./models/user");

//JSON WEB TOKEN STRATEGY

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

//LOCAL STRATEGY

passport.use(new LocalSrategy({
    usernameFiled: "email"
}, async (email, password, done) => {
    //Find the user given the email
    const user = await User.findOne({email}) ;
    
    //If not, handle it
    if(!user) {
        return done(null, false);
    }

    //Check if password is correct

    //If not, handle it


    //Otherwise, return the user


}));