function user(userName,password){
    this.userName=userName;
    this.passWord=password;
}

function login(){
    let userName = $("#txtUserName").val();
    let passWord = $("#txtPassword").val();

    // console.log(userName,passWord);
    let currentUser = new user(userName,passWord);
    console.log(currentUser)
    $('input').val("");
}



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
    // clear the inputs
    $('input').val("");
    console.log(newUser);
}

function init(){
    // console.log("Login");
    $("#btnLogin").click(login);
    // console.log("Register");
    $("#btnRegister").click(register);
}

window.onload=init;