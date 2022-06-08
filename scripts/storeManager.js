const STORE_KEY="users";

function saveUser(user){
    let oldData=readUsers();// getting localStorage info
    oldData.push(user);// appending the new element
    let val= JSON.stringify(oldData);//creating the string for JSON
    localStorage.setItem(STORE_KEY,val);
 
}

function readUsers(){
    // get values from the local storage LS
    let data= localStorage.getItem(STORE_KEY);
    console.log(data);
    if(!data){//is not data
        return[];//creating the array
    }
    else{//we have data
        let list = JSON.parse(data); //poarsing JSON ot obj
        console.log(list);
        return list;
    }
     
}
