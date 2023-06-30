const main_data = "https://docs.google.com/spreadsheets/d/12OgnnIYoeG3oa5prcZ5HgzjuECPCk4FmBhCf_ecV_TY/export?format=csv";
const more_data = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";
const port_data = "https://docs.google.com/spreadsheets/d/1IYfYPLlBbq8Qw4Q7drtAH8stgHQpLqgfg_ZcWtK6U5M/export?format=csv";
const matu_data = "https://docs.google.com/spreadsheets/d/1LGJg6Jl3qV2IQfknt2xOvmvJuKtUaVWMSOcN1HrnHuc/export?format=csv";
const webs_data = "https://docs.google.com/spreadsheets/d/1R1e93BSQ-dVmHgZadcJmINP_qDJo65CZFBJ98hhzpvk/export?format=csv";

fetch(main_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){
    var datalist = document.getElementById("name");
    for(var i = 0; i < csv.length; i++){
        const option = document.createElement('option');
        option.text = csv[i].Name;
        option.value = csv[i].Name;
        datalist.appendChild(option);
    }
});

function search(){

    fetch(main_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){main(csv);});
    fetch(more_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){more(csv);});
    fetch(port_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){port(csv);});
    fetch(matu_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){matu(csv);});
    fetch(webs_data).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){webs(csv);});

}

function main(data){

    var name = document.getElementById("name").value;

    for(var i = 0; i < data.length; i++){

        if(data[i].Name == name){

            document.getElementById("cover").setAttribute("src", data[i].Cover);
            document.getElementById("getname").innerHTML = data[i].Name;
            document.getElementById("part").innerHTML = data[i].Part;
            document.getElementById("number").innerHTML = data[i].Number;
            document.getElementById("status").innerHTML = data[i].Status;
            document.getElementById("website").innerHTML = data[i].Website;
            document.getElementById("time").innerHTML = data[i].Histotime;
            document.getElementById("date").innerHTML = data[i].Date;

        }

    }

}

function more(data){

    var name = document.getElementById("name").value;

    for(var i = 0; i < data.length; i++){

        if(data[i].Name == name){

            document.getElementById("assname").innerHTML = data[i].AssName;
            document.getElementById("nation").innerHTML = data[i].Nation;
            document.getElementById("genre").innerHTML = data[i].Type;
            document.getElementById("rate").innerHTML = data[i].Rate;
            document.getElementById("spoil").innerHTML = data[i].Spoil;
            document.getElementById("notificate").innerHTML = data[i].Notificate;
            document.getElementById("price").innerHTML = data[i].Price;

        }

    }
    
}

function port(data){

    var name = document.getElementById("name").value;

    var all = 0;
    var main = 0;
    var sub = 0;

    for(var i = 0; i < data.length; i++){

        if(data[i].Name == name){

            document.getElementById("countall").innerHTML = all;
            document.getElementById("maincount").innerHTML = main;
            document.getElementById("subcount").innerHTML = sub;
            if(data[i].Status =="n"){main++;}
            if(data[i].Status =="e"){sub++;}
            all++;

        }

    }
    
}

function matu(data){

    var name = document.getElementById("name").value;

    for(var i = 0; i < data.length; i++){

        if(data[i].Name == name){
            document.getElementById("maturestatus").innerHTML = data[i].Status;
        }

    }
    
}

function webs(data){

    var name = document.getElementById("name").value;

    for(var i = 0; i < data.length; i++){

        if(data[i].Name == name){

            var link = data[i].DataStoreLocation;
            var linkget = link.replace("edit?usp=sharing", "export?format=csv")
            fetch(linkget).then(resultt=>resultt.text()).then(function (csvtextt){return csv().fromString(csvtextt);}).then(function(csvt){
                if(csvt[3].Info1 == "n"){csvt[3].Info1 = "https://i.pinimg.com/564x/6f/b1/fa/6fb1fa3c16a2aa37a4ab3d7e192b7c2d.jpg";}
                document.getElementById("manhwacover").setAttribute("src", csvt[4].Info1);
                document.getElementById("novelcover").setAttribute("src", csvt[3].Info1);
                document.getElementById("caption").innerHTML = csvt[5].Info1;
            });

        }

    }
    
}


