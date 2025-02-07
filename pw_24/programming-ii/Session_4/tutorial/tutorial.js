
const fs = require('fs');
const csvData = fs.readFileSync('Session4_data.csv', 'utf-8');


const rows = csvData.split('\n');
const headers = rows[0].split(','); // ["name", "age", "city"]
const data = rows.slice(1).map(row => {
  const values = row.split(',');
  return {
    name: values[0],
    age: parseInt(values[1]),
    city: values[2]
  };
});

fs.writeFileSync('session4_data.json', JSON.stringify(data, null, 2));  