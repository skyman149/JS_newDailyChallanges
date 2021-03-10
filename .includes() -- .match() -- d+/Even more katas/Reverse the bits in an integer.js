function reverseBits(n) {
    const binaryReverse = n.toString(2).split('').reverse().join('');
    return parseInt(binaryReverse, 2);
  }