/**************************************
* TITLE: strings
* AUTHOR: Kiren Kaur
* CREATE DATE: 2/28/18
* PURPOSE: learn about strings
* LAST MODIFIED ON: 2/22/18
**************************************/

//prompt user for single character stringOutput x
//convert to intAscii x
//convert to 8 digit binary x
//split binary number and insert each num into an array
//loop through array and print true if 1 and false if 0

$(document).ready(function(){

    //gets name and converts to string
    var strQueen = prompt("What is the queen's significant others name, me matey?", "The Fortune Raider");
    var strQName = strQueen.toString();

    //charAt()
    var ship1 = strQName.charAt(1) + " Fortune";

    //indexOf()
    var ship2 = strQName.indexOf("a") + " Royal";

    //substring()
    var ship3 = strQName.substring(4) + " Galley";

    //trim()
    var ship4 = strQName.trim() + " Revenge";

    //replace()
    var ship5 = strQName.replace("e", "a") + " Roger";

    //toUpperCase()
    var ship6 = strQName.toUpperCase() + " Ship";

    //toLowerCase()
    var ship7 = strQName.toLowerCase() + " Pearl";

    //adding 5 more random ones to make it 12
    var ship8 = strQName.replace("i", "o");

    var ship9 = strQName.charAt(0) + " Destroyer";

    var ship10 = strQName.indexOf("u") + " Raider";

    var ship11 = strQName.replace("The", "Dangerous");

    var ship12 = strQName.replace("fortune", "revenge");

    //array holding ship variables
    var strArray = [ship1, ship2, ship3, ship4, ship5, ship6, ship7, ship8, ship9, ship10, ship11, ship12];

    //Prints through array, formats it
    for(var i = 0; i < strArray.length; i++) {
        document.getElementById("stringOutput").innerHTML += (i+1) + ". " + strArray[i] + "  <br>";

    }



}());
