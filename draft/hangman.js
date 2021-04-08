const hangman = [`
 +---+
 |   |
     |
     |
     |
     |
========= 
`, `
 +---+
 |   |
 O   |
     |
     |
     |
========= 
`, `
 +---+
 |   |
 O   |
 |   |
     |
     |
========= 
`, `
 +---+
 |   |
 O   |
/|   |
     |
     |
========= 
`, `
 +---+
 |   |
 O   |
/|l  |
     |
     |
========= 
`, `
 +---+
 |   |
 O   |
/|l  |
/    |
     |
========= 
`, `
 +---+
 |   |
 O   |
/|l  |
/ l  |
     |
========= 
` ]

const hangtitle = "H A N G M A N"

// console.log(hangman.length)
exports.hangman = hangman
exports.hangtitle = hangtitle