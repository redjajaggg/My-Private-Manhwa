if(window.innerWidth <= 400){
    document.getElementById("check_head1").style.display = "none";
    document.getElementById("pages").style.display = "none";
    function myFunction(){
        if(document.getElementById("myDropdown").style.display == "block"){
            document.getElementById("myDropdown").style.display = "none";
        }
        else{
            document.getElementById("myDropdown").style.display = "block";
        }
    };
}
else{
    document.getElementById("check_head2").style.display = "none";
}
