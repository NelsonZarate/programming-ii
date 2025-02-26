import fetch from 'node-fetch';
/**
 * 
 * @param {String} word 
 * @returns 
 */
export async function getWordDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Word not found');
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log('Error:', error);
    }
  }
  