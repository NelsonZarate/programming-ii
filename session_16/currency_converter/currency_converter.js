export async function convertUSDToEUR(amount) {  
    const rate = await fetchExchangeRate(); // Assume this calls an API  
    return amount * rate;  
  }

function fetchExchangeRate(){
    return 1;
  }