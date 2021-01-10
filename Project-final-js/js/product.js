function loadProducts() {
    var form = new FormData();
    //form.append('file', document.querySelector('#imageFile').files[0]);
    form.append('productID', productID);

    var upload = new XMLHttpRequest();
    upload.open('POST', 'php/product.php');
    upload.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            products=JSON.parse(this.responseText);
            loadProduct();
            //alert(products[0].title);
        }
    };
    upload.send(form);
}
    var products=[];
onload = function() {
    productID = window.location.search.split('?')[1];
    loadProducts();
}

//Checks the products array in the search.js with a for-each loop and changes the page to a product info page. 
function loadProduct() {
    //alert(0);
    products.forEach(function(product) {
        //alert(1);
        if (product.productID == productID) {
            document.getElementById("albumTitle").innerHTML = product.title;
            document.getElementById("image").src = 'search-photos/'+product.imageName;
            document.getElementById("info").innerHTML = 'Artist: ' + product.artist +
                '\nGenre : ' + product.genre +
                '\nYear  : ' + product.year +
                '\nRating: ' + product.rating + '/10';
            document.getElementById("dis").innerHTML = product.description;
            document.getElementById("price").value=product.price;
            document.getElementById("price").innerHTML="Price: $"+product.price;
        }
    });
}

//This function constantly change the price of the product based on the quantity selected by user
function changePrice() {
    var quantity = document.getElementById('quantity').value;
    var rawPrice = document.getElementById('price').value;
    var finalPrice = quantity * rawPrice;
    document.getElementById('price').innerHTML = 'Price: $' + finalPrice;
}

//This is implemented to give functionality to the search bar in this page as well.
function productSearch() {
    landSearchBox = document.getElementById("productSearchBox");
    window.location.href = 'search.html?' + landSearchBox.value;
}