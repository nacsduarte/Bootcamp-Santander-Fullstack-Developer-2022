function getAdmins(map){
    let Admins = [];
for([key, value] of map) {
    if(value === 'Admins') {
    Admins.push(key);
}
}

return Admins;
}

const usuarios = new Map();

usuarios.set ('Luiz', 'Admins');
usuarios.set ('Stefany', 'Admins');
usuarios.set ('Jorge', 'user');
usuarios.set ('Natalia', 'Admins');

console.log(getAdmins(usuarios));
