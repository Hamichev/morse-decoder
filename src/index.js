const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr=expr.split(''),Mas=[],check=0,word="",result="";
  Mas[check]=arr[check];
  for (let i=1;i<arr.length;i++)
  {
    if (i%2!=0) {Mas[check]+=arr[i];}
    if (i%2==0 && i!=0) {check++;}
    if (i%2==0) {Mas[check]=arr[i];}
  }
  for (let j=0;j<Mas.length;j++)
  {
    if (Mas[j]=="10") {word+='.';}
    if (Mas[j]=="11") {word+='-';}
    if ((j+1)%5==0 && j!=0) {result+=MORSE_TABLE[word];word="";}
    if (Mas[j]=="**") {result+=" ";j+=4;}
  }
  return result;
}

module.exports = {
    decode
}
