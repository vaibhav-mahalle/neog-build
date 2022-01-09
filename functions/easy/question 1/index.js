//version 1
function power(a,b)
{
  let result = 1;
  for(let i=0;i<b;i++)
  {
    
    result = result*a;
  }
  return result;
}

power(2,3)

//version 2

const power1 = (a,b) => {
  let result = 1;
  for(let i=0; i<b ; i++)
  result = result*a;

  return result;
  
}

power1(2,7)

//version 3

const power2 = (a,b) => {
  let result = 1;
  let i=0;
  while(i < b)
  {
    result = result*a;
    i++;
  }
  return result;
}

power2(3,4)