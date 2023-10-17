const {Registration, User} = require('../models/schema');



const Homepage = (req,res)=>{
    res.render('pages/Home')
}

const Locations =(req,res)=>{
    res.render('pages/locations')
}


const About =(req,res)=>{
    res.render('pages/about')
}

const Contact =(req,res)=>{
    res.render('pages/contact')
}

const Register =(req,res)=>{
    res.render('pages/register')
}

const signup_get = (req, res)=>{
    res.render('pages/signup');
}


const Register_post = async (req, res)=>{
    const body = req.body;
    body.age = parseInt(body.age);
    const newEntry = new Registration(body);
    newEntry.save()
    console.log("registered successfully");
    res.redirect('/register');
}


const signup_post = async (req, res) => {
    const {name, email, password} = req.body;
    
    try {
        const user = await User.create({ name: name, email: email, password: password});
        res.status(200).json({user: user._id});

    } catch(err) {
        res.status(400).json(errors);
    }
}

module.exports = {
    Homepage,
    Locations,
    About,
    Contact,
    Register,
    Register_post,
    signup_get,
    signup_post
};