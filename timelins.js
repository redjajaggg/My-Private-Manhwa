const dataget = "https://docs.google.com/spreadsheets/d/1WT2dIeF9x0P1XBLQAm1C3PNMJum2NwYYZofGMeoPQW4/edit?usp=sharing";
const datause = "https://docs.google.com/spreadsheets/d/1WT2dIeF9x0P1XBLQAm1C3PNMJum2NwYYZofGMeoPQW4/export?format=csv";
const daa = "https://docs.google.com/spreadsheets/d/1RRUqHcL9Yq68XQA_XKyEFvyqpBsHD12x4OeP9QtOraY/export?format=csv";
fetch(datause).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){appenddata(csv);});

function appenddata(data){
    var name = [];
    var show = document.getElementById("show");
    var linkeach = [];
    
    for(var i = 0; i < data.length; i++){
        name.push(data[i].NAME);
    }
    var datalist = document.getElementById("names");
    for(const names of name){
        const option = document.createElement('option');
        option.value = names;
        datalist.appendChild(option);
    }
    document.getElementById("search").onclick = () => {
        let namegets = document.getElementById("name").value;
        document.getElementById("show").innerHTML = "";
        name = [];
        link = [];
        
        fetch(daa).then(results=>results.text()).then(function (csvtexts){return csv().fromString(csvtexts);}).then(function(csvs){
            var div = document.createElement("div");
            var divbig = document.createElement("div");
            var br = document.createElement("br");
            for(var i = 0; i < csvs.length; i++){
                //linkeach.push(csvs[i]);
            }
                
        });
        for(var i = 0; i < data.length; i++){
            name.push(data[i].Name);

            create(namegets);
        }
    }
    document.getElementById("clearname").onclick = () => {document.getElementById("name").value = "";}
    document.getElementById("show").innerHTML = "Choose one and Search...";
    function create(name){
            
        var div = document.createElement("div");
        var divbig = document.createElement("div");
        var br = document.createElement("br");
           
    }
}

