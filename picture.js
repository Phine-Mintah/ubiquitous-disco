// function button() {
//     let button = document.getElementById("pixel");
//     button.style.backgroundColor = "black";
//     button.style.color = "white";
//     button.style.height = "100px";

//     let link = document.getElementByClassName("link-a1")[0]
//     if (link) {
//         link.innerHTML = "please write down a task";
//         link.style.display = "contents";
//         link.style.color = "red";
//         link.style.marginTop = "1rem";
//     }

//     return button;

//     // button.style.width = "200px";
//     // button.document.createElement("p")
//     // document.getElementById("pixel").innerHTML = "Hello World";
// }

function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-list");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
