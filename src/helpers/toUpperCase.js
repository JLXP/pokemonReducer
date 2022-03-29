const first_letter_uppercase_word = str => {
    return str.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase())
  }
  
export default first_letter_uppercase_word;

