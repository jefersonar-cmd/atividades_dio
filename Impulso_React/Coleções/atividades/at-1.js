const getAdmin = (map) =>{
    let admin = [];

    for([key, value] of map){
        if(value === 'ADMIN'){
            admin.push(key);
        }
    }

    return admin;
}

const userRoles = new Map();

userRoles.set('Jefferson', 'ADMIN');
userRoles.set('Giovana', 'ADMIN');
userRoles.set('Gustavo', 'USER');
userRoles.set('Rodrigo', 'SUDO');

console.log(getAdmin(userRoles));