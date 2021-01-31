function womensAge(n) {
    return n % 2 === 0 ? `${n}? That's just 20, in base ${n/2}!` : `${n}? That's just 21, in base ${(n-1)/2}!`
  }