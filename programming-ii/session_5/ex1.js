
const users = [  
    { id: 1, name: 'Alice', city: 'Paris' },  
    { id: 2, name: 'Bob', city: 'London' },  
    { id: 3, name: 'Charlie', city: 'Paris' }  
  ];

let newUsers = new Map();
users.forEach((value) => {
    if(newUsers.has(value.city)){
        newUsers.get(value.city).push(value);
    }
    else newUsers.set(value.city, [value])
});

console.log(newUsers);
