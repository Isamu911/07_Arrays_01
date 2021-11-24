/* Die Satzbau-Maschine | Arrays */





/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
output(getSentence("Ich","bin","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4) {

    const gap = " ";
    const punct = ".";
    const str = word1 + gap +
                word2 + gap +
                word3 + gap +
                word4 +
                punct;

    return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


