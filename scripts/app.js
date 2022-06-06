

// function login(){
//     let userName = $("#txtUserName").val();
//     let passWord = $("#txtPassword").val();

//     // console.log(userName,passWord);
//     let currentUser = new user(userName,passWord);
//     console.log(currentUser)
//     $('input').val("");
// }



// object constructor
function User(email,password,fname,lname,age,address,phone,payment){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.userAge=age;
    this.userAddress=address;
    this.userPhone=phone;
    this.paymentMethod=payment;
    

} 
function isValid(user){
    // return false when the user is not valid
    // return true when user is valid
    let valid=true;
    // add validation for email,pass,fname,lname
    if(user.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
        // alert("Please add an email");
    }

    if(user.password=="" || user.password.length <=6){
        valid=false;
        $("#txtPassword").addClass("input-error");
        alert("Password must be at least 7 characters");
    }
    if(user.firstName.length==0){
        valid=false;
        $("#txtFirstName").addClass("input-error");
        // alert("Enter First Name");
    }
    if( user.lastName.length==0){
        valid=false;
        $("#txtLastName").addClass("input-error");

    }
    return valid;
} 

// register function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val(); 
    let userPhone = $("#txtPhone").val();
    let paymentMethod = $("#txtPayment").val();

    console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,paymentMethod);

    // creating the obj
    let newUser = new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,paymentMethod);

    
    if(isValid(newUser)==true){
        // console.log(newUser);
        saveUser(newUser); //this function is in the storeManager
        // clear the inputs
        $('input').val("");
    }
    
    
}

function init(){
    // // console.log("Login");
    // $("#btnLogin").click(login);
    console.log("Register");
    $("#btnRegister").click(register);
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
        console.log(e.key);
    });

}

window.onload=init;