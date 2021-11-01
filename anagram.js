// function anagram(wordOne, wordTwo){

//     if(wordTwo.length !== wordOne.length){

//         console.log('can never be anagrams!');

//     }else{

//       const string1 = wordOne.split('').sort().join('');
//       const string2 = wordTwo.split('').sort().join('');

//       if(string1 == string2){
//           console.log('YEEEY!!');
//       }
//     }
// }
// anagram('study','dusty')

const express = require('express');

const app = express();

app.use(express.json());

app.get('/anagram', (req, res)=>{

    const { wordOne, wordTwo } = req.body;

    if(wordTwo.length !== wordOne.length){

        const message = "These can never be anagrams";
        res.status(200).send({ message });

    }else{

      const string1 = wordOne.split('').sort().join('');
      const string2 = wordTwo.split('').sort().join('');

      if(string1 == string2){
        const message = "Yeey!! These sre anagrams";
        res.status(200).send({ message });
      }
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})