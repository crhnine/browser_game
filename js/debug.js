// JavaScript source code
        function OnSelectionChange (select) {
            var selectedOption = select.options[select.selectedIndex];


            if(selectedOption.value === "On"){
                var x = document.getElementsByClassName("box");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].style.border = "1px solid grey";
                    x[i].style.height = "47px";
                    x[i].style.width = "47px";
                                               }

                var red_box_01 = document.getElementsByClassName("character_placement");
                var l;
                for(l = 0; l < red_box_01.length; l++){


                red_box_01[l].style.border = "1px solid red";
                red_box_01[l].style.height = "65px";
                red_box_01[l].style.width = "47px";
                                                      }
                var coordinate_display = document.getElementsByClassName("coordinate_display");
                var m;
                for(m = 0; m < coordinate_display.length; m++){

                coordinate_display[m].style.display = "inline-block";
                }           

                var border_01 = document.getElementsByClassName("border");
                var p;
                for(p = 0; p < border_01.length; p++){

                border_01.style.backgroundColor = "#303030";

                }
            }


            if(selectedOption.value === "Off"){            
                var y = document.getElementsByClassName("box");
                var j;
                for (j = 0; j < y.length; j++) {
                    y[j].style.border = "none";
                    y[j].style.height = "49px";
                    y[j].style.width = "49px";
                                               }
                

                var red_box = document.getElementsByClassName("character_placement");
                var k;
                for (k = 0; k < red_box.length; k++){


                red_box[k].style.border = "none";
                red_box[k].style.height = "67px";
                red_box[k].style.width = "49px";


                                                    }

                var coordinate_display_01 = document.getElementsByClassName("coordinate_display");
                var n;
                for(n = 0;n < coordinate_display_01.length;n++){

                coordinate_display_01[n].style.display = "none";

                var border = document.getElementsByClassName("border");
                var o;
                for(o = 0; o < border.length; o++){

                border[o].style.backgroundColor = "transparent";

                }

                }
            }
        }