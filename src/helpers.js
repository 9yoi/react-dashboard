// helper function to format numbers into dollars
export function formatCurrency (amount) {
  let output = ''
  let str = String(amount);
  if(str.length <= 3) {
    return '$ ' + str;
  }
  let counter = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    if (counter === 3) {
      output = str[i] + ',' + output;
      counter = 1;
    } else {
      output = str[i] + output;
      counter ++;
    }
  }
  return '$ ' + output;
}

//capitalize a string
export function capitalize (s) {
  return s.slice(0,1).toUpperCase() + s.slice(1);
}
