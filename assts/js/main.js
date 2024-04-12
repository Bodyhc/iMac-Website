// ###############################
console.log("Coding By Abdullah Soliman");
// ###############################
const green = document.getElementsByClassName("colorgreen")[0];
const yellow = document.getElementsByClassName("coloryellow")[0];
const orange = document.getElementsByClassName("colororange")[0];
const pink = document.getElementsByClassName("colorpink")[0];
const purple = document.getElementsByClassName("colorpurple")[0];
const blue = document.getElementsByClassName("colorblue")[0];
const silver = document.getElementsByClassName("colorsilver")[0];
const imgside = document.querySelector(".imageside img");
const imgtop = document.querySelector(".top img");
const imgbottom = document.querySelector(".bottom img");
const txt = document.getElementsByClassName("txt-top")[0].getElementsByTagName("span")[0];

// Function to change the color of the text and image when a button is clicked
const colors = [green, yellow, orange, pink, purple, blue, silver];

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function() {
        if (colors[i] === yellow) {
            imgside.src = "images/image 6.png";
            imgtop.src = "images/image 4.png";
            imgbottom.src = "images/image 5.png";
            txt.style.color = "#F2C464"; // Yellow
        } else if (colors[i] === green) {
            imgside.src = "images/image 3.png";
            imgtop.src = "images/image 1.png";
            imgbottom.src = "images/image 2.png";
            txt.style.color = "#115361"; // Green
        } else if (colors[i] === orange) {
            imgside.src = "images/image 9.png";
            imgtop.src = "images/image 7.png";
            imgbottom.src = "images/image 8.png";
            txt.style.color = "#EC623B "; // Orange

        } else if (colors[i] === pink) {
            imgside.src = "images/image 12.png";
            imgtop.src = "images/image 10.png";
            imgbottom.src = "images/image 11.png";
            txt.style.color = "#BA2D33 "; // Pink

        } else if (colors[i] === purple) {
            imgside.src = "images/image 15.png";
            imgtop.src = "images/image 13.png";
            imgbottom.src = "images/image 14.png";
            txt.style.color = "#30366A "; // Purple

        } else if (colors[i] === blue) {
            imgside.src = "images/image 18.png";
            imgtop.src = "images/image 16.png";
            imgbottom.src = "images/image 17.png";
            txt.style.color = "#23456B "; // Blue

        } else if (colors[i] === silver) {
            imgside.src = "images/image 21.png";
            imgtop.src = "images/image 19.png";
            imgbottom.src = "images/image 20.png";
            txt.style.color = "#D0D1D3 "; // Silver

        } else {
            "Error In Files "
        }
    });
}