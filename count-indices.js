function countIndices(characters)
{
  var obj = {}
  for (var i = 0; i < characters.length; i += 1) {
    var char = characters[i];

    if (char === ' ') {
     continue;
    }

    if (obj[char]) {
      obj[char].push(i);
    } else {
      obj[char] = [i];
    }
 }
 return obj;

}

console.log(countIndices("lighthouse in the house"))


// }
// {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// }


//   x = [2, 5]
//   i = 7
//  wanted:   x = [2, 5, 7]