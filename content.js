const data_csv_normal = "https://docs.google.com/spreadsheets/d/1Mn2FDBvSjufDqNNxBn1SHVHFaCF0EnXnFDuwiS-Nbpg/export?format=csv";
const data_csv_main = "https://docs.google.com/spreadsheets/d/12OgnnIYoeG3oa5prcZ5HgzjuECPCk4FmBhCf_ecV_TY/export?format=csv";
fetch(data_csv_normal).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){normal(csv);});
fetch(data_csv_main).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){main(csv);});
const data_csv_mores = "https://docs.google.com/spreadsheets/d/1vAmEFn17c6kJMQwJ5JPYlvtWnRRweM8O-uk1mwn5xgU/export?format=csv";
var mores = "";
fetch(data_csv_mores).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(datamore){
    mores = datamore;
});
document.getElementById("opensearch").onclick = () => {

    if(document.getElementById("searchdiv").style.display == "none"){
        document.getElementById("searchdiv").style.display = "block";
    }
    else{
        document.getElementById("searchdiv").style.display = "none";
    }

};

function main(data){
    var numcontPerpage = 50;
    if(window.innerWidth < 900){numcontPerpage = 25;}
    var num_page = data.length / numcontPerpage;
    var page = 1;
    for (var a = 1; a <= num_page + 1; a++){
        var opt = document.createElement('option');
        opt.value = a;
        opt.innerHTML = a;
        document.getElementById("page").appendChild(opt);
    }
    
    document.getElementById("go").onclick = () => {
        document.getElementById("content").innerHTML = "";
        num_page = document.getElementById("page").options[document.getElementById("page").selectedIndex].text;
        max = (num_page * numcontPerpage);
        min = max - numcontPerpage;
        for(var i = min; i < max; i++){
            create(data, i);
        }
    }
    document.getElementById("next").onclick = () => {
        const se = document.querySelector('#page');
        se.value = document.getElementById("page").options[document.getElementById("page").selectedIndex + 1].text;
        clicks();
    }
    document.getElementById("prev").onclick = () => {
        const se = document.querySelector('#page');
        se.value = document.getElementById("page").options[document.getElementById("page").selectedIndex - 1].text;
        clicks();
    }
    document.getElementById("uptodays").onclick = () => {
        for(var i = 0; i < data.length; i++){
            const today = new Date();
            var getday = today.getDay();
            if(getday == 0){getday = 7;}
            if(getday == data[i].Date && data[i].Status !== "end"){create(data, i);}
        }
    }
    document.getElementById("submit").onclick = () => {
        document.getElementById("content").innerHTML = "";
        for(var i = 0; i < data.length; i++){
            if(data[i].Name == document.getElementById("nag").value){
                document.getElementById("content").innerHTML = "Name Search";
                create(data, i);
            }
            if(data[i].Part == document.getElementById("pag").value){
                create(data, i);
            }
            if(data[i].Date == document.getElementById("dag").value){
                create(data, i);
            }
            if(data[i].Website == document.getElementById("weg").value){
                create(data, i);
            }
            if(data[i].Status == document.getElementById("stg").value){
                create(data, i);
            }
        }
    }
    for(var i = 0; i < numcontPerpage; i++){
        create(data, i);
    }
}
document.getElementById("clear").onclick = () => {
    location.reload();
}

function clicks(){
    document.getElementById("go").click();
}

