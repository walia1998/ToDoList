// const btn = document.querySelector("button");
const listContainer = document.getElementById("list-container");
const input = document.getElementById("input-box");

// btn.addEventListener("click", addTask)
function addTask() {
    if(input.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

// btn.addEventListener("click", function () {
//     let item = document.createElement("li")
//     item.innerText = inp.vlaue


//     let delbtn = document.createElement("button");
//     delbtn.innerText = "Delete";
//     delbtn.classList.add("delete");


//     ul.appendChild(item);
//     item.appendChild(delbtn);
//     inp.value = "";
// })

// ul.addEventListener("click", function(e) {
//     if(e.target.nodeName == "BUTTON") {
//         let listItem = e.target.parentElement;
//         listItem.remove();
//     }
// })

