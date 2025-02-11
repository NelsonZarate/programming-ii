import fetch from 'node-fetch';  


async function fetchUser(id) {  
  try {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();  
  } catch (error) {  
    console.error(error.message);  
  }  
}  

async function fetchUsers(){
  const ids = [1, 2, 3, 4];
  const promises = ids.map(id => fetchUser(id));
  const users = await Promise.all(promises);
  console.log(users);
}


console.log(fetchUsers());