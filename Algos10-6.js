function stringDupe(str) {
    strarr=str.split(' ')
    for (var i=0; i < strarr.length; i++){
      for (var j=1+i; j < strarr.length-i; j++){
        if (strarr[i] == strarr[j]){
          strarr.splice(j, 1)
        }
      }
      strarr.join();
      return strarr
    }
  }
  
  const str3 = "farfar"
  console.log(stringDupe(str3));