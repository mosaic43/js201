// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'


function numberJoinerWhile(startNumber, endNumber){
    let joining = "";
    while (startNumber < endNumber) {
       joining += startNumber + "_";
       startNumber++;
      }
      return joining + endNumber
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor(startNumber1, endNumber1){
    let joining = "";
    
    for (let number = startNumber1; number < endNumber1; number++){
    if (startNumber1 < endNumber1){joining += number + "_"}    
    }

return joining + endNumber1
}
numberJoinerFor (1,1)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3



function numberJoinerFancy(startNumber1, endNumber1, ick){
    var joining = "";
    
    for (var number = startNumber1; number < endNumber1; number++){
       
        if (startNumber1 < endNumber1){
            if (ick !== undefined){joining += number + ick}
                 else
            {joining += number + "_"}
            }    
    }

return joining + endNumber1
}