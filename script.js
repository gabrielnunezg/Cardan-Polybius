
var polibMatrix = [["a","b","c","d","e","f"],
                   ["g","h","i","j","k","l"],
                   ["m","n","o","p","q","r"],
                   ["s","t","u","v","w","x"],
                   ["y","z","0","1","2","3"],
                   ["4","5","6","7","8","9"]];

console.log("Polybius Grid");
                   
//Polybius Cypher Process
var cypherText = "Mathematical foundations of information protection and information security";
var cypherFormatted = cypherText.toLowerCase().replace(/\s/g, '');
var cypherArray = cypherFormatted.split('');
var cypherResult = "";

console.log(cypherText);
for (i = 0; i < cypherArray.length; i++) {
    var cypherChar = cypherArray[i];
    yCord = 0; //Index of Row
    var xCord = polibMatrix[yCord].indexOf(cypherChar); //Index of Column

    if(xCord == -1){
        while (xCord ==-1){
            yCord++;
            xCord = polibMatrix[yCord].indexOf(cypherChar);
        }
    }

    cypherResult += (yCord+1);
    cypherResult += (xCord+1);
    
    if(i != cypherArray.length-1) {
        cypherResult += " ";
    }
}
  
console.log(cypherResult);

//Polybius Decypher Process

var decypherText = cypherResult;
var decypherArray  = decypherText.split(" ");
var decypherResult = "";

for (i = 0; i < decypherArray.length; i++) {
    charCord = decypherArray[i].split("");
    charValue = polibMatrix[(charCord[0])-1][(charCord[1]-1)];
    decypherResult += charValue;
}

console.log(decypherResult);


console.log("Cardan Grille");
//Cardan Grille
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var mask = "";
var coverPercent = 25; //In order to generate a mask, first declare the cover level (%)
maskVisibleChar = "_"; //Character in the mask used to filter the message content;
maskNoiseChar = "X"; //Character in the mask usted to mark the ignored characters;



//Cardan Grille Encryption;
//cypherText = "Th444is is a lev3el 1 encr2ypt52312ion";
cypherFormatted = cypherText.toUpperCase().replace(/\s|[0-9]/g, '');
cypherLength = cypherFormatted.length;
var maskLength = Math.round((100*cypherLength)/coverPercent);

cypherResult = "";

mask += maskNoiseChar.repeat(maskLength);
for (i = 0; i < maskLength; i++) {
    var charactersLength = characters.length;
     charVar = characters.charAt(Math.floor(Math.random() * charactersLength));
     cypherResult += charVar;
}

var splittedMask = mask.split('');
var resultSplitted = cypherResult.split('');
var visibleCount = 0;

while(visibleCount < cypherLength) {
    var index = Math.floor(Math.random()*maskLength); //generate new index
    if(splittedMask[index] != maskVisibleChar) {
       splittedMask[index] = maskVisibleChar;
       visibleCount++;
    }
}

var replacedCount = 0;

for (i = 0; i < maskLength; i++) {
    if(splittedMask[i] == maskVisibleChar) {
        resultSplitted[i] = cypherFormatted.charAt(replacedCount);
        replacedCount++;
    }
}


mask = splittedMask.join("");
cypherResult = resultSplitted.join("");
console.log(mask+" "+mask.length);
console.log(cypherResult+" "+cypherResult.length);


//Cardan Grille Decryption
decypherText = cypherResult;
//mask = newstring;

if (decypherText.length == mask.length) {
    decypherResult = "";

    for (i = 0; i < decypherText.length; i++) {
        if(mask.charAt(i) ==  maskVisibleChar) {
            decypherResult += decypherText.charAt(i);
        }
    }
    console.log(decypherResult);
}

else {
    console.log("Decypher Text and Mask lenght do not match. They must have the same lenght for the decryption to work");
}