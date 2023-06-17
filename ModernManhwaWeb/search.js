const data_csv_format = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";
//Search Zone
fetch(data_csv_format).then(result=>result.text()).then(function (csvtext){
    return csv().fromString(csvtext);
}).then(function(csv){
    //main.innerHTML = "<code>" + JSON.stringify(csv) + "</code>"
    appenddata(csv);
});
function appenddata(data){

    var count = 0;
    document.getElementById("nation").onchange = () => {
        document.getElementById("convey").innerHTML = "";
        count = 0;
        for(var i = 0; i < data.length; i++){

            if(data[i].Nation == document.getElementById("nation").value){

                create(data, i);
                count++;

            }

        }

    }
    document.getElementById("rate").onchange = () => {

        document.getElementById("convey").innerHTML = "";
        count = 0;
        for(var i = 0; i < data.length; i++){

            if(data[i].Rate == document.getElementById("rate").value){

                create(data, i);
                count++;

            }

        }
        
    }
    document.getElementById("noti").onchange = () => {

        document.getElementById("convey").innerHTML = "";
        count = 0;
        for(var i = 0; i < data.length; i++){

            if(data[i].Notificate == document.getElementById("noti").value){

                create(data, i);
                count++;

            }

        }
        
    }
    document.getElementById("markasmature").onclick = () => {

        document.getElementById("convey").innerHTML = "";
        count = 0;
        for(var i = 0; i < data.length; i++){

            if(data[i].Spoil.includes("mark as mature content")){

                create(data, i);
                count++;

            }

        }
        
    }
    document.getElementById("genre").onchange = () => {

        document.getElementById("convey").innerHTML = "";
        count = 0;
        for(var i = 0; i < data.length; i++){

            if(data[i].Type.includes(document.getElementById("genre").value)){

                create(data, i);
                count++;

            }

        }
        
    }

    function create(data, i){
        var each = document.createElement("div");
        var part = Math.floor(i / 5) + 1;
        var number = i + 1;
        each.innerHTML = "Name: " + data[i].Name + "<br>Part: " + part + "<br>Number: " + number + "<br>****************";
        document.getElementById("convey").appendChild(each);
    }
}
