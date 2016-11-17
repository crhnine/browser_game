# Web Browser RPG --- No official title yet.
This is an attempt to create a decently running game in the browser utilizing HTML, CSS, Javascript, PHP, with MySQL and possibly AJAX.


Things that need to be done: 

1. Collect the last direction pressed so that we can know which direction the character will be facing for interactions.
2. Build in the interactions much like the impassable locations. 
3. Build menu sections to be displayed on keypress for later inventory, stats, other options that should be available to the user. 
4. Stitch together the backend code for the object locations so that maps information can be retrieved from database to simplify code and extend flexibility in the build.
5. Build character sets list on the backend and supply the character's set locally. This will require setting specific values so that the profile knows what moveset to retrieve. 
6. Place in coordinates for random encounters and then build the turn-based battle screen. Random number generator for encounters.
7. Either begin artwork myself or try to assemble a team to work passionately on the art style or theme they would enjoy working on. 
8. Begin plan to keep character on or near middle of screen. Most likely the easiest way to do this would be to on key press scroll 25px in the same direction. 


11.17.16

Need to work on setting timed intervals for npc movement. Further information is located within the npc logic file (js).