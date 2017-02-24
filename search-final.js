let word = 'Ryan';
let numHits = 0;
let hit = false;
let text = 'Lorem Tyler ipsum dolor sit amet, Tyler consectetur adipiscing elit, sed do eiusmod tempor incididunt Jared ut labore et dolore Ryan magna aliqua. Ut Jared enim ad minim veniam, quis nostrud Sean exercitation Tyler ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Ryan in reprehenderit in voluptate velit esse cillum dolore eu fugiat Jared nulla pariatur. Excepteur sint Ryan occaecat cupidatat non proident, sunt in Tyler culpa qui officia deserunt mollit anim id est laborum Jared.';

search = function () {
    // check each letter of the text to see if it matches the first letter of the word being searched for
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] === word[j - i]) {
                    hit = true;
                    numHits ++;
                } else {
                    hit = false;
                }
            }
        }
    }
};
search();
console.log("There were " + numHits / word.length + " hits for the word " + word);
console.log(hit);