var domain_newtoki = "";
function create(data, i){
    
    var main_div = document.createElement("div");
    var up_div = document.createElement("div");
    var name_div = document.createElement("div");
    var name_link = document.createElement("a");
    var data_div = document.createElement("div");
    var cove_div = document.createElement("div");
    var cove_img = document.createElement("img");
    var more_div = document.createElement("div");
    var pro_div = document.createElement("div");
    var pro_bar = document.createElement("div");
    var pro_span = document.createElement("span");
    var alte_div = document.createElement("div");
    var genr_div = document.createElement("div");
    var part_div = document.createElement("div");
    var more_but = document.createElement("button");

    var upd = "";
    const today = new Date();
    var getday = today.getDay();
    if(getday == 0){getday = 7;}
    if(getday == data[i].Date && data[i].Status !== "end"){upd = "Update!"; up_div.style.backgroundColor = "red";}
    if(getday - 1 == data[i].Date && data[i].Status != "end"){upd = "Check Translate!"; up_div.style.backgroundColor = "blue";}
    up_div.style.borderRadius = "22px";
    up_div.style.fontSize = "20px";

    up_div.innerHTML = upd;

    main_div.style.width = "320px";
    var linkText = document.createTextNode(data[i].Name);
    name_link.style.fontWeight = "700";
    name_link.appendChild(linkText);
    name_link.title = data[i].Name;
    name_link.href = data[i].Name;
    name_div.setAttribute("id", "name");
    name_div.appendChild(name_link);

    var newtokilink = data[i].Newtoki + "";
    var newnewtokilink = domain_newtoki + newtokilink.substring(23);
    
    var link1 = "";
    var link2 = "";
    var link3 = "";
    var link4 = "";
    var status = "";
    if(data[i].Status == "end"){status = "{END}";}
    if(data[i].Rawweb != "n"){link1 = "<a class='modernlink' href='" + data[i].Rawweb + "'>RawM</a>"}
    if(data[i].Newtoki != "n"){link2 = "<a class='modernlink' href='" + newnewtokilink + "'>RawL</a>"}
    if(data[i].Translate != "n"){link3 = "<a class='modernlink' href='" + data[i].Translate + "'>English</a>"}
    if(data[i].Otherweb != "n"){link4 = "<a class='modernlink' href='" + data[i].Rawweb + "'>Other</a>"}
    data_div.innerHTML = "Part: " + data[i].Part + "<br>Date: " + convert_date(data[i].Date) + " " + status + "<br>Number: " + data[i].Number + "<br>" + link1 + link2 + link3 + link4;
    data_div.style.width = "150px";
    data_div.style.float = "left";
    data_div.style.textAlign = "left";

    cove_img.setAttribute("src", data[i].Cover);
    cove_img.style.width = "100px";
    cove_img.style.borderRadius = "5px";
    cove_img.setAttribute("class", "coverimg");
    
    cove_div.style.width = "101px";
    cove_div.style.float = "right";
    cove_div.appendChild(cove_img);

    more_but.innerHTML = "More...";
    more_but.onclick = () => {

        if(more_but.innerText == "More..."){
            more_but.innerText = "Hide";
            more_div.style.display = "block";
        }
        else{
            more_but.innerText = "More...";
            more_div.style.display = "none";
        }
    };
    pro_bar.setAttribute("id", "pro");
    pro_div.style.width = "80px";
    pro_div.style.marginLeft = "auto";
    pro_div.style.marginRight = "auto";
    pro_span.setAttribute("id", "value");
    pro_span.innerHTML = "Unknown";
    alte_div.innerHTML = "Alternative: ";
    genr_div.innerHTML = "Genre: ";

    //progress
    var percent_ = percent_to_up(parseInt(getday), parseInt(data[i].Date));
    pro_span.textContent = percent_.toFixed(1) + "%";
    if(data[i].Date == "n"){pro_span.textContent = "Unknown";}
    if(data[i].Status == "end"){pro_span.textContent = "END"; percent_ = 100;}
    if(percent_.toFixed(1) == "0.0"){pro_span.textContent = "Congratulation";}
    var random_result = Math.random() * 30;
    random_result = Math.round(random_result);
    var colors = "gold";
    if(random_result % 3 == 1){colors = "red";}
    if(random_result % 3 == 2){colors = "#7457f7";}
    pro_bar.style.background = `conic-gradient(${colors} ${3.6 * percent_}deg, white 0deg)`;

    more_div.style.display = "none";
    data_div.appendChild(more_but);
    pro_bar.appendChild(pro_span);
    pro_div.appendChild(pro_bar);
    more_div.appendChild(pro_div);
    more_div.appendChild(alte_div);
    more_div.appendChild(genr_div);
    var types = mores[i].Type;
    types = types.trim();
    types = types.replaceAll("rf", "RomanceFantacy");
    types = types.replaceAll("mt", "Adult");
    types = types.replaceAll("bl", "BL");
    types = types.replaceAll("rm", "Romance");
    types = types.replaceAll("ft", "Fantacy");
    types = types.replaceAll("dm", "Drama");
    types = types.replaceAll("ov", "OmegaVerse");
    types = types.replaceAll("cm", "Comedy");
    types = types.replaceAll("ir", "Isekai-Reverse time");
    types = types.replaceAll("sf", "Sci-Fi");
    types = types.replaceAll("at", "Action");
    types = types.replaceAll("fm", "Family");
    genr_div.innerHTML += types;
    if(mores[i].AssName == "n"){mores[i].AssName = "Unknown"}
    alte_div.innerHTML += mores[i].AssName;

    if(i % 5 == 0){part_div.innerHTML = "Part " + data[i].Part; document.getElementById("content").appendChild(part_div); part_div.style.gridColumn = "1 / span 3"; part_div.style.marginLeft = "auto"; part_div.style.marginRight = "auto"; part_div.setAttribute("class", "moderndiv");}

    cove_img.onclick = () => {

        if(cove_img.offsetWidth == 100){
            cove_img.style.width = "320px";
            data_div.style.display = "none";
            more_div.style.display = "none";
            cove_div.style.float = "left";
        }else{
            cove_img.style.width = "100px";
            data_div.style.display = "block";
            cove_div.style.float = "right";
            more_but.innerText = "More...";
        }

    };

    main_div.appendChild(up_div);
    main_div.appendChild(name_div);
    main_div.appendChild(data_div);
    main_div.appendChild(cove_div);
    main_div.appendChild(more_div);
    more_div.style.textAlign = "left";
    main_div.setAttribute("class", "moderndiv");
    main_div.setAttribute("id", "eachstorydiv");
    if(data[i].Website == "yes"){name_div.style.backgroundColor = "rgb(161, 199, 246)";}
    else{name_div.style.backgroundColor = "yellow";}
    document.getElementById("content").appendChild(main_div);

}

