const data_csv_normal = "https://docs.google.com/spreadsheets/d/1Mn2FDBvSjufDqNNxBn1SHVHFaCF0EnXnFDuwiS-Nbpg/export?format=csv";
const data_csv_more = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = randomIntFromInterval(1, 5);
document.getElementById("crate").value = rndInt;
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
    var url_pon = "";
    var url_eur = "";
    var url_cny = "";
    var url_jpy = "";
    if(chooseRate == "1"){
        url_usd = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/KRW";
        url_pon = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/GBP";
        url_eur = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/EUR";
        url_cny = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/CNY";
        url_jpy = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/JPY";
    }
    if(chooseRate == "2"){
        url_usd = "https://v6.exchangerate-api.com/v6/1072c71013ba197218e2146e/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/1072c71013ba197218e2146e/latest/KRW";
        url_pon = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/GBP";
        url_eur = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/EUR";
        url_cny = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/CNY";
        url_jpy = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/JPY";
    }
    if(chooseRate == "3"){
        url_usd = "https://v6.exchangerate-api.com/v6/ffc32a4903e43dc48857ac53/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/ffc32a4903e43dc48857ac53/latest/KRW";
        url_pon = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/GBP";
        url_eur = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/EUR";
        url_cny = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/CNY";
        url_jpy = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/JPY";
    }
    if(chooseRate == "4"){
        url_usd = "https://v6.exchangerate-api.com/v6/82e7d72d97ed431e4cfd4e6c/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/82e7d72d97ed431e4cfd4e6c/latest/KRW";
        url_pon = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/GBP";
        url_eur = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/EUR";
        url_cny = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/CNY";
        url_jpy = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/JPY";
    }
    if(chooseRate == "5"){
        url_usd = "https://v6.exchangerate-api.com/v6/afffea8bf48196d6d4d0d5a2/latest/USD";
        url_krw = "https://v6.exchangerate-api.com/v6/afffea8bf48196d6d4d0d5a2/latest/KRW";
        url_pon = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/GBP";
        url_eur = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/EUR";
        url_cny = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/CNY";
        url_jpy = "https://v6.exchangerate-api.com/v6/9864303fce8c0e27b80fb812/latest/JPY";
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
    fetch(url_pon).then(response => response.json()).then(result => {
        var rKRWTHB = result.conversion_rates.THB;
        document.getElementById("pexchange").value = rKRWTHB;
        main_pon();
    });
    fetch(url_eur).then(response => response.json()).then(result => {
        var rUSDTHB = result.conversion_rates.THB;
        document.getElementById("eexchange").value = rUSDTHB;
        main_eur();
    });
    fetch(url_cny).then(response => response.json()).then(result => {
        var rUSDTHB = result.conversion_rates.THB;
        document.getElementById("yuexchange").value = rUSDTHB;
        main_cny();
    });
    fetch(url_jpy).then(response => response.json()).then(result => {
        var rUSDTHB = result.conversion_rates.THB;
        document.getElementById("yeexchange").value = rUSDTHB;
        main_jpy();
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

function main_pon(){

    var KRWTHB = document.getElementById("pexchange").value;

    document.getElementById("normalshowp").innerHTML = "£" + total(KRWTHB, document.getElementById("money").value).toFixed(3);
    
}

function main_eur(){

    var KRWTHB = document.getElementById("eexchange").value;

    document.getElementById("normalshowe").innerHTML = "€" + total(KRWTHB, document.getElementById("money").value).toFixed(3);
    
}

function main_cny(){

    var KRWTHB = document.getElementById("yuexchange").value;

    document.getElementById("normalshowyu").innerHTML = "¥" + total(KRWTHB, document.getElementById("money").value).toFixed(3);
    
}

function main_jpy(){

    var KRWTHB = document.getElementById("yeexchange").value;

    document.getElementById("normalshowye").innerHTML = "¥" + total(KRWTHB, document.getElementById("money").value).toFixed(3);
    
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
var index = 0;
function newcompare(){

    var div = document.createElement('div');
    var cut = document.createElement('div');
    var sitename = document.createElement('select');
    var cost = document.createElement('input');
    var coin = document.createElement('input');
    var price = document.createElement('input');
    var data = document.createElement('label');

    cut.innerHTML = "------------------------------";
    var sites = ['-', 'Ridibook', 'Mr.blue', 'Lezhin KR', 'Lezhin EN', 'Lezhin ES', 'Bookcube', 'Bomtoon', 'Penutoon', 'Tapas', 'Manta', 'Tappytoon', 'Other'];
    for(const i of sites){
        const option = document.createElement('option');
        option.text = i;
        option.value = i;
        sitename.appendChild(option);
    }
    sitename.style.width = "100px";
    sitename.id = "site" + index;
    cost.id = "cost" + index;
    cost.placeholder = "Cost per Chapter eq.coin/penut...";

    coin.id = "coin" + index;
    coin.placeholder = "Amount Charge coin";

    price.id = "price" + index;
    price.placeholder = "AmountMoneyPayCoinChapter";

    data.id = "data" + index;
    
    div.appendChild(sitename);
    div.appendChild(cost);
    div.appendChild(coin);
    div.appendChild(price);
    div.appendChild(data);
    div.appendChild(cut);
    document.getElementById("tasks").appendChild(div);
    index++;

}
function cals(){
    for(var i = 0; i < index; i++){

        //pay in coin
        if(document.getElementById("cost" + i).value.trim() != "" && document.getElementById("coin" + i).value.trim() != ""){

            var priceFromCointoMoney = document.getElementById("cost" + i).value.trim() * (document.getElementById("price" + i).value.trim() / document.getElementById("coin" + i).value.trim());
            document.getElementById("data" + i).innerHTML = priceFromCointoMoney.toFixed(5);

        }

        //pay in money
        if(document.getElementById("coin" + i).value.trim() == "" && document.getElementById("price" + i).value.trim() == ""){

            document.getElementById("data" + i).innerHTML = document.getElementById("cost" + i).value.trim();
            
        }

    }
    var presort = {};
    var sort = [];
    for(var i = 0; i < index; i++){
        var data = document.getElementById("data" + i).innerHTML;
        presort[data] = document.getElementById("site" + i).value;
        sort.push(data);
    }
    sort.sort();
    document.getElementById("sum").innerHTML = "Summarize...";
    var it = 1;
    for(const i of sort){

        var div = document.createElement('div');
        div.innerHTML = "Rank: " + it + " Site: " + presort[i] + " Use: " + i;
        document.getElementById("sum").appendChild(div);
        it++;

    }
    sort = [];
    it = 1;
    
}
function calit(){
    document.getElementById("conveycost").innerHTML = `Must pay ${ ((document.getElementById("pricecostcal").value / document.getElementById("allcostcal").value) * document.getElementById("eachcostcal").value).toFixed(5) } unit(s) Per chapter.<br>Can purchase ${ Math.floor(document.getElementById("allcostcal").value / document.getElementById("eachcostcal").value)} chapter(s).`;
}
