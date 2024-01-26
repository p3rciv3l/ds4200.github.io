/* example work from earlier in the file
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });
  */
 
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Samoyed-and-teddy-bear.jpg") {
    myImage.setAttribute("src", "images/outdoor-samoyed.jpg");
  } else {
    myImage.setAttribute("src", "images/Samoyed-and-teddy-bear.jpg");
  }
};

let myButton = document.querySelector("button");
let myCaption = document.querySelector("figcaption");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myCaption.textContent = `${myName}, click to change the photo!`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myCaption.textContent = `${storedName}, click to change the photo!`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
