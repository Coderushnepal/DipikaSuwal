function filterArray(arr){
    for(var i=0;i<arr.length;i++){
        var result=typeof(arr[i]);
        if(result == "number"){
            document.write(arr[i] +"  ");
        }
    }
    document.write("<br>");
}
filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);