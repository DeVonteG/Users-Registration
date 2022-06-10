function login(){
    // get values from the form
    let inputEmail = $("#txtUserName").val();
    let inputPass = $("#txtPassword").val();
    //use a flag
    let flag=false;
    //get the users from LS(local storage)
    let userList = readUsers();//this is from store manager

    //travel the user list

    for(let i=0;i<userList.length;i++){
        let user = userList[i];
        //compare email  & passwords
        if(user.email== inputEmail && user.password== inputPass){
            flag=true;
            window.location = "users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }

    }
    
}

function init(){
    $("#btnLogin").click(login);
}
window.onload=init;