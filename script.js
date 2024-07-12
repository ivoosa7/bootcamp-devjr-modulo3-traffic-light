
function changeTrafficLight(){
    if(document.getElementById("Yellow").className === "light yellow-light"){
        document.getElementById("Red").className = "light red-light";
        document.getElementById("Yellow").className = "light light-off";    
    }else{
        if(document.getElementById("Red").className === "light red-light"){
            document.getElementById("Green").className = "light green-light";
            document.getElementById("Red").className = "light light-off";
        }else{
            document.getElementById("Green").className = "light light-off";
            document.getElementById("Yellow").className = "light yellow-light";    
        }
    }
}