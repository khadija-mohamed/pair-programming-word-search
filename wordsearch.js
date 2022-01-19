const transpose = function(matrix) {
    let array = [];
    for (let i = 0; i < matrix[0].length; i++) {
      array.push([]);
    }
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        array[col][row] = matrix[row][col];
      }
    }
    return array;
  };
  const wordSearch = (letters, word) => {
    const verticalJoin = transpose(letters);
    let verticalJoinArray = [];
    verticalJoin.forEach(item => {
      let verticalWord = "";
      item.forEach(letter => {
        verticalWord += letter;
      });
      verticalJoinArray.push(verticalWord);
    });
    for (l of verticalJoinArray) {
      if (l.includes(word)) return true;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin); {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;
  