document.getElementById("check-button").addEventListener("click", () => {
  // Get input value
  const text = document.getElementById("Movie-option").value;

  // double check spelling throughout
  //add logical Or incase there is letter sensitivity with user
  if (text === "action" || text === "Action") {
   //add result text for when user is finished with prompt
    document.getElementById(
      "result"
    ).innerText = `Check out the Action recommendations⬇️`;
    //add else if statement
  } else if (text === "romance" || text === "Romance") {
    document.getElementById(
      "result"
    ).innerText = `Check Romance recommendations⬇️`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Check Comedy recommendations⬇️`;
  }
});
//call div class accordion-item
const accordionItems = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  const accordionHeader = accordionItems[i].getElementsByClassName(
    "accordion-header"
  )[0];
  // Getting the A-C element within the current A-I
  const accordionContent = accordionItems[i].getElementsByClassName(
    "accordion-content"
  )[0];

  // Added a click event listener to A-H elements...
  accordionHeader.addEventListener("click", function () {
    
    if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";

      accordionItems[i].classList.add("open");
    } else {
      

      accordionContent.style.display = "none";

      accordionItems[i].classList.remove("open");
    }
  });
}