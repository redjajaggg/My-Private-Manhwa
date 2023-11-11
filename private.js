const dataget = "https://docs.google.com/spreadsheets/d/1HsH40yVrlcWrSLXn0qEG06BR7X_YS4YUQyFbEzaEf7Y/edit?usp=sharing";
const datause = "https://docs.google.com/spreadsheets/d/1HsH40yVrlcWrSLXn0qEG06BR7X_YS4YUQyFbEzaEf7Y/export?format=csv";
fetch(datause).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){appenddata(csv);});

function appenddata(data){

    var list = document.getElementById("names");
    var name_pop = [];
    for(var o = 0; o < data.length; o++){
        const option = document.createElement('option');
        option.text = data[o].Name;
        option.value = data[o].Name;
        if(!name_pop.includes(data[o].Name)){list.appendChild(option);}
        name_pop.push(data[o].Name);
        
    }

    document.getElementById("name").oninput = () => {

        document.getElementById("datashow").innerHTML = "";

        for(var i = 0; i < data.length; i++){

            if(data[i].Name.includes(document.getElementById("name").value)){
                
                create(data[i]);
                
            }

        }

    }
    function create(datas){

        var divshow = document.createElement('div');
        divshow.innerHTML = datas.PictureLink;
        document.getElementById("datashow").appendChild(divshow);

    }
    
    
}

