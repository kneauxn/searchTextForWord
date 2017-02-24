// the word that will be searched for
let word = 'Ryan';
let numHits = 0;
let hit = false;
// the text that the program will search. I added a few Ryan, Tyler, and Jareds in there. There is 1 Sean.
let text = 'Lorem Tyler ipsum dolor sit amet, Tyler consectetur adipiscing elit, sed do eiusmod tempor incididunt Jared ut labore et dolore Ryan magna aliqua. Ut Jared enim ad minim veniam, quis nostrud Sean exercitation Tyler ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Ryan in reprehenderit in voluptate velit esse cillum dolore eu fugiat Jared nulla pariatur. Excepteur sint Ryan occaecat cupidatat non proident, sunt in Tyler culpa qui officia deserunt mollit anim id est laborum Jared.';

// defining the function.
search = function () {
    // check each letter of the text to see if it matches the first letter of the word being searched for
    for (let i = 0; i < text.length; i++) {
        // if it does then check the next few letters depending on the length of the word
        if (text[i] === word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] === word[j - i]) {
                    hit = true;
                    numHits ++;
                }
                // if the rest of the letters don't match forget that the first one did
                else {
                    hit = false;
                    numHits = 0;
                }
            }
        }
    }
};
// calling the function
search();

if (hit === true) {
    // I am sure that I could have determined the number of matches more elegantly but this is simple and clear
    console.log("There were " + numHits / word.length + " hit(s) for the word " + word);
} else {
    console.log("There were no matches for " + word);
}