function toArray(obj){
    var result=[];
    keyObject=Object.keys(obj);
    for(var i=0;i<keyObject.length;i++){
        key=keyObject[i];
        result.push([key, obj[key]]);
    }
    console.log(result);
}
toArray({ a: 1, b: 2 });
toArray({ shrimp: 15, tots: 12 });
toArray({}); 
