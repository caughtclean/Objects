
function countLetters(characters) {
  var obj = {}
  for (var i = 0; i < characters.length; i += 1) {

    var char = characters[i];

    if (char === ' ') continue;

    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1
    }

    //// Another equivalent alternative
    // if(!obj[char]){
    //   obj[char] = 0;
    // }
    // obj[char] += 1;

  }
  return obj
  console.log(obj)
}

console.log(countLetters("lighthouse in the house"))

// }
