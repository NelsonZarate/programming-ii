
const { error } = require('console');
const fs = require('fs');
const { parse } = require('path');
const { fileURLToPath } = require('url');
const File_input = process.argv[2];
const File_output = process.argv[3];

try {
    if (!File_input || File_input.length === 0){
        throw new Error(`The file input ${File_input} must be data.csv `);
    }
    if (!File_output || File_output.length === 0){
        throw new Error(`The file output ${File_output} must be jsonFile.js`);
    }
    if(!fs.existsSync(File_input)){
        throw new Error(`The file csv data ${File_input} doesn't exist`);
    }
    else{
        const csvData = fs.readFileSync(File_input, 'utf-8');
        const rows = csvData.split('\n');
        const data = rows.slice(1).filter(row=> {
            const values = row.split(',');
            const age = parseInt(values[1], 10);
            return values.length >= 1 && !isNaN(age);
        }).map(row => {
            const values = row.split(',');
            return {
                name: values[0],
                age: values[1],
                city: values[2],
                email: values[3]
            };
        });
        fs.writeFileSync(File_output, JSON.stringify(data, null, 2));   
        }
      } 
      catch (error) {
        console.error('Error:', error.message);
      }
        


