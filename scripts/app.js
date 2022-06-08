

// function login(){
//     let userName = $("#txtUserName").val();
//     let passWord = $("#txtPassword").val();

//     // console.log(userName,passWord);
//     let currentUser = new user(userName,passWord);
//     console.log(currentUser)
//     $('input').val("");
// }



// object constructor
function User(email,password,fname,lname,age,address,phone,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.userAge=age;
    this.userAddress=address;
    this.userPhone=phone;
    this.paymentMethod=payment;
    this.faveColor=color;
    

} 
function isValid(user){
    // return false when the user is not valid
    // return true when user is valid
    let valid=true;
    // add validation for email,pass,fname,lname
    if(user.email.length==0 || user.email==""){
        valid=false;
        $("#txtEmail").addClass("input-error");
        alert("Please add an email");
    }

    if(user.password=="" || user.password.length <=6){
        valid=false;
        $("#txtPassword").addClass("input-error");
        alert("Password must be at least 7 characters");
    }
    if(user.firstName.length==0){
        valid=false;
        $("#txtFirstName").addClass("input-error");
        alert("Enter First Name");
    }
    if( user.lastName.length==0 || user.lastName==""){
        valid=false;
        $("#txtLastName").addClass("input-error");
        alert("Enter Last Name");
    }
    if(user.userAge==""){
        valid=false;
        $("#txtAge").addClass("input-error");
        alert("Please Enter Age");
    }
    if(user.userPhone==""){ // user.userPhone.length >=12){
        valid=false;
        $("#txtPhone").addClass("input-error");
        alert("Please enter Valid Phone Number");
    }
    // if(user.paymentMethod==0){
    //     valid=false;
    //     $("#userPayment").addClass("input-error");
    //     alert("Please select a payment type");
    // }
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
    let paymentMethod = $("#userPayment").val();
    let faveColor=$("#selColor").val();

    // console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,paymentMethod,faveColor);

    // creating the obj
    let newUser = new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,paymentMethod,faveColor);

    
    if(isValid(newUser)==true){
        // console.log(newUser);
        saveUser(newUser); //this function is in the storeManager
        // clear the inputs
        $("input").val("");
        $("select").val("");
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