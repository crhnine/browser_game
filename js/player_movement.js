           var initial_spawn = document.getElementById('grid_1_4_A');//Player Starting point subject to be changed based on map or random selection between a few points to possibly add challenge.
           initial_spawn.className = "character_placement red_background";
           var letter_indeces = [
                
                "A",
                "B",
                "C",
                "D"
            ];
            
            //All coordinates
            var find_grid = document.getElementsByClassName("character_placement");
            var i;
            for(i = 0;i < find_grid.length;i++){
                
               
                //This displays the coordinate id of all of the grid boxes;
                //document.getElementById('output_grids_id').innerHTML += find_grid[i].id + "<br />";
                
                //This section splits all of the ids at the "_" character and places them into an array. [0] = "grid",...;
                var split_id_string = find_grid[i].id;
                var split_id = split_id_string.split("_");
                //document.getElementById('split_grids_id').innerHTML += split_id + "<br/>";
                
            }
            //This just tracks where the player is in relation to a class name;
            var find_location = document.getElementsByClassName("red_background");
            var character_placement = find_location[0].id;
            var split_character_placement = character_placement.split("_");
            
            //This displays the coordinate id of the character placement;
            document.getElementById('output_box').innerHTML = character_placement;
            //This displays the split coordinate id of the character placement;
            //document.getElementById('split_output_box').innerHTML = split_character_placement;
            
            
            //What we need to do is this:
            /*
             * 
             * 1. Split the id based on "_";
             * 2. This will put "grid", "1", "4", and "A" into an array for initial grid with 0 never changing;
             * 3. Create an array for the [3] index or letters so numbers can be used. OR go back and change the subsets to numbers...either way works.
             * 4. On keypress of "D" (right) Add 1 to the [2] of the string array IF [3] == [1] OR [3] in its own index which are the only instances column number can increase;
             * 5. Retreive typeof of requested id and if it is undefined reset the needed id back to what it last was.
             */
            
            
            function character_movement(e){
                
                if(e.keyCode === 68){//Move right on keypress of "d" WORKING
                        
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    var k;
                    var l;
                    var pseudo_array_length_01 = 4;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            stringify_find_impassable_id = find_impassable_id.toString();
                            sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;

                            impassable_locations_array.push(impassable_locations);
                            console.log("ila  " + impassable_locations_array[l]);
                    }//All impassable locations have been pulled successfully from this script.
                    
                    //Three things are needed to create an impassable barrier
                    /*
                     * 1. Impassable locations into an array. (impassable_locations_array)
                     * 2. Starting position of player during keypress. (character_placement) Need to re-add "red_background" class.
                     * 3. Where the player would be going if the keypress were successful.  
                     */
                        
                    //This finds the current element with the class of red_background. In this example there will be only one element with this particular class at any given time.
                    var find_location = document.getElementsByClassName("red_background");
                    
                    var character_placement = find_location[0].id;
                    document.getElementById(character_placement).className = "character_placement";//Officially removes red_background class from the original or previous character placement coordinate;
                   
                    var split_character_placement = character_placement.split("_");//Id of character placement is now in in array;
                    
                    var scp_grid = split_character_placement[0];//grid
                    var scp_row_initial = split_character_placement[1];//1, 2, 3, or 4
                    var scp_cell_initial = split_character_placement[2];//1, 2, 3, or 4
                    var scp_subset_array = split_character_placement[3];//A, B, C, or D Needs to be checked what letter_indeces does this match?
                    
                    //document.getElementById('check_scp_output').innerHTML = scp_grid + scp_row_initial + scp_cell_initial + scp_subset_array + "<br/>" + letter_indeces[0] + letter_indeces[1] + letter_indeces[2] + letter_indeces[3];
                    
                    var new_scp_grid = scp_grid;//grid
                    var new_scp_row_initial;
                    var new_scp_cell_initial;
                    var new_scp_subset_array;
                    var original_character_placement_id;
                    var new_character_placement_id;
                    
                    if(scp_subset_array === letter_indeces[1]){//Subset B ===> A Column change

                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background.
                        //new_character_placement_id is to be new id for the cell the character moves to;
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial + 1;
                        new_scp_cell_initial = new_scp_cell_initial.toString();                                              
                                                
                        new_scp_subset_array = letter_indeces[0];
                        
                        original_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){//This is close to what we are going to need to define impassable boundaries. 

                            document.getElementById(original_character_placement_id).className = "character_placement red_background";
                        }
                        
                        var new_character_placement_check = new_scp_row_initial + new_scp_cell_initial + new_scp_subset_array;
                        var m;
                        for(m = 0;m < impassable_locations_array.length;m++){
                            var compare_01 = new_character_placement_check.toString();
                            var compare_02 = impassable_locations_array[m].toString();
                            
                            console.log("Type of comparisons: " + typeof(compare_01) + " " + typeof(compare_02))
                            var string_comparison = compare_01.localeCompare(compare_02);
                            console.log("String comparison" + string_comparison);
                            
                            while(string_comparison === 0){
                                
                                console.log("Comparison check new_character_placement_id  " + new_character_placement_id);
                                document.getElementById(original_character_placement_id).className = "character_placement red_background";
                                document.getElementById(new_character_placement_id).className = "character_placement";
                                
                                return false;//Enusres loop only runs once.
                                
                            }
                        
                                
                                document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                            
                        }
                        
                        
                        
                        /*
                        * 1. Find all zone_container(s) with the class of impassable.
                        * 2. Retrieve id(s) of the zone_container(s)
                        * 3. Split said id(s)
                        * 4. Find character_placement id and split. Set this to a separate variable so we can reset after comparison.
                        * 5. Compare character_placement id to zone_container id then reset character_placement to reset point if they match.
                        * 6. This needs to be done on every key press so the page knows when to fire the function and do the check as well as having access to character_placement values.
                        * 
                        */
                       
                        console.log("original row initial" + scp_row_initial + "new row initial" + new_scp_row_initial);                        
                        console.log("original_cell_initial" + scp_cell_initial + "new_cell_initial" + new_scp_cell_initial);
                        console.log("original subset array" + scp_subset_array + "new subset array" + new_scp_subset_array);
                        

                        

                        
                        
                        
                        
                    }
                    else if(scp_subset_array === letter_indeces[3]){//Subset D ===> C Column change
                       
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background;
                        //There has to be separation because the new subset array is going to vary depending on up or down in cell container;
                        //new_character_placement_id is to be new id for the cell the character moves to; 
                        
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial + 1;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[2];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                    }
                    
                    else if(scp_subset_array === letter_indeces[0]){//Subset A ===> B No column change

                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[1];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                       
                        
                    }
                    else{ //letter_indeces[2] Subset C ===> D No column change
                        
                        //Row unchanged in left to right
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        //Column changed in left to right if start in letter_indeces[1] or [3]
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        //Chaging subset_array to new character
                        new_scp_subset_array = letter_indeces[3];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                    
                    }
                    
                }//END RIGHT PRESS
                
                
                
                if(e.keyCode === 65){//Move left on kepress of "a" WORKING
                    
                    //This finds the current element with the class of red_background. In this example there will be only one element with this particular class at any given time.
                    var find_location = document.getElementsByClassName("red_background");
                    
                    var character_placement = find_location[0].id;
                    document.getElementById(character_placement).className = "character_placement";//Officially removes red_background class from the original or previous character placement coordinate;
                   
                    var split_character_placement = character_placement.split("_");//Id of character placement is now in array;
                    
                    var scp_grid = split_character_placement[0];//grid
                    var scp_row_initial = split_character_placement[1];//1, 2, 3, or 4
                    var scp_cell_initial = split_character_placement[2];//1, 2, 3, or 4
                    var scp_subset_array = split_character_placement[3];//A, B, C, or D Needs to be checked what letter_indeces does this match?
                    
                    //document.getElementById('check_scp_output').innerHTML = scp_grid + scp_row_initial + scp_cell_initial + scp_subset_array + "<br/>" + letter_indeces[0] + letter_indeces[1] + letter_indeces[2] + letter_indeces[3];
                    
                    var new_scp_grid = scp_grid;//grid
                    var new_scp_row_initial;
                    var new_scp_cell_initial;
                    var new_scp_subset_array;
                    var new_character_placement_id;
                    
                    if(scp_subset_array === letter_indeces[1]){//Subset B ===> A Column change
                        
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background.
                        //new_character_placement_id is to be new id for the cell the character moves to;
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[0];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                        
                        
                    }
                    else if(scp_subset_array === letter_indeces[3]){//Subset D ===> C Column change
                       
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background;
                        //There has to be separation because the new subset array is going to vary depending on up or down in cell container;
                        //new_character_placement_id is to be new id for the cell the character moves to; 
                        
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[2];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                    }
                    
                    else if(scp_subset_array === letter_indeces[0]){//Subset A ===> B No column change

                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial - 1;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[1];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                       
                        
                    }
                    else{ //letter_indeces[2] Subset C ===> D No column change
                        
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial - 1;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[3];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                                                
                        
                        
                    }
                    
                }//END LEFT PRESS
                
                
                if(e.keyCode === 83){//Move down on kepress of "s"
                    
                    //This finds the current element with the class of red_background. In this example there will be only one element with this particular class at any given time.
                    var find_location = document.getElementsByClassName("red_background");
                    
                    var character_placement = find_location[0].id;
                    document.getElementById(character_placement).className = "character_placement";//Officially removes red_background class from the original or previous character placement coordinate;
                   
                    var split_character_placement = character_placement.split("_");//Id of character placement is now in array;
                    
                    var scp_grid = split_character_placement[0];//grid
                    var scp_row_initial = split_character_placement[1];//1, 2, 3, or 4
                    var scp_cell_initial = split_character_placement[2];//1, 2, 3, or 4
                    var scp_subset_array = split_character_placement[3];//A, B, C, or D Needs to be checked what letter_indeces does this match?
                    
                    //document.getElementById('check_scp_output').innerHTML = scp_grid + scp_row_initial + scp_cell_initial + scp_subset_array + "<br/>" + letter_indeces[0] + letter_indeces[1] + letter_indeces[2] + letter_indeces[3];
                    
                    var new_scp_grid = scp_grid;//grid
                    var new_scp_row_initial;
                    var new_scp_cell_initial;
                    var new_scp_subset_array;
                    var new_character_placement_id;
                    
                    if(scp_subset_array === letter_indeces[1]){//Subset B ===> D No row change
                        
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background.
                        //new_character_placement_id is to be new id for the cell the character moves to;
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[3];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                        
                        
                    }
                    else if(scp_subset_array === letter_indeces[3]){//Subset D ===> B Row change
                       
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background;
                        //There has to be separation because the new subset array is going to vary depending on up or down in cell container;
                        //new_character_placement_id is to be new id for the cell the character moves to; 
                        
                        scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = scp_row_initial + 1;
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        new_scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.                       
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[1];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                    }
                    
                    else if(scp_subset_array === letter_indeces[0]){//Subset A ===> C No row change

                        
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background.
                        //new_character_placement_id is to be new id for the cell the character moves to;
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[2];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                       
                        
                    }
                    else{ //letter_indeces[2] Subset C ===> A Row change
                        
                        scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = scp_row_initial + 1;
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[0];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                                                
                        
                        
                    }

                    
                }//END DOWN PRESS
                
                
                if(e.keyCode === 87){//Move up on kepress of "w"
                    
                    //This finds the current element with the class of red_background. In this example there will be only one element with this particular class at any given time.
                    var find_location = document.getElementsByClassName("red_background");
                    
                    var character_placement = find_location[0].id;
                    document.getElementById(character_placement).className = "character_placement";//Officially removes red_background class from the original or previous character placement coordinate;
                   
                    var split_character_placement = character_placement.split("_");//Id of character placement is now in array;
                    
                    var scp_grid = split_character_placement[0];//grid
                    var scp_row_initial = split_character_placement[1];//1, 2, 3, or 4
                    var scp_cell_initial = split_character_placement[2];//1, 2, 3, or 4
                    var scp_subset_array = split_character_placement[3];//A, B, C, or D Needs to be checked what letter_indeces does this match?
                    
                    //document.getElementById('check_scp_output').innerHTML = scp_grid + scp_row_initial + scp_cell_initial + scp_subset_array + "<br/>" + letter_indeces[0] + letter_indeces[1] + letter_indeces[2] + letter_indeces[3];
                    
                    var new_scp_grid = scp_grid;//grid
                    var new_scp_row_initial;
                    var new_scp_cell_initial;
                    var new_scp_subset_array;
                    var new_character_placement_id;
                    
                    if(scp_subset_array === letter_indeces[1]){//Subset B ===> D Row change
                        
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background.
                        //new_character_placement_id is to be new id for the cell the character moves to;
                        scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = scp_row_initial - 1;
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        new_scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[3];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                        
                        
                    }
                    else if(scp_subset_array === letter_indeces[3]){//Subset D ===> B No row change
                       
                        //Write logic here to add 1 to cell_initial in the character placement and set character placement as needed;
                        //Once added 1 to cell_initial we need to reform all four id representatives and then stylize the given coordinate's id with red background;
                        //There has to be separation because the new subset array is going to vary depending on up or down in cell container;
                        //new_character_placement_id is to be new id for the cell the character moves to; 
                        
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[1];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                    }
                    
                    else if(scp_subset_array === letter_indeces[0]){//Subset A ===> C Row change

                        scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = scp_row_initial - 1;
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[2];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        
                       
                        
                    }
                    else{ //letter_indeces[2] Subset C ===> A No row change
                        
                        new_scp_row_initial = parseInt(scp_row_initial);//All scp are in string format, convert to integer for math.
                        new_scp_row_initial = new_scp_row_initial.toString();
                        
                        scp_cell_initial = parseInt(scp_cell_initial);//All scp are in string format, convert to integer for math.
                        new_scp_cell_initial = scp_cell_initial;
                        new_scp_cell_initial = new_scp_cell_initial.toString();
                        
                        console.log("original_cell_initial" + scp_cell_initial);
                        console.log("new_cell_initial" + new_scp_cell_initial);
                        
                        new_scp_subset_array = letter_indeces[0];
                        
                        new_character_placement_id = new_scp_grid + "_" + new_scp_row_initial + "_" + new_scp_cell_initial + "_" + new_scp_subset_array;
                        
                        if(!document.getElementById(new_character_placement_id)){
                            new_character_placement_id = split_character_placement[0] + "_" + split_character_placement[1] + "_" + split_character_placement[2] + "_" + split_character_placement[3];
                            document.getElementById(new_character_placement_id).className = "character_placement red_background";
                        }
                        
                        document.getElementById(new_character_placement_id).className = "character_placement red_background";
                       
                    }
                    
                }//END UP PRESS
                    //var new_split_character_placement;
                    //This displays the coordinate id of the character placement;
                    document.getElementById('output_box').innerHTML = new_character_placement_id;
                    //This displays the split coordinate id of the character placement;
                    //new_split_character_placement = new_character_placement_id.split("_");
                    //document.getElementById('split_output_box').innerHTML = new_split_character_placement;
            }
            document.onkeydown = character_movement; 