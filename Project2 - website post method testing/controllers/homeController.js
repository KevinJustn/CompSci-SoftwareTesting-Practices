
// homecController

const express = require('express');
const router = express.Router();

/* GET home page. */


var users = [
    {
        name: "John",
        gender: "male"
    }
];
router.showHome = (req, res, next) => {
    res.render('index', { title: 'myProject in Project1A' });
  };
   

router.showUsers = (req, res) => {
    res.render("users", {
        allUsers: users, title: "Users List"
    });
};

router.addUsers = (req, res) => {
    console.log("in homeController addUser");
    var newuserName = req.body.name;
    console.log("name " + newuserName);
    var newuserGender = req.body.gender;

    users.push({name: newuserName, gender: newuserGender});
    
    res.render("users", {
        allUsers: users, title: "Users List"
    });
};

var findUser = (userName) => {
    let i = 0;
   
    for (i=0; i < users.length; i++) {
        console.log("name" + users[i].name, 'i = ' + i);
        if (users[i].name === userName) {
           
            console.log("found index: " + i);
            break;
        }
       
    }
    console.log("index: " + i);
    if (i >= users.length)
      return -1;
    else
      return i;
}
router.deleteUsers = (req, res) => { 
    console.log("in homeController deleteUser - test delete ");
    var userName = req.body.name;
    
    console.log("name " + userName);
    var userIndex = findUser(userName);
    console.log('userIndex: ' + userIndex);
    if (userIndex != -1) {
        users.splice(userIndex,1) //remove the element in users[userIndex]
  
        //res.send(userName + ' deleted');
        res.render("users", {
            allUsers: users, title: "Users List"
        });
    }
    else {
        res.send("User not found");
    }
    
};
router.postFindUserForm = (req, res) => {
    console.log("in homeController postFindUser method");
    res.render("findUser", {title: "Find User"});
};

router.postSignUpForm = (req, res) => {
    console.log("in homeController postSignUpForm method");
    res.render("contact", {title: "Contact Us"});
};

module.exports = router ;

