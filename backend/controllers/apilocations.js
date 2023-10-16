const {Registration} = require('../models/schema');



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
    res.json({message: 'success'})
}

const Register =(req,res)=>{
    res.render('pages/register')
}


const Register_post = async (req, res)=>{
    const body = req.body;
    body.age = parseInt(body.age);
    const newEntry = new Registration(body);
    newEntry.save()
    console.log("registered successfully");
    res.redirect('/register');
}



module.exports = {
    Homepage,
    Locations,
    About,
    Contact,
    Register,
    Register_post
};