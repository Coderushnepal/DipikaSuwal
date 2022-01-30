var result;
function arrayToObject(arr) {
 result=arr.map(function(value,index){
        var splitted=arr[index].split(" ");
        var obj={};
        obj.id=index+1;
        obj.firstname=splitted[0];
        obj.lastname=splitted[1];
        return obj;
    });
    console.log(result);
}
var arr = ['Neeta sapkota',
    'neha shiwakoti',
    'Srijana Khatiwada',
    'Smrity Dhakal',
    'Sami Chakradhar',
    'Kirtee Maharjan',
    'Trija Thebe',
    'Sindhu Aryal',
    'Kusum Ranjitkar',
    'Elisha Bista',
    'Rachana kafle',
    'Barsha Maharjan',
    'Pooja Gurung',
    'Bisikha Subedi',
    'Kritika Baral',
    'Srijana Thulung'];

arrayToObject(arr);
function find(letter){
    var count=0;
    for(var i=0;i< result.length;i++){
        var initial=result[i].firstname[0].toLowerCase();
        if(initial==letter){
            count++;
        }
    }
    var total=result.length-count;
    console.log(count + " and "+ total);
}

find('s');
find('a');

var obj = {};
var output = result.forEach(function(value) {
    var objId = value.id;
    obj[objId] = value;
});
console.log(obj);