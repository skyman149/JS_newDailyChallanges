/*
NAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
*/

function DNAStrand(dna){
  
    let pairs = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    };
  
    return dna.split('').map(letter => pairs[letter]).join('');
  }