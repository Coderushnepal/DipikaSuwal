function identicalFilter(arr){
  var newArr=[];
  for (var i=0;i<arr.length;i++){
      var repeat=new Set(arr[i]);
      if(repeat.size==1){ 
         newArr.push(arr[i]);    
      }
  }
  console.log(newArr)
}

identicalFilter(["88", "999", "22", "545", "133"]);
identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]);