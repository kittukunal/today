function searchItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#itemList li");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}
