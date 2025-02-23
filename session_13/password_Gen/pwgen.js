export function passwordGen(argsMap) {
    // Set defaults
    const options = {
        length: 12,
        uppercase: false,
        numbers: false,
        ...argsMap 
    };

    options.length = parseInt(options.length) || 12;

    if (options.length < 12 || options.length > 128) {
        throw new Error('Password length must be between 12 and 128 characters');
    }

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