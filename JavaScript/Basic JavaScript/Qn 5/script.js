function keysAndValues(obj){
    var key=Object.keys(obj);
    console.log(key);
    var value=Object.values(obj);
    var arr=[];
    for(var i=0;i<key.length;i++){
    arr.push([key[i]],[value[i]]);
    }
    console.log(arr);
}


keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ key1: true, key2: false, key3: undefined });