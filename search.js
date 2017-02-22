let word = 'Sean';
let numHits = 0;
let text = 'Lorem Tyler ipsum dolor sit amet, Tyler consectetur adipiscing elit, sed do eiusmod tempor incididunt Jared ut labore et dolore Ryan magna aliqua. Ut Jared enim ad minim veniam, quis nostrud Sean exercitation Tyler ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Ryan in reprehenderit in voluptate velit esse cillum dolore eu fugiat Jared nulla pariatur. Excepteur sint Ryan occaecat cupidatat non proident, sunt in Tyler culpa qui officia deserunt mollit anim id est laborum Jared.';

search = function () {
    // check each letter of the text to see if it matches the first letter of the word being searched for
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word[0]) {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === text[i + j]) {
                    numHits++
                }
            }
        }
    }
};
search();
console.log(numHits);
console.log("The word to be searched for is " + word);
