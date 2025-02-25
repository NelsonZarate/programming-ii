import { writeFileSync, readFileSync, existsSync} from "fs";
/** */
export function passwordGen(argsMap) {
    const options = {
        length: 2,
        uppercase: false,
        numbers: false,
        ...argsMap 
    };
    options.length = parseInt(options.length) || 12;

    if (options.length < 12 || options.length > 100) {
        throw new Error('Password length must be between 12 and 100 characters');
    }

    let passwordList = [];
    if (existsSync('pw-config.json')) {
        try {
            const fileContent = readFileSync('pw-config.json', 'utf-8');
            passwordList= JSON.parse(fileContent);
            if (!Array.isArray(passwordList)) {
                passwordList = [];
            }
        } catch (error) {
            passwordList = [];
        }
    }
    

    let password = generatePassword(options);

    while(passwordList.includes(password)){
        password = generatePassword(options);
    }

    passwordList.push(password)
    writeFileSync('pw-config.json', JSON.stringify(passwordList));
    return password;

}

function generatePassword(options){

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let pool = lowercase;
    if (options.uppercase) pool += uppercase;
    if (options.numbers) pool += numbers;

    let password = '';

    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    }
    return password;
}