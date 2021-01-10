function loadProducts() {
    var form = new FormData();
    //form.append('file', document.querySelector('#imageFile').files[0]);
    form.append('searchItem', searchProduct);

    var upload = new XMLHttpRequest();
    upload.open('POST', 'php/search.php');
    upload.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            products=JSON.parse(this.responseText);
            searchItem(0, 0, 9999);
            //alert(products[0].title);
        }
    };
    upload.send(form);
}
    var products=[];
window.onload = function() {
    searchProduct = window.location.search.split('?')[1];
    searchProduct= searchProduct.split('=')[1];
    //alert(searchProduct);
    loadProducts();
    document.getElementById("productName").innerHTML=searchProduct;
   
}

/* Array of products that will be shown in product pages. 
Real info for the products are left for the php part. */
/*var products = [{
        id: 1,
        image: 'search-photos/moon.jpg',
        title: 'The Dark Side Of Moon',
        description: '1 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 45,
        rateing: 5,
        artist: 'Pink Floyd',
        year: 1976,
        genre: "Progressive Rock"
    },
    {
        id: 2,
        image: 'search-photos/borntodie.jpg',
        title: 'Born To Die',
        description: '2 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 79,
        rateing: 3,
        artist: '2012',
        year: 2012,
        genre: "Pop/Indie"
    },
    {
        id: 3,
        image: 'search-photos/darklanedemo.jpg',
        title: 'The Wall',
        description: '3 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 21,
        rateing: 4,
        artist: 'Kamal',
        year: 2001,
        genre: "Rock"
    },
    {
        id: 4,
        image: 'search-photos/fallasleep.jpg',
        title: 'Fall Asleep',
        description: '4 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 23,
        rateing: 3,
        artist: 'Karan',
        year: 2005,
        genre: "Romantic"
    },
    {
        id: 5,
        image: 'search-photos/fallen.jpg',
        title: 'The of Wall',
        description: '5 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 81,
        rateing: 2,
        artist: 'Ranjit Bawa',
        year: 2010,
        genre: "pop"
    },
    {
        id: 6,
        image: 'search-photos/millennium.jpg',
        title: 'The of Wall',
        description: '6 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 11,
        rateing: 5,
        artist: 'Ammy Virk',
        year: 2015,
        genre: "Romantic"
    },
    {
        id: 7,
        image: 'search-photos/moon.jpg',
        title: 'The of Wall',
        description: '7 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 39,
        rateing: 3,
        artist: 'Mosse wala 22',
        year: 1960,
        genre: "rock 2"
    },
    {
        id: 8,
        image: 'search-photos/recovery.jpg',
        title: 'The of Wall',
        description: '8 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 41,
        rateing: 4,
        artist: 'Guru',
        year: 2003,
        genre: "Classic"
    },
    {
        id: 9,
        image: 'search-photos/ridelighting.png',
        title: 'The of Wall',
        description: '9 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        price: 48,
        rateing: 1,
        artist: 'Ranjit 2',
        year: 2020,
        genre: "classic"
    }
];*/

var htmlCode = `<div class="col-md-4"><div onclick="showProduct(id);" id="<id>" class="card mb-4 box-shadow"><img id="image" style="width: 100%; height: 100%;" src="<source>"><div class="card-header" id="title"><title></div><div class="card-body"><p class="card-text" id="discription"><discription></p><div class="d-flex justify-content-between align-items-center"><div class="row ml-1"><svg width="1em" id="s1" height="1em" viewBox="0 0 16 16" class="bi" fill="gold" xmlns="http://www.w3.org/2000/svg"><path1></svg><svg width="1em" id="s2" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="gold" xmlns="http://www.w3.org/2000/svg"><path2></svg><svg width="1em" id="s3" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="gold" xmlns="http://www.w3.org/2000/svg"><path3></svg><svg width="1em" id="s4" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="gold" xmlns="http://www.w3.org/2000/svg"><path4></svg><svg width="1em" id="s5" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="gold" xmlns="http://www.w3.org/2000/svg"><path5></svg></div><small class="text-muted">9 mins</small></div></div><div class="card-footer" id="price">$<price></div></div></div>`;

function searchItem(star, less, high) {
    count=0;
    document.querySelector('#appendProducts').innerHTML = "";
    //alert(0);
    products.forEach(function(product) {
        //alert(1);
        if (product.title.toLowerCase().includes(searchProduct.toLowerCase())) {
            //alert(1);
            if (star <= product.rating && less <= product.price && high > product.price) {
                count++;
                //alert(2);
                var change = htmlCode.replace('<title>', product.title);
                change = change.replace('<discription>', product.description);
                change = change.replace('<id>', product.id);
                change = change.replace('<price>', product.price);
                //alert(product.imageName);
                change = change.replace('<source>', 'search-photos/'+product.imageName);
                product.rating=parseInt(product.rating,10);
                switch(product.rating) {
                    case 1:
                        change = change.replace('<path1>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path2>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path3>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path4>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path5>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        break;

                    case 2:
                        change = change.replace('<path1>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path2>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path3>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path4>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path5>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        break;

                    case 3:
                        change = change.replace('<path1>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path2>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path3>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path4>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        change = change.replace('<path5>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        break;

                    case 4:
                        change = change.replace('<path1>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path2>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path3>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path4>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path5>', '<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');
                        break;

                    case 5:
                        change = change.replace('<path1>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path2>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path3>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path4>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        change = change.replace('<path5>', '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');
                        break;
                }
                document.querySelector('#appendProducts').innerHTML += change;
            }
        }
    }
);
    document.getElementById("resultNumber").innerHTML=count;
}

//This function filters the products by rating(Stars).
function filterReview(star) {
    products.sort(function(a, b) {
        return a.rateing - b.rateing;
    });
    searchItem(star, 0, 9999);
}

//This gives functionality to sort by button.
function sortProduct(sorting) {
    if (sorting == "l2h")
        products.sort(function(a, b) {
            return a.price - b.price;
        });
    else
        products.sort(function(a, b) {
            return b.price - a.price;
        });
    searchItem(0, 0, 9999);
}

function search() {
    searchProduct = document.getElementById("searchBox").value;
    document.getElementById("productName").innerHTML=searchProduct;
    searchItem(0, 0, 9999);
}

function showProduct(id) {
    window.location.href = 'product.html?' + id;
}

function sortPrice(less, high) {
    searchItem(0, less, high);
}

