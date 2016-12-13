// JavaScript source code
// 11.16.16 



function interaction(e){
    
    
    if(e.keyCode === 73){//On keypress of "I" do this...
    
        var menu_container = document.getElementById('menu_container');
        if(menu_container.style.display === "none"){
            menu_container.style.display = "block";
            
            
        }
        else{
        menu_container.style.display = "none";
        }
    
    }
}



document.addEventListener('keydown', interaction, false);