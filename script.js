document.addEventListener("DOMContentLoaded",function(){

    //Add Square Button
    let btn =  document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    //Button Click
    btn.addEventListener("click",()=>{

        //Creating Green Square
        let square = document.createElement("div");
        square.style.width="50px";
        square.style.height="50px";
        square.style.margin="10px";
        square.classList.add("black-square");
        square.style.display="inline-block";
        square.style.backgroundColor="purple";
        //Adding ID 
        square.setAttribute("id", `${document.querySelectorAll(".black-square").length + 1}`)
        document.body.appendChild(square);

        //Text Content
        let squareText = document.createElement("p");
        squareText.textContent=`${document.querySelectorAll(".black-square").length}`;
        squareText.style.textAlign="center";
        square.appendChild(squareText);
        squareText.style.display="none";

        //Mouse over event
        square.addEventListener("mouseenter", ()=>{
            squareText.style.display="block";
        });
        square.addEventListener("mouseleave", ()=>{
            squareText.style.display="none";
        });

        //Change background colour
        let randomColour = ["red","orange","yellow","green", "blue"];
        square.addEventListener("click",()=>{
            square.style.backgroundColor=`${randomColour[Math.floor(Math.random() * randomColour.length)]}`;
        });

        //e.current item , get id number 
        square.addEventListener("dblclick", (e)=>{

            if(e.currentTarget.id % 2 && e.currentTarget.nextSibling && e.currentTarget.nextSibling.classList.contains('black-square')){
                e.currentTarget.nextSibling.remove();
            }
            else if(e.currentTarget.id % 3 && e.currentTarget.previousSibling && e.currentTarget.previousSibling.classList.contains('black-square')){
                e.currentTarget.previousSibling.remove();
            }
            else{
                alert('There is no square!')
            }

        });
    });



})