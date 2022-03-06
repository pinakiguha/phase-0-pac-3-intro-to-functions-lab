function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper (string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var cantanswer = "I can't hear you!";
    var yesanswer = "YES INDEED!";
    var loveanswer = "I love you, too.";
    if (string.toLowerCase(string) === string) {
        return cantanswer;
    }

else if (string.toUpperCase(string)=== string) {
   return yesanswer; 
}

else if ("I love you, Grandma."=== string){
    return loveanswer
}
}