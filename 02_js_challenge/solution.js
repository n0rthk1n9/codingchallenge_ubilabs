// solution form stackoverflow

function zeroFill( number, width )
{
  // better than my solution because of getting the amount of needed
  // leading zeros in one line
  width -= number.toString().length;
  if ( width > 0 )
  {
    // all the testing and returning of array is done in one line, thats nice
    // but hard to read.
    // Using of ternary operator also clever
    // using join function for converting the standard array seperator ',' into
    // '0' is also pretty clever
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + "";
}

// own solution, in my opinion its better for the performance but i bit less short

function fillWithLeadingZeros(number, finalAmountOfDigits) {
  var stringOfNumber = number.toString();
  var lengthOfNumber = stringOfNumber.length;
  var filledWithLeadingZerosNumberArray = new Array();
  var filledWithLeadingZerosNumberString = "";

  for (var i = 0; i < (finalAmountOfDigits - lengthOfNumber); i++) {
    filledWithLeadingZerosNumberArray[i] = "0";
  }

  for (var i = 0; i < lengthOfNumber; i++) {
    filledWithLeadingZerosNumberArray.push(+stringOfNumber.charAt(i));
  }

  filledWithLeadingZerosNumberString = filledWithLeadingZerosNumberArray.join('')

  return filledWithLeadingZerosNumberString
}

console.log(fillWithLeadingZeros(123, 6))
