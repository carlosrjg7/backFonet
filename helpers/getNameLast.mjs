const extNameLast = (names) =>{
  
  let parts = names.split(' ');

  const name = parts[0];

  const lastname = parts[2].length > 0 ? parts[2] : parts[1].length > 0 ?  parts[1] : 'NA'

  return {name, lastname}
}

export default extNameLast