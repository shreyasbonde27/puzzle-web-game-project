let rows = 4;   
let columns = 4;  


//one will refer the selected file and other will refer the file you would be swapping with
let currentTile ;
let otherTile ;
let turns = 0;







//adding plane white/black dummy images to the board for intilization
window.onload = function() {
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let tile= document.createElement("img");
            tile.src = "assets/blankimage.jpg";  //appending blank images on the board cotainer on refresh

            // drag & drop functionality  
            tile.addEventListener("dragstart", dragStart);  //on dragstart event we'll run dragStart Function 
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            
            
            document.getElementById("board-container").append(tile);   //appending to the board-container

        }
    }


    
    //pusing numbers 1 to 16 into an array so they can be later used to refernce images with numerical names
    let pieces = [];
    for (let i=1; i <= rows*columns;i++){
        pieces.push(i.toString());
    }


    //shuffling the images in pieces <div> container
    pieces.reverse();

    for(let i=0;i<pieces.length;i++){
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i];
        pieces[i]= pieces[j];
        pieces[j] = tmp;
    }

    
    
    
    
    
    
    //populaitng all the puzzle images into pieces div container
    for(let i=0;i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src= "/assets/" + pieces[i] + ".JPG";



    //drag & drop functionality  
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        document.getElementById("pieces-container").append(tile);
    }


}














//defining the drag and drop funcitons

function dragStart(){
    currentTile = this;   //here this refers to the image than has been clicked on for dragging
}

function dragOver(e){
    e.preventDefault();    //to prevent default browser behaviour
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this; //this refers to the image that is being dropped on
}

function dragEnd(){
    if(currentTile.src.includes("blankimage")){
        return;
 
    } //this is avoid blank image being swapped by any of the puzzle image


    //else

    let currImg = currentTile.src;    //updating src 
    let otherImg = otherTile.src;
    currentTile.src = otherImg;
    otherTile.src = currImg;
    turns += 1;
    document.getElementById("turns").innerText = turns;
}




