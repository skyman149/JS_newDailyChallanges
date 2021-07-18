var climbStairs = function(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const current = first + second;
		// Update first and second for next loop
        first = second;
        second = current;
    }
	// When loop fininshes, second is pointing to the result of the last index, which is the result of the whole function
    return second;
};

// OR

var climbStairs = function(n) {
    a = b = 1
    while (n--)
        a = (b += a) - a
    return a
};