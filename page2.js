const data_link = "https://docs.google.com/spreadsheets/d/12OgnnIYoeG3oa5prcZ5HgzjuECPCk4FmBhCf_ecV_TY/edit?usp=sharing";
const data_csv_format = "https://docs.google.com/spreadsheets/d/12OgnnIYoeG3oa5prcZ5HgzjuECPCk4FmBhCf_ecV_TY/export?format=csv";
const addnewpage = "https://script.google.com/macros/s/AKfycbyD6HGYBNGRxrMDKApkPs3MES4g5q0Vy7aNDMCEAn-OhfbKhHLIQ5S1lrxiiegnd1w/exec";
const mainshow = document.getElementById("contrainer");
const newtokidomain = "https://docs.google.com/spreadsheets/d/1pDy6MesFKPSXvQimrnaGifuEbOE9UroyPrSKHx7ewlo/export?format=csv";
const datadark = "https://docs.google.com/spreadsheets/d/1HsH40yVrlcWrSLXn0qEG06BR7X_YS4YUQyFbEzaEf7Y/export?format=csv";
const datause = "https://docs.google.com/spreadsheets/d/1IYfYPLlBbq8Qw4Q7drtAH8stgHQpLqgfg_ZcWtK6U5M/export?format=csv";

fetch(data_csv_format).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){appenddata(csv);});
function appenddata(data){
    var i1 = [];
    let index;
    let co = 0;
    let checkpart = 0;
    var allcount = document.getElementById("allnum");    
    var searcher = document.getElementById("open");

    fetch(newtokidomain).then(result=>result.text()).then(function (csvtext){return csv().fromString(csvtext);}).then(function(csv){newtoki(csv)});
    function newtoki(csv){
        i1.push(csv[0].Data1);
    }
    var info_name = [];
    var info_number = [];
    var info_part = [];
    var info_firstchar = [];
    var info_status = [];
    var info_hasweb = [];
    var info_trans = [];
    var info_newtoki = [];
    var info_myweb = [];
    var info_rawweb = [];
    var info_otherweb = [];
    var info_date = [];
    var info_cover = [];
    var dic_name_part = {};
    var dic_name_status = {};
    var dic_name_hasweb = {};
    var dic_name_firstchar = {};
    var dic_name_date = {};
    var partt;
    var page = 1;

    var part = [];
    for(var j = 1; j <= data.length; j++){part.push(j);}

    var pp = data.length / 25;
    for (var a = 1; a <= Math.ceil(pp); a++){
        var opt = document.createElement('option');
        opt.value = a;
        opt.innerHTML = a;
        document.getElementById("page").appendChild(opt);
    }
    if(window.innerWidth > 1000){
        document.getElementById("qr").style.float = "right";
        document.getElementById("website").style.float = "left";
        document.getElementById("searchopen").click();
        document.getElementById("website").style.display = "block";
    }
    
    for(var i = 0; i < data.length; i++){

        info_name.push(data[i].Name);
        info_number.push(data[i].Number);
        info_part.push(data[i].Part);
        info_firstchar.push(data[i].Firstchar);
        info_status.push(data[i].Status);
        info_hasweb.push(data[i].Website);
        info_trans.push(data[i].Translate);
        info_newtoki.push(data[i].Newtoki);
        info_myweb.push(data[i].Myweb);
        info_rawweb.push(data[i].Rawweb);
        info_otherweb.push(data[i].Otherweb);
        info_date.push(data[i].Date);
        info_cover.push(data[i].Cover);

        dic_name_part[data[i].Name] = data[i].Part;
        dic_name_status[data[i].Name] = data[i].Status;
        dic_name_hasweb[data[i].Name] = data[i].Website;
        dic_name_firstchar[data[i].Name] = data[i].Firstchar;
        dic_name_date[data[i].Name] = data[i].Date;
    }
    document.getElementById("prev").onclick = () => {
        const se = document.querySelector('#page');
        se.value = document.getElementById("page").options[document.getElementById("page").selectedIndex - 1].text;
        co = 0;
        page = document.getElementById("page").options[document.getElementById("page").selectedIndex].text;
        var test = data.length / 25;
        var getd = 0;
        var max = (page * 25);
        var min = max - 25;
        document.getElementById("contrainer").innerHTML = "";
        for(var i = min; i < max; i++){
            create(data[i].Name, i, i1);
            index++;
        }
        document.getElementById("gos").click();
        document.getElementById("gos").click();
        document.getElementById("next").disabled = false;
        if(document.getElementById("page").options[document.getElementById("page").selectedIndex].text == 1){document.getElementById("prev").disabled = true;}
        
        co = data[max].Number - data[min].Number;
    };
    document.getElementById("next").onclick = () => {
        document.getElementById("contrainer").innerHTML = "";
        const se = document.querySelector('#page');
        se.value = document.getElementById("page").options[document.getElementById("page").selectedIndex + 1].text;
        co = 0;
        page = document.getElementById("page").options[document.getElementById("page").selectedIndex].text;
        var test = data.length / 25;
        var getd = 0;
        var max = (page * 25);
        var min = max - 25;
        document.getElementById("prev").disabled = false;
        
        if(document.getElementById("page").options[document.getElementById("page").selectedIndex].text == Math.ceil(pp)){document.getElementById("next").disabled = true;}
        
        try{
            for(var i = min; i < max; i++){
            create(data[i].Name, i, i1);
            index++;
            }
        }catch(Error){}

        document.getElementById("gos").click();
        document.getElementById("gos").click();
        
        co = data[max].Number - data[min].Number;
    };
    document.getElementById("gos").onclick = () => {
        co = 0;
        page = document.getElementById("page").options[document.getElementById("page").selectedIndex].text;
        var test = data.length / 25;
        var getd = 0;
        var max = (page * 25);
        var min = max - 25;
        document.getElementById("contrainer").innerHTML = "";
        for(var i = min; i < max; i++){
            create(data[i].Name, i, i1);
            index++;
        }
        co = data[max].Number - data[min].Number;
    };
    document.getElementById("alls").onclick = () => {
        co = 0;
        document.getElementById("contrainer").innerHTML = "";
        for(var i = 0; i < data.length; i++){
            create(data[i].Name, i, i1);
            index++;
        }
    };
    
    var datalist = document.getElementById("names");
    var datalistpart = document.getElementById("parts");
    var paness = document.getElementById("update");
    paness.style.textAlign = "left";
    const todayw = new Date();
    var getdayw = todayw.getDay();
    let no = 1;
    
    for (const namess of info_name) {
        const option = document.createElement('option');
        option.value = namess;
        datalist.appendChild(option);
      };
      for (var partss = 1; partss <= data.length / 5 + 1; partss++) {
        const option = document.createElement('option');
        option.value = partss;
        datalistpart.appendChild(option);
      };
    for(var k = 0; k < info_date.length; k++){
        if(getdayw == 0){getdayw = 7;}
        if(getdayw == data[k].Date && data[k].Status !== "end"){
            ok(k);
        }
      }
      function ok(k){
        
        var uppane = document.createElement("div");
        var uppart = document.createElement("div");
        var search = document.createElement("button");
        var add = document.getElementById("name");
        var sea = document.getElementById("search");
        uppane.innerHTML = no.toString() + ". " + data[k].Name;
        uppart.innerHTML = "Part: " + data[k].Part + " : ";
        search.innerHTML = "explore";
        search.style.fontFamily = "Brush Script MT";
        search.addEventListener("click", function(){
            add.value = data[k].Name;
            sea.click();
        });
        search.style.backgroundColor = "#49eb34";
        search.style.borderRadius = "10px";
        paness.appendChild(uppane);
        paness.appendChild(uppart);
        paness.appendChild(search);
        no++;
      }
    document.getElementById("gos").click();
    document.getElementById("search").onclick = () => {
        let ins;
        let namegets = document.getElementById("name").value;
        let partgets = document.getElementById("part").value;
        let websgets = document.getElementById("hasweb").value;
        let statgets = document.getElementById("statu").value;
        let dategets = document.getElementById("dated").value;
        //name
        if(info_name.includes(namegets) && namegets != "" && partgets == ""){
            clear("contrainer");
            allcount.innerHTML = 0;
            showsearch(ins, namegets);
        }
        else if(info_name.includes(namegets) && namegets != "" && partgets == data[showsearch(ins, namegets)].Part){
            clear("contrainer");
            allcount.innerHTML = 0;
            showsearch(ins, namegets);
        }
        
        //part
        else if(info_part.includes(partgets) && partgets != "" && namegets == ""){
            partt = partgets;
            clear("contrainer");
            allcount.innerHTML = 5;
            for(var o = 0; o < data.length; o++){
                if(data[o].Part.toString() == partgets){
                    create("null", info_number.indexOf(o.toString()) + 1);
                }
                
            }
        }
        //web
        else if(info_hasweb.includes(websgets) && websgets != "" && namegets == ""){
            partt = 0;
            clear("contrainer");
            var cos = 0;
            
            for(var o = 0; o < data.length; o++){
                if(data[o].Website == websgets){
                    create("null", info_number.indexOf(o.toString()) + 1);
                    cos++;
                }
                
            }
            allcount.innerHTML = cos;
        }
        //status
        else if(info_status.includes(statgets) && statgets != "" && namegets == ""){
            partt = 0;
            clear("contrainer");
            var cos = 0;
            
            for(var o = 0; o < data.length; o++){
                if(data[o].Status == statgets){
                    create("null", info_number.indexOf(o.toString()) + 1);
                    cos++;
                }
                
            }
            allcount.innerHTML = cos;
        }
        //date
        else if(info_date.includes(dategets) && namegets == ""){
            partt = 0;
            clear("contrainer");
            var cos = 0;
            
            for(var o = 0; o < data.length; o++){
                if(data[o].Date == dategets){
                    create("null", info_number.indexOf(o.toString()) + 1);
                    cos++;
                }
                
            }
            allcount.innerHTML = cos;
        }
        else{
            clear("contrainer");
            allcount.innerHTML = 0;
            var pane = document.createElement("div");
            pane.innerHTML = "Not Found " + namegets + " Press clear to continue...";
            mainshow.appendChild(pane);
        }
        
    }
    function showsearch(ins, namegets){
        ins = info_name.indexOf(namegets);
        create(data[ins].Name, ins);
        allcount.innerHTML = 1;
        return ins;
    }
    document.getElementById("cleartext1").onclick = function (){
        document.getElementById("name").value = "";
        window.location.reload();
    }
    document.getElementById("spoil").onclick = function (){
        var namespoil = document.getElementById("name").value;
        namespoil = namespoil.replaceAll(" ", "+");
        window.location.href = "https://www.google.com/search?q=" + namespoil + "+spoil";
    }
    function clear(id){

        const main = document.getElementById(id);
        main.innerHTML = "";

    }
//*****************************here************************************ */
    var datanames = [];
    var datalocas = [];
    var datastatus = [];
    
    const main_data = "https://docs.google.com/spreadsheets/d/1R1e93BSQ-dVmHgZadcJmINP_qDJo65CZFBJ98hhzpvk/export?format=csv";
    fetch(main_data).then(results=>results.text()).then(function (csvtexts){return csv().fromString(csvtexts);}).then(function(csvs){geteach(csvs);});
    function geteach(data){
        for(var i = 0; i < data.length; i++){
            datanames.push(data[i].Name);
            datalocas.push(data[i].DataStoreLocation);
            datastatus.push(data[i].Status);
        }
    }
    function create(name, index, i1){
        
        var pane = document.createElement("div");
        var panepic = document.createElement("div");
        var paneinfo = document.createElement("div");
        var nam = document.createElement("div");
        var web = document.createElement("div");
        var dat = document.createElement("div");
        var parr = document.createElement("div");
        var cen = document.createElement("div");
        var but = document.createElement("button");
        var eachbutton = document.createElement("button");
        var pic = document.createElement("div");
        var upd = document.createElement("div");
        var upt = document.createElement("div");
        var par = document.createElement("div");
        var cov = document.createElement("img");
        var min = document.createElement("img");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a4 = document.createElement("a");
        var a5 = document.createElement("a");
        var br = document.createElement("br");
        const today = new Date();
        var getday = today.getDay();
        var normalheight = 0;

        cov.setAttribute('src', data[index].Cover);
        min.setAttribute('src', data[index].Cover);
        min.setAttribute('id', "covers");

        checkpart++;
        
        var todays = " UPDATE!"
        var todayt = "UP TRANSLATE"
        if(getday == 0){getday = 7;}
        else{getday = getday;}
        if(getday == data[index].Date && data[index].Status !== "end"){nam.innerHTML = data[index].Name; upd.innerHTML = todays;}
        else if(getday - 1 == data[index].Date && data[index].Status !== "end"){nam.innerHTML = data[index].Name; upt.innerHTML = todayt;}
        else if(getday == 1 && data[index].Status !== "end"){nam.innerHTML = data[index].Name; upt.innerHTML = todayt;}
        else{nam.innerHTML = data[index].Name;}
        if(data[index].Status != "end"){dat.innerHTML = "Date: " + covertdate(data[index].Date);}
        parr.innerHTML = "Part: " + data[index].Part;
        if(data[index].Status == "end"){dat.innerHTML = "Date: " + covertdate(data[index].Date) + " {END}";}
        but.appendChild(min);
    
        var newtoki = data[index].Newtoki;
        var newtoki_change = newtoki.slice(22, data[index].Newtoki.length + 1);
        var domain = data[data.length - 1].Newtoki.slice(0, 22);
        var changed = domain + newtoki_change;
        var pagecount = 0;
        if(data[index].Website == "yes"){pane.style.backgroundColor = "#ffbde9"; eachone(data[index].Name);}
        else{pane.style.backgroundColor = "#a1fffc";}
        if(data[index].Translate != "n"){a1.innerHTML = "<a href=" + data[index].Translate + ">English</a>";}
        if(data[index].Newtoki != "n"){a2.innerHTML = "<a href=" + changed + ">RawL</a>" + " :: ";}
        if(data[index].Rawweb != "n"){a3.innerHTML = "<a href=" + data[index].Rawweb + ">RawM</a>" + " :: ";}
        if(data[index].Otherweb != "n"){a4.innerHTML = " :: <a href=" + data[index].Otherweb + ">Other</a>";}
        //if(data[index].Myweb != "n"){a5.innerHTML = " :: <a href=" + data[index].Otherweb + ">SubRawL</a>";}
        if(data[index].Number % 5 == 1){par.innerHTML = "Part " + data[index].Part + " <a href='index.html'>Back</a>"; part.shift(); mainshow.appendChild(br); mainshow.appendChild(par); pagecount++;}
        var random;
        if(data[index].Date == "n" && data[index].Status != "end"){
            random = Math.random() < 0.5;
            if(random){nam.innerHTML = data[index].Name; upt.innerHTML = "May Update Check!";}
        }

        mainshow.style.width = "320px";
        nam.style.fontWeight = "900";
        nam.style.fontSize = "20px";
        nam.style.backgroundColor = "yellow";
        nam.style.padding = "7px";
        nam.style.borderRadius = "10px";
        cov.style.border = '5px solid black';
        cov.style.padding = "3px";
        cov.style.backgroundColor = "black";
        cov.style.borderRadius = "10px";
        min.style.borderRadius = "10px";
        pane.style.padding = "5px";
        but.style.fontFamily = "Brush Script MT";
        pane.style.borderRadius = "10px";
        pane.style.fontSize = "18px";
        par.style.marginLeft = "auto";
        par.style.marginRight = "auto";
        par.style.width = "300px";
        par.style.padding = "5px";
        par.style.backgroundColor = "#34abeb";
        par.style.borderRadius = "10px";
        par.style.textAlign = "center";
        par.style.fontStyle = "bold";
        but.style.backgroundColor = "#49eb34";
        but.style.borderRadius = "10px";
        cen.style.textAlign = "center";
        pic.style.display = "none";
        upd.style.textAlign = "center";
        upd.style.backgroundColor = "red";
        upd.style.fontSize = "27px";
        upd.style.borderRadius = "8px";
        upt.style.textAlign = "center";
        upt.style.backgroundColor = "#5a42f5";
        upt.style.fontSize = "24px";
        upt.style.borderRadius = "8px";
        panepic.style.float = "right";
        paneinfo.style.width = "200px";
        paneinfo.style.float = "left";
        if(window.innerWidth > 1000){
            //document.getElementById("changers").style.position = "sticky";
            //document.getElementById("changers").style.top = "10px";
            nam.style.fontSize = "22px";
            panepic.style.width = "110px";
            pane.style.fontSize = "18px";
            pane.style.textAlign = "left";
            cov.setAttribute('width', 294);
            min.setAttribute('width', 100);
            min.onclick = () => {
            if(min.offsetWidth == 100){
                min.style.width = "310px";
                panepic.style.float = "left";
                paneinfo.style.display = "none";
                but.style.display = "none";
            }
            else{
                min.style.width = "100px";
                panepic.style.float = "right";
                paneinfo.style.display = "block";
                but.style.display = "block";
                but.style.marginLeft = "auto";
                but.style.marginRight = "auto";
            }
            
        }
    }
        else{
            cov.setAttribute('width', 294);
            min.setAttribute('width', 85);
            panepic.style.width = "90px";
            min.onclick = () => {
            if(min.offsetWidth == 85){
                min.style.width = "310px";
                panepic.style.float = "left";
                paneinfo.style.display = "none";
                but.style.display = "none";
            }
            else{
                min.style.width = "85px";
                panepic.style.float = "right";
                paneinfo.style.display = "block";
                but.style.display = "block";
                but.style.marginLeft = "auto";
                but.style.marginRight = "auto";
            }
        }
    }

    if(window.innerWidth > 1200){
        var disr = document.createElement("div");
        document.getElementById("contrainer").style.width = "650px";
        document.getElementById("contrainer").style.overflow = "hidden";
        pane.style.gap = "10px";
        pane.style.width = "310px";
        //par.style.display = "none";
        par.style.gridColumn = "1 / span 2"

        document.getElementById("contrainer").style.display = "grid";
        document.getElementById("contrainer").style.gridTemplateColumns.repeat = "3, 2fr";
        document.getElementById("contrainer").style.gap = "10px";
        document.getElementById("contrainer").style.gridAutoFlow = "row";
        document.getElementById("contrainer").style.gridAutoRows.minmax = "0, auto";
    }
        if(name == "null"){par.innerHTML = "Part " + partt.toString() + " <a href='index.html'>Back</a>";}
        
        mainshow.appendChild(pane);
        if(getday == data[index].Date && data[index].Status !== "end"){pane.appendChild(upd);}
        if(getday - 1 == data[index].Date && data[index].Status !== "end"){pane.appendChild(upt);}
        if(data[index].Date == "n"){pane.appendChild(upt); upt.style.backgroundColor = "#5ea671";}
        if(getday == 1 && data[index].Status !== "end" && data[index].Date == 7){pane.appendChild(upt);}
        if(window.innerWidth <= 1200){mainshow.appendChild(br);}
        pane.appendChild(nam);
        paneinfo.appendChild(parr);
        paneinfo.appendChild(dat);
        paneinfo.appendChild(web);
        paneinfo.appendChild(a3);
        paneinfo.appendChild(a2);
        paneinfo.appendChild(a1);
        paneinfo.appendChild(a5);
        paneinfo.appendChild(a4);
        paneinfo.appendChild(br);
        paneinfo.appendChild(pic);
        cen.appendChild(but);
        pic.appendChild(cov);
        pane.appendChild(panepic);
        pane.appendChild(paneinfo);
        panepic.appendChild(min);
        pane.appendChild(cen);
        if(window.innerWidth <= 1200){mainshow.appendChild(br);}
        co++;
        but.innerHTML = "Number " + data[index].Number;
        but.onclick = () => {
            eachpic(data[index].Name);
        }
        
        if(getday == data[index].Date && data[index].Status !== "end"){normalheight = nam.offsetHeight + upd.offsetHeight + min.offsetHeight + 5;}
        else if(getday - 1 == data[index].Date && data[index].Status !== "end"){normalheight = nam.offsetHeight + upt.offsetHeight + min.offsetHeight + 5;}
        else if(getday == 1 && data[index].Status !== "end"){normalheight = nam.offsetHeight + upt.offsetHeight + min.offsetHeight + 5;}
        else{normalheight = nam.offsetHeight + min.offsetHeight + 10;}
        pane.style.overflow = "hidden";

        function eachpic(name){
            document.getElementById("showlater").style.display = "none";
            fetch(datause).then(resultz=>resultz.text()).then(function (csvtextz){return csv().fromString(csvtextz);}).then(function(csvz){
                read(csvz);
            });
            function read(dataz){
                window.scrollTo(0, 0);
                var link = [];
                var panez = document.getElementById("contrainer");
                var couz = document.getElementById("mes");
                var back = document.createElement("button");
                var chap = document.createElement("button");
                var dark = document.createElement("button");
                var counts = document.createElement("label");
                couz.innerHTML = "";
                panez.innerHTML = "";
                var se = document.getElementById("se");
                try{se.remove();}catch(Error){}
                back.innerHTML = "Back"
                back.style.fontFamily = "Brush Script MT";
                back.style.backgroundColor = "#49eb34";
                back.style.borderRadius = "10px";
                back.onclick = () => {location.reload();}
                //dark pic
                dark.innerHTML = "Dark Picture(Please avoid)";
                dark.style.fontFamily = "Brush Script MT";
                dark.style.backgroundColor = "#49eb34";
                dark.style.borderRadius = "10px";
                dark.onclick = () => {
                    darks(name);
                }
                couz.appendChild(back);
                couz.appendChild(dark);
                
                for(i = 0; i < dataz.length; i++){
                    var picz = document.createElement("img");
                    if(dataz[i].Name == name){
                        try{var up = document.getElementById("qr");
                        up.style.display = "none";}catch(error){}
                        var na = document.getElementById("contenth2");
                        na.innerHTML = name;
                        link.push(dataz[i].Link);
                        var all = link.length;
                        picz.setAttribute('src', dataz[i].Link);
                        picz.setAttribute('width', 310);
                        panez.appendChild(picz);
                        counts.innerHTML = " All: " + all + " ";
                        panez.style.backgroundColor = "#e6f542";
                        picz.style.border = "5px solid black"
                        picz.style.textAlign = "center";
                        picz.style.marginLeft = "auto";
                        picz.style.marginRight = "auto";
                        picz.style.borderRadius = "5px";
                        chap.innerHTML = "Read";
                        chap.style.fontFamily = "Brush Script MT";
                        chap.style.backgroundColor = "#49eb34";
                        chap.style.borderRadius = "10px";
                        chap.onclick = () => {
                            eachonev2(name);
                        }
                        var intz = info_name.indexOf(name);
                        if(data[intz].Website == "yes"){couz.appendChild(chap);}
                        couz.appendChild(counts);
                        
                        
                        //couz.appendChild(dark);
                        
                    }
                    
                }
                
            }
        
        }
        function darks(name){
            document.getElementById("showlater").style.display = "none";
            fetch(datadark).then(resultz=>resultz.text()).then(function (csvtextz){return csv().fromString(csvtextz);}).then(function(csvz){
                ok(csvz);
            });
                function ok(data){
                    window.scrollTo(0, 0);
                    var panez = document.getElementById("contrainer");
                    var couz = document.getElementById("mes");
                    var back = document.createElement("button");
                    var read = document.createElement("button");
                    var pics = document.createElement("button");
                    var told = document.createElement("label");

                    couz.innerHTML = "";
                    panez.innerHTML = "";
                    back.innerHTML = "Back";
                    back.onclick = () => {location.reload();}
                    pics.innerHTML = "Picture";
                    pics.onclick = () => {eachpic(name);}
                    read.innerHTML = "Read";
                    read.onclick = () => {eachonev2(name);}
                    back.style.fontFamily = "Brush Script MT";
                    back.style.backgroundColor = "#49eb34";
                    back.style.borderRadius = "10px";
                    pics.style.fontFamily = "Brush Script MT";
                    pics.style.backgroundColor = "#49eb34";
                    pics.style.borderRadius = "10px";
                    read.style.fontFamily = "Brush Script MT";
                    read.style.backgroundColor = "#49eb34";
                    read.style.borderRadius = "10px";
                    couz.appendChild(back);
                    couz.appendChild(pics);
                    couz.appendChild(read);

                    for(j = 0; j < data.length; j++){
                        if(data[j].Name == name){
                            var picd = document.createElement("img");
                            picd.setAttribute('src', data[j].PictureLink);
                            picd.setAttribute('width', 310);
                            
                            picd.style.border = "5px solid black"
                            picd.style.textAlign = "center";
                            picd.style.marginLeft = "auto";
                            picd.style.marginRight = "auto";
                            picd.style.borderRadius = "5px";

                            panez.appendChild(picd);
                        }
                            
                    }
                    told.innerHTML = "Go to Private Page for clear displaying."
                    panez.appendChild(told);
                }
            
        }

        function eachone(namef){
            window.scrollTo(0, 0);
            //Each Manhwa
            var index;
            var link;
            var topic = [];
            var info1 = [];
            var info2 = [];
            var statu = [];
            var qr = document.getElementById("mes");
            var br = document.createElement("br");
            var cname = document.getElementById("contenth2");
            var cmanhwacover = document.createElement("img");
            var ccaptionkeeper = document.createElement("div");
            var ccaption = document.createElement("div");
            var cchapterkeeper = document.createElement("div");
            var cnovtranslabel = document.createElement("div");
            var cnovelcover = document.createElement("img");
            var csearchname = document.createElement("button");
            var back1 = document.createElement("button");
            var back2 = document.createElement("button");
            var id = document.getElementById("qr");
            var se = document.getElementById("se");

            cmanhwacover.onclick = () => {eachpic(namef)}
            back1.style.fontFamily = "Brush Script MT";
            back2.style.fontFamily = "Brush Script MT";
            back1.style.backgroundColor = "#49eb34";
            back1.style.borderRadius = "10px";
            back2.style.backgroundColor = "#49eb34";
            back2.style.borderRadius = "10px";
                        
            eachbutton.innerHTML = "here";
            eachbutton.style.fontFamily = "Brush Script MT";
            web.innerHTML = "Website: ";
            eachbutton.style.backgroundColor = "#49eb34";
            eachbutton.style.borderRadius = "10px";
            web.appendChild(eachbutton);
            eachbutton.addEventListener("click", function(){
                se.remove();
                if(window.innerWidth < 1000){id.remove();}
                mainshow.innerHTML = "";
                mainshow.style.backgroundColor = "#b8edfc";
                back1.innerHTML = "Back";
                back1.addEventListener("click", function(){
                    window.location.reload();
                });
                qr.innerHTML = "";
                mainshow.innerHTML = "Soon...";
                qr.appendChild(back1);
                back2.innerHTML = "Back";
                back2.addEventListener("click", function(){
                    window.location.reload();
                });
                cname.innerHTML = namef;
                cname.style.backgroundColor = "yellow";
                index = datanames.indexOf(namef);
                link = datalocas[index];
                
                var brr1 = document.createElement("br");
                var aa1 = document.createElement("a");
                var aa2 = document.createElement("a");
                var aa3 = document.createElement("a");
                var aa4 = document.createElement("a");
                var pa = document.createElement("div");
                document.getElementById("showlater").style.display = "block";
                if(data[index].Translate != "n"){aa1.innerHTML = " <a href=" + data[index].Translate + ">English</a> ";}
                if(data[index].Newtoki != "n"){aa2.innerHTML = " <a href=" + changed + ">RawL</a> ";}
                if(data[index].Rawweb != "n"){aa3.innerHTML = " <a href=" + data[index].Rawweb + ">RawM</a> ";}
                if(data[index].Otherweb != "n"){aa4.innerHTML = " <a href=" + data[index].Otherweb + ">Other</a> ";}
                pa.innerHTML = "Part: " + data[index].Part;

                document.getElementById("showlater").appendChild(brr1);
                document.getElementById("showlater").appendChild(pa);
                document.getElementById("showlater").appendChild(aa1);
                document.getElementById("showlater").appendChild(aa2);
                document.getElementById("showlater").appendChild(aa3);
                document.getElementById("showlater").appendChild(aa4);

                
                var linkget = link.replace("edit?usp=sharing", "export?format=csv")
                fetch(linkget).then(resultt=>resultt.text()).then(function (csvtextt){return csv().fromString(csvtextt);}).then(function(csvt){getinfolink(csvt);});
                function getinfolink(datas){
                    mainshow.innerHTML = "";
                    for(var p = 0; p < datas.length; p++){
                        topic.push(datas[p].Topic);
                        info1.push(datas[p].Info1);
                        info2.push(datas[p].Info2);
                        statu.push(datas[p].Status);
                    }
                    cmanhwacover.setAttribute('src', datas[4].Info1);
                    cmanhwacover.setAttribute('width', 294);
                    ccaptionkeeper.innerHTML = "Caption";
                    ccaption.innerHTML = datas[5].Info1;
                    cchapterkeeper.innerHTML = "Chapter";

                    cmanhwacover.style.border = '2px solid black';
                    cmanhwacover.style.padding = "3px";
                    cmanhwacover.style.width = "310px";
                    cmanhwacover.style.backgroundColor = "black";
                    cmanhwacover.style.borderRadius = "10px";
                    ccaptionkeeper.style.backgroundColor = "light green";
                    ccaptionkeeper.style.border = "2px solid black";
                    ccaptionkeeper.style.borderRadius = "10px";
                    ccaptionkeeper.style.padding = "5px";
                    ccaption.style.backgroundColor = "yellow";
                    ccaption.style.border = "2px solid black";
                    ccaption.style.borderRadius = "10px";
                    ccaption.style.padding = "5px";
                    cchapterkeeper.style.backgroundColor = "light green";
                    cchapterkeeper.style.border = "2px solid black";
                    cchapterkeeper.style.borderRadius = "10px";
                    cchapterkeeper.style.padding = "5px";
                    
                    mainshow.appendChild(cmanhwacover);
                    mainshow.append(br);
                    mainshow.append(ccaptionkeeper);
                    mainshow.append(ccaption);
                    mainshow.append(cchapterkeeper);
                    for(var e = 9; e < datas.length; e++){
                        chapter();
                        if(datas[e].Info2 != "n"){
                            chapter2();
                        }
                        if(datas[e].Status == "END" && datas[2].Info1 == "yes"){
                            cnovtranslabel.innerHTML = "SideStory self translation"
                            cnovelcover.setAttribute('src', datas[3].Info1);
                            cnovelcover.setAttribute('width', 294);
                            cnovelcover.style.border = '2px solid black';
                            cnovelcover.style.padding = "3px";
                            cnovelcover.style.width = "310px";
                            cnovelcover.style.backgroundColor = "black";
                            cnovelcover.style.borderRadius = "10px";
                            cnovtranslabel.style.backgroundColor = "#f5ad42";
                            cnovtranslabel.style.border = "2px solid black";
                            cnovtranslabel.style.borderRadius = "10px";
                            cnovtranslabel.style.padding = "5px";
                            mainshow.appendChild(cnovtranslabel);
                            mainshow.appendChild(cnovelcover);
                            
                        }
                    }
                    
                    function chapter(){
                        var cchapter = document.createElement("a");
                        if(datas[e].Status == "n"){
                            cchapter.innerHTML = "<a href=" + datas[e].Info1 + ">" + datas[e].Topic + "</a><br>";
                            mainshow.appendChild(cchapter);
                        }
                        else{
                            cchapter.innerHTML = "<a href=" + datas[e].Info1 + ">" + datas[e].Topic + "</a> " + datas[e].Status +"<br>";
                            mainshow.appendChild(cchapter);
                        }
                    }
                    function chapter2(){
                        var cchapter = document.createElement("a");
                        cchapter.innerHTML = "<a href=" + datas[e].Info2 + ">" + datas[e].Topic + " part 2" + "</a><br>";
                        mainshow.appendChild(cchapter);
                    }
                    var cggdrive1 = document.createElement("a");
                    var cggdrive2 = document.createElement("a");
                    var cggdrive3 = document.createElement("a");
                    var cggdrive4 = document.createElement("a");
                    var cggdrive5 = document.createElement("a");
                    var cggdrive6 = document.createElement("a");
                    mainshow.appendChild(cggdrive1);
                    cggdrive1.innerHTML = "<br><a href=" + datas[6].Info1 + ">Google Drive I</a><br><br>";
                    if(datas[7].Info1 != "n"){
                        cggdrive2.innerHTML = "<a href=" + datas[7].Info1 + ">Google Drive II</a><br><br>";
                        mainshow.appendChild(cggdrive2);
                    }
                    if(datas[8].Info1 != "n"){
                        cggdrive3.innerHTML = "<a href=" + datas[8].Info1 + ">Google Drive III</a><br><br>";
                        mainshow.appendChild(cggdrive3);
                    }
                    if(datas[6].Info2 != "n"){
                        cggdrive4.innerHTML = "<a href=" + datas[6].Info2 + ">Google Drive IV</a><br><br>";
                        mainshow.appendChild(cggdrive4);
                    }
                    if(datas[7].Info2 != "n"){
                        cggdrive5.innerHTML = "<a href=" + datas[7].Info2 + ">Google Drive V</a><br><br>";
                        mainshow.appendChild(cggdrive5);
                    }
                    if(datas[8].Info2 != "n"){
                        cggdrive6.innerHTML = "<a href=" + datas[8].Info2 + ">Google Drive VI</a><br><br>";
                        mainshow.appendChild(cggdrive6);
                    }
                    
                    mainshow.appendChild(back2);
                    var namedearch = "https://www.google.com/search?q=" + datas[1].Info1 + "+manhwa";
                    csearchname.innerHTML = " <a href=" + namedearch + ">manhwa error? click here</a>"
                    mainshow.appendChild(csearchname);
                }
                
            });
            
        }
        function eachonev2(namef){
            
            //Each Manhwa
            var index;
            var link;
            var topic = [];
            var info1 = [];
            var info2 = [];
            var statu = [];
            var qr = document.getElementById("mes");
            var br = document.createElement("br");
            var cname = document.getElementById("contenth2");
            var cmanhwacover = document.createElement("img");
            var ccaptionkeeper = document.createElement("div");
            var ccaption = document.createElement("div");
            var cchapterkeeper = document.createElement("div");
            var cnovtranslabel = document.createElement("div");
            var cnovelcover = document.createElement("img");
            var csearchname = document.createElement("button");
            var back1 = document.createElement("button");
            var back2 = document.createElement("button");

            cmanhwacover.onclick = () => {eachpic(namef)}
            back1.style.fontFamily = "Brush Script MT";
            back2.style.fontFamily = "Brush Script MT";
            back1.style.backgroundColor = "#49eb34";
            back1.style.borderRadius = "10px";
            back2.style.backgroundColor = "#49eb34";
            back2.style.borderRadius = "10px";
                        
                mainshow.innerHTML = "";
                mainshow.style.backgroundColor = "#b8edfc";
                back1.innerHTML = "Back";
                back1.addEventListener("click", function(){
                    window.location.reload();
                });
                qr.innerHTML = "";
                qr.appendChild(back1);
                back2.innerHTML = "Back";
                back2.addEventListener("click", function(){
                    window.location.reload();
                });
                cname.innerHTML = namef;
                cname.style.backgroundColor = "yellow";
                index = datanames.indexOf(namef);
                link = datalocas[index];

                var brr1 = document.createElement("br");
                var aa1 = document.createElement("a");
                var aa2 = document.createElement("a");
                var aa3 = document.createElement("a");
                var aa4 = document.createElement("a");
                var pa = document.createElement("div");
                document.getElementById("showlater").style.display = "block";
                if(data[index].Translate != "n"){aa1.innerHTML = " <a href=" + data[index].Translate + ">English</a> ";}
                if(data[index].Newtoki != "n"){aa2.innerHTML = " <a href=" + changed + ">RawL</a> ";}
                if(data[index].Rawweb != "n"){aa3.innerHTML = " <a href=" + data[index].Rawweb + ">RawM</a> ";}
                if(data[index].Otherweb != "n"){aa4.innerHTML = " <a href=" + data[index].Otherweb + ">Other</a> ";}
                pa.innerHTML = "Part: " + data[index].Part;

                document.getElementById("showlater").appendChild(brr1);
                document.getElementById("showlater").appendChild(pa);
                document.getElementById("showlater").appendChild(aa1);
                document.getElementById("showlater").appendChild(aa2);
                document.getElementById("showlater").appendChild(aa3);
                document.getElementById("showlater").appendChild(aa4);

                var linkget = link.replace("edit?usp=sharing", "export?format=csv")
                fetch(linkget).then(resultt=>resultt.text()).then(function (csvtextt){return csv().fromString(csvtextt);}).then(function(csvt){getinfolink(csvt);});
                function getinfolink(datas){
                    for(var p = 0; p < datas.length; p++){
                        topic.push(datas[p].Topic);
                        info1.push(datas[p].Info1);
                        info2.push(datas[p].Info2);
                        statu.push(datas[p].Status);
                    }
                    cmanhwacover.setAttribute('src', datas[4].Info1);
                    cmanhwacover.setAttribute('width', 294);
                    ccaptionkeeper.innerHTML = "Caption";
                    ccaption.innerHTML = datas[5].Info1;
                    cchapterkeeper.innerHTML = "Chapter";

                    cmanhwacover.style.border = '2px solid black';
                    cmanhwacover.style.padding = "3px";
                    cmanhwacover.style.width = "310px";
                    cmanhwacover.style.backgroundColor = "black";
                    cmanhwacover.style.borderRadius = "10px";
                    ccaptionkeeper.style.backgroundColor = "light green";
                    ccaptionkeeper.style.border = "2px solid black";
                    ccaptionkeeper.style.borderRadius = "10px";
                    ccaptionkeeper.style.padding = "5px";
                    ccaption.style.backgroundColor = "yellow";
                    ccaption.style.border = "2px solid black";
                    ccaption.style.borderRadius = "10px";
                    ccaption.style.padding = "5px";
                    cchapterkeeper.style.backgroundColor = "light green";
                    cchapterkeeper.style.border = "2px solid black";
                    cchapterkeeper.style.borderRadius = "10px";
                    cchapterkeeper.style.padding = "5px";
                    
                    mainshow.appendChild(cmanhwacover);
                    mainshow.append(br);
                    mainshow.append(ccaptionkeeper);
                    mainshow.append(ccaption);
                    mainshow.append(cchapterkeeper);
                    for(var e = 9; e < datas.length; e++){
                        chapter();
                        if(datas[e].Info2 != "n"){
                            chapter2();
                        }
                        if(datas[e].Status == "END" && datas[2].Info1 == "yes"){
                            cnovtranslabel.innerHTML = "SideStory self translation"
                            cnovelcover.setAttribute('src', datas[3].Info1);
                            cnovelcover.setAttribute('width', 294);
                            cnovelcover.style.border = '2px solid black';
                            cnovelcover.style.padding = "3px";
                            cnovelcover.style.width = "310px";
                            cnovelcover.style.backgroundColor = "black";
                            cnovelcover.style.borderRadius = "10px";
                            cnovtranslabel.style.backgroundColor = "#f5ad42";
                            cnovtranslabel.style.border = "2px solid black";
                            cnovtranslabel.style.borderRadius = "10px";
                            cnovtranslabel.style.padding = "5px";
                            mainshow.appendChild(cnovtranslabel);
                            mainshow.appendChild(cnovelcover);
                            
                        }
                    }
                    
                    function chapter(){
                        var cchapter = document.createElement("a");
                        if(datas[e].Status == "n"){
                            cchapter.innerHTML = "<a href=" + datas[e].Info1 + ">" + datas[e].Topic + "</a><br>";
                            mainshow.appendChild(cchapter);
                        }
                        else{
                            cchapter.innerHTML = "<a href=" + datas[e].Info1 + ">" + datas[e].Topic + "</a> " + datas[e].Status +"<br>";
                            mainshow.appendChild(cchapter);
                        }
                    }
                    function chapter2(){
                        var cchapter = document.createElement("a");
                        cchapter.innerHTML = "<a href=" + datas[e].Info2 + ">" + datas[e].Topic + " part 2" + "</a><br>";
                        mainshow.appendChild(cchapter);
                    }
                    var cggdrive1 = document.createElement("a");
                    var cggdrive2 = document.createElement("a");
                    var cggdrive3 = document.createElement("a");
                    mainshow.appendChild(cggdrive1);
                    cggdrive1.innerHTML = "<br><a href=" + datas[6].Info1 + ">Google Drive I</a><br><br>";
                    if(datas[7].Info1 != "n"){
                        cggdrive2.innerHTML = "<a href=" + datas[7].Info1 + ">Google Drive II</a><br><br>";
                        mainshow.appendChild(cggdrive2);
                    }
                    if(datas[8].Info1 != "n"){
                        cggdrive3.innerHTML = "<a href=" + datas[8].Info1 + ">Google Drive III</a><br><br>";
                        mainshow.appendChild(cggdrive3);
                    }
                    
                    mainshow.appendChild(back2);
                    var namedearch = "https://www.google.com/search?q=" + datas[1].Info1 + "+manhwa";
                    csearchname.innerHTML = " <a href=" + namedearch + ">manhwa error? click here</a>"
                    mainshow.appendChild(csearchname);
                }
            
        }
        allcount.innerHTML = co;
        function checksize(size){
            if(size < 50){
                location.reload();
            }
        }
    }
    function expandContract() {
        const el = document.getElementById("expand-contract")
        el.classList.toggle('expanded')
        el.classList.toggle('collapsed')
     }
      
    
    function covertdate(date){

        var datelast = "";
        if(date == "1"){
            datelast = "Mon-Tue";
        }
        else if(date == "2"){
            datelast = "Tue-Wed";
        }
        else if(date == "3"){
            datelast = "Wed-Thu";
        }
        else if(date == "4"){
            datelast = "Thu-Fri";
        }
        else if(date == "5"){
            datelast = "Fri-Sat";
        }
        else if(date == "6"){
            datelast = "Sat-Sun";
        }
        else if(date == "7"){
            datelast = "Sun-Mon";
        }
        else if(date == "n"){
            datelast = "Unknown";
        }
        
        return datelast;
    }
}

var opensearch = document.getElementById("searchopen");
var minisearch = document.getElementById("searchpane");

function minisearchopen(){

    if(minisearch.style.display === "none"){
        minisearch.style.display = "block";
    }
    else{
        minisearch.style.display = "none"
    }
}