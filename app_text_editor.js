let text = prompt("Introduza o texto");
console.log("Texto original: " + text);

let word_To_Replace = prompt("Qual palavra deseja substituir?");
let new_word = prompt("Qual vai ser a nova palavra?");

function TextEditor(str, search, substitute, start = 0) {
  if (start >= str.length || search.length === 0) {
    return str;
  }

  const indice = str.indexOf(search, start); 
  if (indice === -1) {
    return str; 
  }
  let NewString = str.substring(0, indice) + substitute + str.substring(indice + search.length);
  return TextEditor(NewString, search, substitute, indice + substitute.length);
}
let modifiedText = TextEditor(text, word_To_Replace, new_word);
console.log("Texto modificado: " + modifiedText);
