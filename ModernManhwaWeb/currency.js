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
normal_rate();
function normal_rate(){
    
    var chooseRate = document.getElementById("crate").value;
    var url_usd = "";
    var url_krw = "";
    if(chooseRate == "1"){
        url_usd = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/KRW";
    }
    if(chooseRate == "2"){
        url_usd = "https://v6.exchangerate-api.com/v6/1072c71013ba197218e2146e/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/1072c71013ba197218e2146e/latest/KRW";
    }
    if(chooseRate == "3"){
        url_usd = "https://v6.exchangerate-api.com/v6/ffc32a4903e43dc48857ac53/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/ffc32a4903e43dc48857ac53/latest/KRW";
    }
    if(chooseRate == "4"){
        url_usd = "https://v6.exchangerate-api.com/v6/82e7d72d97ed431e4cfd4e6c/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/82e7d72d97ed431e4cfd4e6c/latest/KRW";
    }
    if(chooseRate == "5"){
        url_usd = "https://v6.exchangerate-api.com/v6/afffea8bf48196d6d4d0d5a2/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/afffea8bf48196d6d4d0d5a2/latest/KRW";
    }
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

    document.getElementById("normalshowd").innerHTML = "$" + total(USDTHB, document.getElementById("money").value).toFixed(3);
    
}

function main_krw(){

    var KRWTHB = document.getElementById("wexchange").value;

    document.getElementById("normalshoww").innerHTML = "₩" + total(KRWTHB, document.getElementById("money").value).toFixed(3);
    
}

function add_rate(){
    fetch(data_csv_normal).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(data){
        for(var i = 0; i < data.length; i++){
            if(data[i].Group == "rate"){
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
    var sel = document.getElementById("ratedollar");
    var text = sel.options[sel.selectedIndex].text;
    fetch(data_csv_mores).then(results=>results.text()).then(function (csvtexts){return csv().fromString(csvtexts);}).then(function(csvs){
        var names = [];
        for(var i = 0; i < csvs.length; i++){names.push(csvs[i].Name);}
        var index = names.indexOf(name);
        var price = csvs[index].Price;

        var currency = 0; //rate exchange
        var numberUnit = text.substring(text.indexOf("/") + 1); // /23unit
        var ratePerUnit = dollarRate;
        
        if(text.includes("RateDollar")){
            currency = document.getElementById("dexchange").value;
        }
        if(text.includes("RateWon")){
            currency = document.getElementById("wexchange").value;
        }

        if(price.includes("w") && price.includes("d")){
            //normal won
            var totalw = total(document.getElementById("wexchange").value, price.substring(price.indexOf("w") + 1, price.indexOf("d")));
            //dollar or else
            var totald = total(currency, ((price.substring(price.indexOf("d") + 1) / numberUnit) * ratePerUnit));
            document.getElementById("eachshow").innerHTML = "₩" + totalw.toFixed(3) + " $" + totald.toFixed(3) + " AND " + diff(totald, totalw) + " DATAPRICE: " + price;
        }
        if(price.includes("w") && !price.includes("d")){
            //normal won
            var totalw = total(document.getElementById("wexchange").value, price.substring(price.indexOf("w") + 1));
            document.getElementById("eachshow").innerHTML = "₩" + totalw.toFixed(3) + " DATAPRICE: " + price;
        }
        if(!price.includes("w") && price.includes("d")){
            //dollar or else
            var totald = total(currency, ((price.substring(price.indexOf("d") + 1) / numberUnit) * ratePerUnit));
            document.getElementById("eachshow").innerHTML = "$" + totald.toFixed(3) + " DATAPRICE: " + price;
            console.log(currency);
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
