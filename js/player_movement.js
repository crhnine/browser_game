// JavaScript source code
           //Player Starting point subject to be changed based on map or random selection between a few points to possibly add challenge.
           var initial_spawn = document.getElementById('grid_3_6_B');
           initial_spawn.className = "character_placement red_background";
           
           //Preparation for movement
           var letter_indeces = [
                
                "A",
                "B",
                "C",
                "D"
            ];
            
            //All existing coordinates with character_placement. Upper containers.
            var find_grid = document.getElementsByClassName("character_placement");
            var i;
            for(i = 0;i < find_grid.length;i++){   
                var split_id_string = find_grid[i].id;
                var split_id = split_id_string.split("_"); 
                
                //This section splits all of the ids at the "_" character and places them into an array. [0] = "grid",...;
                //document.getElementById('output_grids_id').innerHTML += find_grid[i].id + "<br />";
            }//All existing coordinates with character_placement. Upper containers split.
            
            //Onload find current container with red_background class.
            var find_location = document.getElementsByClassName("red_background");
            var character_placement = find_location[0].id;
            var split_character_placement = character_placement.split("_");
            document.getElementById('output_box').innerHTML = character_placement;//Display 1
            
            //This displays the coordinate id of the character placement in the console;

            //This displays the split coordinate id of the character placement;
            //document.getElementById('split_output_box').innerHTML = split_character_placement;
            /////////////////////////////////////////////////////////
            //Three things are needed to create an impassable barrier
                /*
                 * 1. Impassable locations into an array. (impassable_locations_array)
                 * 2. Starting position of player during keypress. (character_placement) Need to re-add "red_background" class.
                 * 3. Where the player would be going if the keypress were successful.  
                 */
            /////////////////////////////////////////////////////////
            
            //Set function to receive input
            function character_movement(e){
                keyCode_right:
                if(e.keyCode === 68){ //keyCode_D Move_right                     
                    //
                    //keyCode_right original location
                    //
                    //keyCode_D find current container with red_background class.
                    var find_location = document.getElementsByClassName("red_background");
                    var original_placement = find_location[0].id;
                    console.log("Find originating character placement: " + original_placement);//Display 2
                
                    var split_original_placement = original_placement.split("_");
                    //Assign each part of the original placement id to separate parts.
                    //Grid is unnecessary
                    var sop_row = split_original_placement[1];//1, 2, 3, or 4
                    var sop_column = split_original_placement[2];//1, 2, 3, or 4
                    var sop_letter = split_original_placement[3];//A, B, C, or D
                    //No_inner
                    var original_character_placement_id = sop_row + sop_column + sop_letter;
                    console.log("Original placement split: " + split_original_placement);//Display 3
                    console.log("Original placement reformed: " + original_character_placement_id);
                    //Original placement is now in impassable location form and ready to compare. Access original_placement for resetting character position.
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[0]){//Move Right A ===> B no column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[1];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[A] right movement to B
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    else if(sop_letter === letter_indeces[1]){//Move Right B ===> A column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    impassable_loop:
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            
                            var string_current_impassable_location = impassable_locations_array[l];
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse + 1;
                            var new_sop_letter = letter_indeces[0];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            
                            console.log("Comparing. String_new_placement = " + string_new_placement + "String_current_impassable_location = " + string_current_impassable_location);
                            console.log(typeof(string_new_placement) + "  " + typeof(string_current_impassable_location));
                            var string_comparison = string_current_impassable_location.localeCompare(string_new_placement);
                            console.log(string_comparison);

                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }

                                   
                    }//End letter_indeces[B] right movement to A
                    
                  
                    else if(sop_letter === letter_indeces[3]){//Move Right D ===> C column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    impassable_loop:
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            
                            var string_current_impassable_location = impassable_locations_array[l];
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse + 1;
                            var new_sop_letter = letter_indeces[2];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            
                            console.log("Comparing. String_new_placement = " + string_new_placement + "String_current_impassable_location = " + string_current_impassable_location);
                            console.log(typeof(string_new_placement) + "  " + typeof(string_current_impassable_location));
                            var string_comparison = string_current_impassable_location.localeCompare(string_new_placement);
                            console.log(string_comparison);

                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                if(change_new === null){
                                    
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                            }
                        }

                                   
                    }//End letter_indeces[D] right movement to C
                    
                    
                    
                    if(sop_letter === letter_indeces[2]){//Move Right C ===> D no column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[3];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[C] right movement to D
   
                }//End keyCode D right movement
                
                
                
                
                keyCode_left:
                if(e.keyCode === 65){ //keyCode_D Move_left                    
                    //
                    //keyCode_left original location
                    //
                    //keyCode_A find current container with red_background class.
                    var find_location = document.getElementsByClassName("red_background");
                    var original_placement = find_location[0].id;
                    console.log("Find originating character placement: " + original_placement);//Display 2
                
                    var split_original_placement = original_placement.split("_");
                    //Assign each part of the original placement id to separate parts.
                    //Grid is unnecessary
                    var sop_row = split_original_placement[1];//1, 2, 3, or 4
                    var sop_column = split_original_placement[2];//1, 2, 3, or 4
                    var sop_letter = split_original_placement[3];//A, B, C, or D
                    //No_inner
                    var original_character_placement_id = sop_row + sop_column + sop_letter;
                    console.log("Original placement split: " + split_original_placement);//Display 3
                    console.log("Original placement reformed: " + original_character_placement_id);
                    //Original placement is now in impassable location form and ready to compare. Access original_placement for resetting character position.
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[0]){//Move Left A ===> B column change 
                    //
                    //keyCode_left impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse - 1;
                            var new_sop_letter = letter_indeces[1];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[A] left movement to B
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    else if(sop_letter === letter_indeces[1]){//Move Left B ===> A no column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    impassable_loop:
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            
                            var string_current_impassable_location = impassable_locations_array[l];
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[0];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            
                            console.log("Comparing. String_new_placement = " + string_new_placement + "String_current_impassable_location = " + string_current_impassable_location);
                            console.log(typeof(string_new_placement) + "  " + typeof(string_current_impassable_location));
                            var string_comparison = string_current_impassable_location.localeCompare(string_new_placement);
                            console.log(string_comparison);

                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }

                                   
                    }//End letter_indeces[B] right movement to A
                    
                  
                    else if(sop_letter === letter_indeces[3]){//Move Left D ===> C no column change 
                    //
                    //keyCode_right impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    impassable_loop:
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            
                            var string_current_impassable_location = impassable_locations_array[l];
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[2];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            
                            console.log("Comparing. String_new_placement = " + string_new_placement + "String_current_impassable_location = " + string_current_impassable_location);
                            console.log(typeof(string_new_placement) + "  " + typeof(string_current_impassable_location));
                            var string_comparison = string_current_impassable_location.localeCompare(string_new_placement);
                            console.log(string_comparison);

                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                if(change_new === null){
                                    
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                            }
                        }

                                   
                    }//End letter_indeces[D] left movement to C
                    
                    
                    
                    if(sop_letter === letter_indeces[2]){//Move Left C ===> D column change 
                    //
                    //keyCode_left impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse - 1;
                            var new_sop_letter = letter_indeces[3];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[C] left movement to D
   
                }//End keyCode A left movement
                
                
                keyCode_down:
                if(e.keyCode === 83){ //keyCode_S Move_down
                    //
                    //keyCode_down original location
                    //
                    //keyCode_A find current container with red_background class.
                    var find_location = document.getElementsByClassName("red_background");
                    var original_placement = find_location[0].id;
                    console.log("Find originating character placement: " + original_placement);//Display 2
                
                    var split_original_placement = original_placement.split("_");
                    //Assign each part of the original placement id to separate parts.
                    //Grid is unnecessary
                    var sop_row = split_original_placement[1];//1, 2, 3, or 4
                    var sop_column = split_original_placement[2];//1, 2, 3, or 4
                    var sop_letter = split_original_placement[3];//A, B, C, or D
                    //No_inner
                    var original_character_placement_id = sop_row + sop_column + sop_letter;
                    console.log("Original placement split: " + split_original_placement);//Display 3
                    console.log("Original placement reformed: " + original_character_placement_id);
                    //Original placement is now in impassable location form and ready to compare. Access original_placement for resetting character position.
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[0]){//Move Down A ===> C no row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[2];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[A] down movement to C
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[2]){//Move Down C ===> A row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse + 1;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[0];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[C] down movement to A
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    if(sop_letter === letter_indeces[1]){//Move Down B ===> D no row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[3];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[B] down movement to D
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[3]){//Move Down D ===> B row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse + 1;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[1];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[D] down movement to B
                
                }//End keyCode S down movement
                keyCode_up:
                if(e.keyCode === 87){ //keyCode_W Move_up
                //
                //keyCode_up original location
                //
                //keyCode_A find current container with red_background class.
                var find_location = document.getElementsByClassName("red_background");
                var original_placement = find_location[0].id;
                console.log("Find originating character placement: " + original_placement);//Display 2

                var split_original_placement = original_placement.split("_");
                //Assign each part of the original placement id to separate parts.
                //Grid is unnecessary
                var sop_row = split_original_placement[1];//1, 2, 3, or 4
                var sop_column = split_original_placement[2];//1, 2, 3, or 4
                var sop_letter = split_original_placement[3];//A, B, C, or D
                //No_inner
                var original_character_placement_id = sop_row + sop_column + sop_letter;
                console.log("Original placement split: " + split_original_placement);//Display 3
                console.log("Original placement reformed: " + original_character_placement_id);
                //Original placement is now in impassable location form and ready to compare. Access original_placement for resetting character position.

                ///////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////
                
                
                
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[0]){//Move Up A ===> C row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse - 1;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[2];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[A] up movement to C
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    
                    
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[2]){//Move Up C ===> A no row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[0];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[C] up movement to A
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[3]){//Move Up D ===> B no row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[1];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[D] up movement to B
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    
                    ///////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////
                    if(sop_letter === letter_indeces[1]){//Move Up B ===> D row change 
                    //
                    //keyCode_down impassable
                    //
                    var impassable_locations_array = [];
                    var find_impassable = document.getElementsByClassName("impassable");//This id will never equal that of character_placement id simply because of _inner
                    
                    var k;
                    var l;
                    var pseudo_array_length_01 = 8;
                    for(k = 0, l = 0;k < find_impassable.length, l < pseudo_array_length_01; k++, l++){
                            console.log(find_impassable[k].id);
                            var find_impassable_id = find_impassable[k].id;
                            var stringify_find_impassable_id = find_impassable_id.toString();
                            var sfi_id = stringify_find_impassable_id.split("_");


                            var impassable_row_initial = sfi_id[1];
                            var impassable_cell_initial = sfi_id[2];
                            var impassable_subset_array = sfi_id[3];
                          
                            var impassable_locations = impassable_row_initial + impassable_cell_initial + impassable_subset_array;
                            var string_impassable_locations = impassable_locations.toString();//Ensure impassable locations typing is set to string
                            impassable_locations_array.push(string_impassable_locations);
                            console.log("Impassable location array  " + impassable_locations_array[l]);//Display 4
                            //All impassable locations have been pulled successfully from this script. End for loop impassable
                            //Format for impassable locations array = 14C, 14D, 24A, 24B, etc...
                            
                            var sop_row_parse = parseInt(sop_row); 
                            var sop_column_parse = parseInt(sop_column);
                            
                            var new_sop_row = sop_row_parse - 1;
                            var new_sop_column = sop_column_parse;
                            var new_sop_letter = letter_indeces[3];
                            
                            var new_sop_row_string = new_sop_row.toString();
                            var new_sop_column_string = new_sop_column.toString();
                            
                            var new_placement = new_sop_row_string + new_sop_column_string + new_sop_letter;
                            var string_new_placement = new_placement.toString();
                            
                            var go_to_new_location = "grid_" + new_sop_row + "_" + new_sop_column + "_" + new_sop_letter;//ID for new location if permitted.
                            var change_original = document.getElementById(original_placement);
                            var change_new = document.getElementById(go_to_new_location);
                            if(impassable_locations_array.indexOf(string_new_placement) > -1){
                                
                                change_original.className = "character_placement red_background";
                                if(change_new === null){

                                }
                                else{
                                change_new.className = "character_placement";
                                }
                                console.log("The conditional on D to C is stating that the impassable array has the value of the next coordinate somewhere.");
                            }
                            else{
                                
                                if(change_new === null){
                                
                                    change_new = change_original;
                                    change_original.className = "character_placement red_background";
                                    
                                }else{
                                change_original.className = "character_placement";
                                change_new.className = "character_placement red_background";
                                
                                console.log("We are still waiting to see if impassable locations will be detected...");
                                }
                            }
                      
                        }
                                   
                    }//End letter_indeces[B] up movement to D
                    
                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////
                    
                    
                
                }//End keyCode W up movement             
            }//End function for input
            
            //Necessary for receiving keypress information
            document.addEventListener('keydown', character_movement, false);
            
            