function traverse(obj, path = [], newObj = {}) {  
  if (typeof obj !== 'object' || obj === null) {
      newObj[path.join('.')] = obj;
      return;  
    }  
    for (const key in obj) {  
      traverse(obj[key], [...path, key], newObj);  
  }

  
    return newObj;
  }  
  const nested = {  
    a: 1,  
    b: { c: 2, d: { e: 3 } },  
    f: [4, 5]  
  };  

const newObj = traverse(nested);
console.log(newObj);