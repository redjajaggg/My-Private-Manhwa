const data_csv_normal = "https://docs.google.com/spreadsheets/d/1Mn2FDBvSjufDqNNxBn1SHVHFaCF0EnXnFDuwiS-Nbpg/export?format=csv";
const data_csv_more = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";

fetch(data_csv_more).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){
    for (var i = 0; i < csv.length; i++){
        var opt = document.createElement('option');
        opt.value = csv[i].Name;
        opt.innerHTML = csv[i].Name;
        document.getElementById("story_name").appendChild(opt);
    }
});

document.getElementById("dexchange").disabled = true;
document.getElementById("wexchange").disabled = true;
document.getElementById("money").value = 100;

var url_usd = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/USD";
var url_krw = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/KRW";

normal_rate();
function normal_rate(){
    fetch(url_usd).then(response => response.json()).then(result => {
        var rUSDTHB = result.conversion_rates.THB;
        document.getElementById("dexchange").value = rUSDTHB;
        main_usd();
    });
    fetch(url_krw).then(response => response.json()).then(result => {
        var rKRWTHB = result.conversion_rates.THB;
        document.getElementById("wexchange").value = rKRWTHB;
        main_krw();
    });
    add_rate();
    
}

function main_usd(){

    var USDTHB = document.getElementById("dexchange").value;

    document.getElementById("normalshowd").innerHTML = "$" + total(USDTHB, document.getElementById("money").value);
    
}

function main_krw(){

    var KRWTHB = document.getElementById("wexchange").value;

    document.getElementById("normalshoww").innerHTML = "₩" + total(KRWTHB, document.getElementById("money").value);
    
}

function add_rate(){
    fetch(data_csv_normal).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(data){
        for(var i = 0; i < data.length; i++){
            if(data[i].Group == "ratedollar"){
                var opt = document.createElement('option');
                opt.value = data[i].Info;
                opt.innerHTML = data[i].Name;
                document.getElementById("ratedollar").appendChild(opt);
            }
        }
    });
}

function each(){
    const data_csv_mores = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";
    var dollarRate = document.getElementById("ratedollar").value;
    var name = document.getElementById("story_name").value;
    fetch(data_csv_mores).then(results=>results.text()).then(function (csvtexts){return csv().fromString(csvtexts);}).then(function(csvs){
        var names = [];
        for(var i = 0; i < csvs.length; i++){names.push(csvs[i].Name);}
        var index = names.indexOf(name);
        var price = csvs[index].Price;
        if(price.includes("w") && price.includes("d")){
            var totalw = total(document.getElementById("wexchange").value, price.substring(price.indexOf("w") + 1, price.indexOf("d")));
            var totald = total(document.getElementById("dexchange").value, (price.substring(price.indexOf("d") + 1) / 300) * dollarRate);
            document.getElementById("eachshow").innerHTML = "₩" + totalw.toFixed(2) + " $" + totald.toFixed(2) + " AND " + diff(totald, totalw) + " DATAPRICE: " + price;
        }
        if(price.includes("w") && !price.includes("d")){
            var totalw = total(document.getElementById("wexchange").value, price.substring(price.indexOf("w") + 1));
            document.getElementById("eachshow").innerHTML = "₩" + totalw.toFixed(2) + " DATAPRICE: " + price;
        }
        if(!price.includes("w") && price.includes("d")){
            var totald = total(document.getElementById("dexchange").value, (price.substring(price.indexOf("d") + 1) / 300) * dollarRate);
            document.getElementById("eachshow").innerHTML =" $" + totald.toFixed(2) + " DATAPRICE: " + price;
        }
    });
    

}

function total(rate, amount){

    return rate * amount;

}
function diff(usd, krw){

    var which = "";
    if(usd > krw){
        which = "USD -Worse- KRW";
    }
    else if(usd < krw){
        which = "USD -Better- KRW";
    }
    else{
        which = "USD -Same- KRW";
    }

    return which;

}