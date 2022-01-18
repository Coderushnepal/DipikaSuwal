function arrayValuesTypes(arr){
    for(var i=0;i<arr.length;i++){
        document.write(typeof(arr[i]) +"<br>");
    }
}
arrayValuesTypes([1, 2, "null", []]);
arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]);