function normal(data){

    //Notificate
    if(data[0].Status == "yes"){document.getElementById("notificate").style.display = "block"; document.getElementById("notificate").innerHTML = "Notification: " + data[0].Info;}
    for(var i = 0; i < data.length; i++){

        if(data[i].Status == "yes"){

            var a = document.createElement("div");
            var app = document.getElementById("app");

            if(data[i].Group == "kr"){

                a.innerHTML = "<a href='" + data[i].Info + "'><img id='slink' src='" + data[i].Piclink + "'></a>" + data[i].Name;
                app.appendChild(a);

            }

            if(data[i].Group == "en"){

                a.innerHTML = "<a href='" + data[i].Info + "'><img id='slink' src='" + data[i].Piclink + "'></a> " + data[i].Name;
                app.appendChild(a);

            }

            if(data[i].Group == "th"){

                a.innerHTML = "<a href='" + data[i].Info + "'><img id='slink' src='" + data[i].Piclink + "'></a>" + data[i].Name;
                app.appendChild(a);

            }

            a.style.width = " 300px";
            a.style.textAlign = "left";
            a.style.overflow = " hidden";
            a.style.marginRight = " auto";
            a.style.marginLeft = " auto";

            if(data[i].Name == "Newtoki"){

                domain_newtoki = data[i].Info;

            }

        }

    }

}

function percent_to_up(today, date_up){

    var cal = Math.abs((100 / 7) * (date_up - today));
    if(today > date_up){cal = 100 - cal;}
    return cal;

}

function convert_date(date){
    var day = "";
    switch(date){
        case "1": day = "Mon-Tue"; break;
        case "2": day = "Tue-Wed"; break;
        case "3": day = "Wed-Thu"; break;
        case "4": day = "Thu-Fri"; break;
        case "5": day = "Fri-Sat"; break;
        case "6": day = "Sat-Sun"; break;
        case "7": day = "Sun-Mon"; break;
        case "n": day = "Unknown"; break;
    }
    return day;
}