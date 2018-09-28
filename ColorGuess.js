var mode = 6;

var reset = document.querySelector("#reset");
reset.textContent = "New Colors";

var colors = generate_colors(mode);

var squares = document.querySelectorAll(".square");
var pickedColor = pick_color();

var color_name = document.getElementById("color_name");
color_name.textContent = pickedColor;

var message = document.querySelector("#message");

for(var i=0;i<squares.length;i++)
    {
        //add initial colors to squares
        squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            //grab color of picked square
            var clickedcolor = this.style.background
            //compare clickedcolor to pickedcolor
            if(clickedcolor===pickedColor)
                {
                    message.textContent = "Correct!";
                    change_color(clickedcolor);
                    document.querySelector("h1").style.background = clickedcolor;
                    
                    reset.textContent = "Play Again";
                }
            else
                {
                    this.style.background = "#232323";
                    message.textContent = "Try Again!";
                    console.log(clickedcolor,pickedColor);
                }
        });
    }

function change_color(color)
{
    for(var i=0;i<squares.length;i++)
        squares[i].style.background = color;
}

function pick_color()
{
    var x =Math.floor(Math.random() * colors.length);
    return colors[x];
}

function generate_colors(n)
{
    var a = [];
    
    for(var i=0;i<n;i++)
        a.push(random_color());
    
    return a;
}

function random_color()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    
    return "rgb("+r+", "+g+", "+b+")";
}

reset.addEventListener("click",function(){
    message.textContent = "";
    
    reset.textContent = "New Colors";
    
    colors = generate_colors(mode);
    pickedColor = pick_color();
    color_name.textContent = pickedColor;
    
    document.querySelector("h1").style.background = "steelblue";
    
    for(var i=0;i<squares.length;i++)
    {
        //add initial colors to squares
        squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            //grab color of picked square
            var clickedcolor = this.style.background
            //compare clickedcolor to pickedcolor
            if(clickedcolor===pickedColor)
                {
                    message.textContent = "Correct!";
                    change_color(clickedcolor);
                    document.querySelector("h1").style.background = clickedcolor;
                    
                    reset.textContent = "Play Again";
                }
            else
                {
                    this.style.background = "#232323";
                    message.textContent = "Try Again!";
                    console.log(clickedcolor,pickedColor);
                }
        });
    }
});

var easy_btn = document.querySelector("#easy_btn");
var hard_btn = document.querySelector("#hard_btn");

easy_btn.addEventListener("click",function(){
    easy_btn.classList.add("selected");
    hard_btn.classList.remove("selected");
    
    mode=3;
    colors = generate_colors(mode);
    pickedColor = pick_color();
    color_name.textContent = pickedColor;
    
    for(var i=0;i<squares.length;i++)
        if(colors[i])
            squares[i].style.background = colors[i];
        else
            squares[i].style.display = "none";
});

hard_btn.addEventListener("click",function(){
    hard_btn.classList.add("selected");
    easy_btn.classList.remove("selected");
    
    mode=6;
    colors = generate_colors(mode);
    pickedColor = pick_color();
    color_name.textContent = pickedColor;
    
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
});