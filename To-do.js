var inputBox = document.getElementById("input");
var ul = document.getElementById("ul");
var buttonAdd = document.getElementById("button-add");
var buttonRemove = document.getElementById("button-remove");
var hamburgerIcon = document.getElementById("hamburger-icon");
var sideBar = document.querySelector("#sidebar");

// PRICES
var budgetAmount = document.getElementById("budget-amount");
var bananaPrice = document.getElementById("banana-price");
var pawpawPrice = document.getElementById("pawpaw-price");
var orangePrice = document.getElementById("orange-price");
var eggPrice = document.getElementById("egg-price");
var meatPrice = document.getElementById("meat-price");
var fishPrice = document.getElementById("fish-price");
var breadPrice = document.getElementById("bread-price");

// ITEMS
var bananaItem = document.getElementById("banana-item");
var pawpawItem = document.getElementById("pawpaw-item");
var orangeItem = document.getElementById("orange-item");
var eggItem = document.getElementById("egg-item");
var meatItem = document.getElementById("meat-item");
var fishItem = document.getElementById("fish-item");
var breadItem = document.getElementById("bread-item");

hamburgerIcon.addEventListener("click", function() //HAMBURGER-CLICK event listener
{
    if(sideBar.classList.contains("show"))
    {
        sideBar.classList.remove("show")
        sideBar.classList.add("hide")
    }
    else if(sideBar.classList.contains("hide"))
    {
        sideBar.classList.remove("hide")
        sideBar.classList.add("show")
    }
});

buttonAdd.addEventListener("click", function() // BUTTON-CLICK ADD event listener
{
    if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Banana")
    {
        var elementNode = document.createElement("li"); // The parent node
        var childCount = ul.childElementCount; //For the count of the children element
        //console.log(childCount);
        var textNode = document.createTextNode(inputboxValue) // The child node; (3) USE THE VARIABLE ANYWHERE AS GLOBAL
        elementNode.appendChild(textNode); // The fusion of child into parent
        elementNode.id = "grocery" + (childCount + 1);
        // console.log(elementNode);
        ul.appendChild(elementNode); // Appending the parent node into the main list to appear outside
        bananaItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(bananaPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(bananaPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase");
                ul.removeChild(elementNode)
                bananaItem.style.color = "white"
            }
        inputBox.value = ""; // to clear after entry
        inputboxValue = ""; // to clear after entry
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Paw-paw" )
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue)
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        pawpawItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(pawpawPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(pawpawPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase")
                ul.removeChild(elementNode)
                pawpawItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Oranges" )
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue);
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        orangeItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(orangePrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(orangePrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase")
                ul.removeChild(elementNode)
                orangeItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Eggs") 
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue)
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        eggItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(eggPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(eggPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase");
                ul.removeChild(elementNode)
                eggItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Meat")
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue);
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        meatItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(meatPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(meatPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase")
                ul.removeChild(elementNode)
                meatItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Fish")
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue)
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        fishItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(fishPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(fishPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase")
                ul.removeChild(elementNode)
                fishItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else if(inputboxValue !== undefined && inputboxValue !== null && inputboxValue !== "" && inputboxValue === "Bread")
    {
        var elementNode = document.createElement("li");
        var childCount = ul.childElementCount;
        var textNode = document.createTextNode(inputboxValue);
        elementNode.appendChild(textNode);
        elementNode.id = "grocery" + (childCount + 1);
        console.log(elementNode);
        ul.appendChild(elementNode);
        breadItem.style.color = "orangered";
            if(parseInt(budgetAmount.innerHTML) >= parseInt(breadPrice.innerHTML)) 
            {
                budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) - parseInt(breadPrice.innerHTML)
            }
            else 
            {
                alert("Insufficient Funds for purchase")
                ul.removeChild(elementNode)
                breadItem.style.color = "white"
            }
        inputBox.value = "";
        inputboxValue = "";
    }
    else
    {
        alert("NOT AVAILABLE IN STOCK, or an INVALID ENTRY. \nKindly enter a grocery item as quoted on the price list. \nNB: Inputs are case sensitive");
        inputBox.value = "";
        inputboxValue = "";
    }
});


buttonRemove.addEventListener("click", function() // BUTTON-CLICK REMOVE event listener
{   
    var lastItem = ul.lastElementChild;
    if(String(lastItem.innerHTML) === "Banana")
   {
    ul.removeChild(lastItem);
    bananaItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(bananaPrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Paw-paw")
   {
    ul.removeChild(lastItem);
    pawpawItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(pawpawPrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Oranges")
   {
    ul.removeChild(lastItem);
    orangeItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(orangePrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Eggs")
   {
    ul.removeChild(lastItem);
    eggItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(eggPrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Meat")
   {
    ul.removeChild(lastItem);
    meatItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(meatPrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Fish")
   {
    ul.removeChild(lastItem);
    fishItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(fishPrice.innerHTML);
   }
   else if(String(lastItem.innerHTML) === "Bread")
   {
    ul.removeChild(lastItem);
    breadItem.style.color = "white"
    budgetAmount.innerHTML = parseInt(budgetAmount.innerHTML) + parseInt(breadPrice.innerHTML);  
   }
});

var inputboxValue; // (1) DECLARE THE VARIABLE OUTSIDE THE FUNCTION

inputBox.addEventListener("input", function(event) // INPUT BOX event listener
{
    inputboxValue = event.target.value; // (2) ASSIGN THE VARIABLE INSIDE THE FUNCTION
    // console.log(inputboxValue);
});

