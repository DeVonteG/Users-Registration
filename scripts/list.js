//this fn needs an array
function displayUsers(usersArray){
    let row;
    //travel the array (for loop)
    for(let i=0; i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
       //create the row=` <>${}<>`
       row=`
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.userAge}</td>
                <td>${user.email}</td>
                <td>${user.userPhone}</td>
                <td>${user.paymentMethod}</td>
                <td style="background-color:${user.faveColor}">${user.faveColor}</td>
            </tr>
        `;
        $("#users").append(row);//append the row to the table
    }
    

    
}

function init(){
    console.log("Listing users");
    let users=readUsers(); // getting array from local storage

    //<---------this is array from local storage----->//
    displayUsers(users);
}
window.onload=init;