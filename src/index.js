module.exports = function getZerosCount(number, base) {
  
  let Base = {}; 
  let Number = {}; 
  let p = 0;
  
  for(let i = 2; i <= base; i++)
  {
    while(base % i === 0){
      if(Base[i]) {
        Base[i]++;
      } 
      else {
        Base[i] = 1;
      }

    base = base / i;
    }
  }

for(let j in Base)
{
  Number[j] = 0;
  for(let i = 1; i < number; i++)
    {
      let pow = Math.pow(+j, i);
      p = Math.floor( number / pow );

    if(p !== 0) 
    {
      Number[j] += p;
    }
   else break;
    }
}

let result = [];

for(let j in Base)
{
  let floor = Math.floor(Number[j]/Base[j]);
  result.push(floor);
}

return Math.min.apply(null,result);
} 