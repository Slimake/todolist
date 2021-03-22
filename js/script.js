(function() {
    const btn = document.getElementById("add-item");
    const input = document.getElementById("itemInput");
    const clearList = document.getElementById("clear-list");
    const itemList = document.querySelector(".item-list");
    const feedback = document.querySelector(".feedback");

    const itemListArr = [];

    function addItem(e) {
        e.preventDefault();
        if ( !(input.value === "") ) {
            if ( !( itemListArr.includes(input.value) ) ) {
                let singleItem = document.createElement("div");
                let itemName = document.createElement("h5");
                let itemIcon = document.createElement("div");
                let completeItem = document.createElement("a");
                let editItem = document.createElement("a");
                let deleteItem = document.createElement("a");

                itemListArr.push(input.value);
                itemListArr.forEach(item => {

                    
                    singleItem.classList.add("item", "my-3");
                    itemName.classList.add("item-name", "text-capitalize");
                    itemIcon.classList.add("item-icon");
                    completeItem.classList.add("complete-item", "mx-2", "item-icon");
                    editItem.classList.add("edit-item", "mx-2", "item-icon");
                    deleteItem.classList.add("delete-item", "mx-2", "item-icon");

                    completeItem.setAttribute("href", "#");
                    editItem.setAttribute("href", "#");
                    deleteItem.setAttribute("href", "#");

                    itemName.textContent = item;

                    singleItem.appendChild(itemName);
                    singleItem.appendChild(itemIcon);
                    itemIcon.appendChild(completeItem);
                    itemIcon.appendChild(editItem);
                    itemIcon.appendChild(deleteItem);

                    completeItem.innerHTML = "<i class='far fa-check-circle'></i>";
                    editItem.innerHTML = "<i class='far fa-edit'></i>";
                    deleteItem.innerHTML = "<i class='far fa-times-circle'></i>";

                    itemList.appendChild(singleItem);
                    input.value = "";

                });

                // complete event listener
                completeItem.addEventListener("click", function() {
                    itemName.classList.toggle("completed");
                });

                // edit event listener
                editItem.addEventListener("click", function() {
                    input.value = itemName.textContent;
                    itemList.removeChild(singleItem);
                    itemListArr.splice(itemListArr.indexOf(input.value), 1);
                });

                // delete event listener
                deleteItem.addEventListener("click", function() {
                    itemList.removeChild(singleItem);
                    itemListArr.splice(itemListArr.indexOf(itemName.textContent), 1);
                });
                
                clearList.addEventListener("click", function() {
                    while ( itemList.lastElementChild ) {
                        itemList.removeChild(itemList.lastElementChild);
                        itemListArr.length = 0;
                    }
                });
            }
        } else {
            feedback.textContent = "Please enter a value";
            feedback.classList.add("showItem", "alert-danger");
            setTimeout(function() {
                feedback.classList.remove("showItem");
            }, 3000);
        }
        return;
    }

    
    input.addEventListener("keydown", function (e) {
        if (e.which === 13) {
            addItem(e);
        }
    });

    btn.addEventListener("click", function(e) {
        addItem(e);
    });


})();