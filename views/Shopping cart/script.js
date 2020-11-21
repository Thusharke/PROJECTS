
var add = document.querySelectorAll(".add");
var total_price = document.querySelector(".Total-price");
var item_list = document.querySelector(".cart-items");
var total = 0;

for(var i=0;i<add.length;i++){
    add[i].onclick = function(){
        var clone = this.parentElement.parentElement.cloneNode(true);
        addItem(clone);
        showcart();
    }
}

function updateTotal(price,sign){
    total = total + sign*price;
    total_price.innerHTML = "Rs. " + total;
}

function addItem(item){
    var img = item.querySelector("img").src;

    //finding if the following element already exists
    var items = document.querySelectorAll(".side");
    for(var i=0;i<items.length;i++){
        var img_src = items[i].querySelector("img").src;
        if(img_src === img){
            console.log(items[i].querySelector(".item").querySelector(".qty"));
            updateCount(items[i].querySelector(".item").querySelector(".qty"),items[i].querySelector(".item"),1);
            return;
        }
    }

    //if does not then do the following

    var price = parseInt(item.querySelector(".price").textContent.split(" ")[1]);
    var li = document.createElement("li");
    var img = item.querySelector("img").src;
    var qty = document.createElement("p");

    //adding classes to differentiate
    li.classList.add("side");
    qty.classList.add("qty");

    //To display the Quantity
    qty.innerHTML = "1";
    updateTotal(price,1);

    //To increase the quantity
    var btnIn = document.createElement("button");
    btnIn.classList.add("inc");
    btnIn.innerHTML = '<i class="fas fa-plus"></i>';
    btnIn.addEventListener("click", function(){
        updateCount(qty,this.parentElement,1);
    });

    //To decrease the quantity
    var btnDec = document.createElement("button");
    btnDec.classList.add("dec");
    btnDec.innerHTML = '<i class="fas fa-minus"></i>';
    btnDec.addEventListener("click", function(){
        updateCount(qty,this.parentElement,-1);
    });

    //creating remove button 
    item.querySelector(".add").textContent = "Remove";
    item.querySelector(".add").onclick = function(){
        var count = parseInt(qty.textContent);
        updateTotal(count*price,-1);
        this.parentElement.parentElement.parentElement.remove();
    }

    //appending newly created components
         item.appendChild(btnIn);
         item.appendChild(qty);
         item.appendChild(btnDec);
           li.appendChild(item);
           console.log(li);
    item_list.appendChild(li);
}

function updateCount(qty,parent,sign){
    var count = parseInt(qty.textContent);
    var price = parseInt(parent.querySelector(".price").textContent.split(" ")[1]);
    updateTotal(price,sign);
    count = count + sign*1;
    if(count == 0)  parent.parentElement.remove();
    else            qty.innerHTML = count;
}

function showcart(){
    var list = document.querySelector(".item-list");
    var cart = document.querySelector(".cart");
    cart.classList.toggle("slide");
    list.classList.toggle("hide");
}
