var medList="00000";
var checked='<img src="https://img.icons8.com/ios/39/000000/checked-checkbox.svg">'
var unchecked='<img src="https://img.icons8.com/ios/39/000000/unchecked-checkbox.svg">'
var medName="";

function saveData(k, value) {
    // Put the object into storage
    var testObject = { k: value };
    document.getElementById("demo").innerHTML=JSON.parse(medList);
    localStorage.setItem(k, JSON.stringify(testObject));


}

function retrieveData() {
    // Retrieve the object from storage
    medList = localStorage.getItem('medList');

    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

function init() {
    retrieveData();
    document.getElementById("demo").innerHTML=JSON.parse(medList);
    if (medList=="") medList="00000";
    var i;
    // document.getElementById("demo").innerHTML=medName;
    for (i=0; i<medList.length; i++) {
        if (medList[i]=='1') {
            var medId="med"+i.toString();
            document.getElementById(medId).innerHTML=checked;
        }
    }
};

function changeCheckBox(x) {
    var id=parseInt(x.id[3]);
    document.getElementById("demo").innerHTML= id;

    if (x.innerHTML == checked) {
        x.innerHTML = unchecked;
        medList[id]=0;
        // document.getElementById("demo").innerHTML=x.src;
    } else {
        x.innerHTML = checked;
        medList[id]=1;
    }
    saveData('medList',medList);
    document.getElementById("demo").innerHTML=JSON.parse(localStorage.getItem('medList'));
}

init();
