function load() {

    //functions area

    var evalgame = function(squares) {
         
            //Horizontal matches
        if(squares[0][0] == "true" && squares[0][1] == "true" && squares[0][2] == "true") {

        } else if (squares[1][0] == "true" && squares[1][1] == "true" && squares[1][2] == "true") {
        } else if (squares[2][0] == "true" && squares[2][1] == "true" && squares[2][2] == "true") {
            //Vertical matches

        } else if (squares[0][0] == "true" && squares[1][0] == "true" && squares[2][0] == "true") {
        } else if (squares[0][1] == "true" && squares[1][1] == "true" && squares[2][1] == "true") {
        } else if (squares[0][2] == "true" && squares[0][1] == "true" && squares[0][2] == "true") {
            //Diagonal matches

        } else if (squares[0][0] == "true" && squares[1][1] == "true" && squares[2][2] == "true") {
        } else if (squares[0][2] == "true" && squares[1][2] == "true" && squares[2][2] == "true") {
            //No matches

        } else { console.log("Did not match any states.");   }

        //console.log(squares[1][0]);
    };  //end of function evalgame



    //here is defined the object that lives inside the inner arrays
    var captured = {
        isO: "false",    
        isX:  "false"
    };

 

    //squares is the array of arrays.
    var squares = new Array(3);
        squares[0] = new Array(3);
        squares[1] = new Array(3);
        squares[2] = new Array(3);


    squares[0][0] = "true";
    squares[1][0] = "false";
    console.log(squares[0][0]);
    console.log(squares[1][0]);

    evalgame(squares);



} //end of load()