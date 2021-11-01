// function checkPalindrome(word) { 
//     const splitted = word.split('');
    
//     const reversed = splitted.reverse();

//     const joined = reversed.join('');

//     if(joined == word){
//         console.log('These are anagrams');
//     }else{
//         console.log('They are not anagram')
//     }
// }

// checkPalindrome('rac car');

const express = require("express");

const app = express();

app.use(express.json());

app.get("/palindrome", (req, res) => {
    const { word } = req.body;

    const splitted = word.split('');
    
    const reversed = splitted.reverse();

    const joined = reversed.join('');

    if(joined == word){
        const message = "This is a palindrome";
        res.status(200).send({ message });
    }else{
        const message = "This is not a palindrome";
        res.status(203).send({ message });
    }
    
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
})