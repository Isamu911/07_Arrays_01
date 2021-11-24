/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */

// let arr;
// arr = new Array(); // Konstruktor
// arr = [];  // Literal
// arr = [2,4,7,11];
// arr = [true,true,false];
// arr = ["Ich","bin","Maxine","Mützerich"];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]);  // Index (1. Pos. im Array)
// output(arr[2]); 
// output(arr[arr.length-1]); // Index (Letzte Pos. im Array)

/* 02a. Theorie: Schleifen (for-schleife) */

/* For -Schleife als Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//      output(i);
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//     output(i);
// }

// Inkrement (var. Schrittweite)
// for (let i = 0; i < 100; i+=10) {
//     output(i);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++) {
     output(arr[i]);
}


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Maxine","Mützerich"));
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

/*** 01a. Funktionalität mit Array 1  */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n] ::Numerische Struktur (0,1,2,3 ... n)
// --> Transformation  semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const gap = " ";
    const punct = ".";
    const str = arr[0] + gap +
                arr[1] + gap +
                arr[2] + gap +
                arr[3] +
                punct;

    return str;
}










// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


