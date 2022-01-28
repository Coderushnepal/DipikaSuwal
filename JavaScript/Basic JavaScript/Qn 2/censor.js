function censor(str){
    var split=str.split(" ");
    split.forEach(splitted => {
        if(splitted.length>4){
            for(var i=0;i<splitted.length;i++){
                document.write("*");
            }
            document.write(" ");
        }
        else{
            document.write(splitted +" ");
        }
    });
    document.write("<br>");
}
censor("Dipikaaa dipi");
censor("The code is fourty");
censor("Two plus three is five");
censor("aaaa aaaaa 1234 12345")