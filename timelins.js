const datause = "https://docs.google.com/spreadsheets/d/1HsH40yVrlcWrSLXn0qEG06BR7X_YS4YUQyFbEzaEf7Y/export?format=csv";
fetch(datause).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){appenddata(csv);});

function appenddata(data){
    var name = [];
    var link = [];
    var namepop = [];

    var show = document.getElementById("show");
    
    for(var i = 0; i < data.length; i++){
        name.push(data[i].Name);
        link.push(data[i].PictureLink);

        create(data[i].Name);
    }
    var datalist = document.getElementById("names");
    for(const names of namepop){
        const option = document.createElement('option');
        option.value = names;
        datalist.appendChild(option);
    }
    document.getElementById("search").onclick = () => {
        let namegets = document.getElementById("name").value;
        document.getElementById("show").innerHTML = "";
        name = [];
        link = [];
        namepop = [];
        for(var i = 0; i < data.length; i++){
            name.push(data[i].Name);
            link.push(data[i].PictureLink);

            create(namegets);
        }
    }
    document.getElementById("clearname").onclick = () => {document.getElementById("name").value = "";}
    document.getElementById("show").innerHTML = "Click all or Choose one...";
    function create(name){
        
        var div = document.createElement("div");
        var divbig = document.createElement("div");
        var br = document.createElement("br");

        if(!namepop.includes(name)){
            namepop.push(name);
            div.innerHTML = name;
            div.style.backgroundColor = "#e6f542";
            div.style.border = "3px solid black"
            div.style.textAlign = "center";
            div.style.marginLeft = "auto";
            div.style.marginRight = "auto";
            div.style.borderRadius = "5px";
            div.style.fontFamily = "Brush Script MT";
            div.style.fontSize = "18px";
            divbig.appendChild(div);
            divbig.style.backgroundColor = "#e3e8ac";
            
            divbig.style.borderRadius = "10px";
            divbig.style.padding = "20px";
            divbig.style.marginLeft = "auto";
            divbig.style.marginRight = "auto";
            divbig.style.fontSize = "0";

            
            for(var j = 0; j < data.length; j++){
                if(data[j].Name == name){
                    
                    var imgs = document.createElement("img");
                    imgs.setAttribute('src', data[j].PictureLink);
                    if(window.innerWidth > 700){imgs.setAttribute('width', 400); divbig.style.width = "700px";}
                    if(window.innerWidth <= 700){imgs.setAttribute('width', 280); divbig.style.width = "300px";}
                    
                    divbig.appendChild(imgs);
                }
            }
            show.appendChild(br);
            show.appendChild(divbig);
        }
    }

}