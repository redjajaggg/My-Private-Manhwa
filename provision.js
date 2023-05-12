const datause = "https://docs.google.com/spreadsheets/d/1n9QfJGvKfToNgVnA23GOcbiATHVIzVSo0Uz2OMokCb0/export?format=csv";
fetch(datause).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){appenddata(csv);});
function appenddata(data){

    var website = document.getElementById("website");
    var manhtia = document.getElementById("app");
    for(var i = 0; i < data.length; i++){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var div3 = document.createElement("div");
        if(data[i].Service == "My Private Manhwa"){
            div1.innerHTML = "No." + data[i].No + " : " + data[i].Method;
            div2.innerHTML = ">>> " + data[i].Script;
            img.setAttribute('src', data[i].Picture);
            div3.innerHTML = "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";
            div1.style.fontSize = "18px";
            website.appendChild(div1);
            website.appendChild(div2);
            if(data[i].Picture != "n"){website.appendChild(img);}
            website.appendChild(div3);
        }

        if(data[i].Service == "Manhtia (ManhwaApp)"){
            div1.innerHTML = "No." + data[i].No + " : " + data[i].Method;
            div1.style.fontSize = "18px";
            manhtia.appendChild(div1);
        }

    }

}