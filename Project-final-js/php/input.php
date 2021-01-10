<!DOCTYPE html>
<html lang="en">
<head>    
    <title>Input Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style-input.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
     <header>
          <!--Header is made by Fargol-->
                <a href="landing.html" class="col-2" class="navbar-brand d-flex align-items-center">
                    <img class="img mr-1 " src="logo.jpg" onclick="window.location.href = 'wheel-stuff/index.html'">
                </a>
                    <h2>Add Product</h2>
     </header>
    <!--Form for the inputs-->
     <form action="input-process.php" method="post" enctype="multipart/form-data">
     <!--Title-->
     <label for="pdn">Product Title:</label>
     <input type="text" class="form-control" name="title" id="title" placeholder="Title">
     <!--Description-->
     <label for="des">Description:</label>
     <input type="text" class="form-control" name="description" id="description" placeholder="Description">
     <!--Price-->
     <label for="pri">Price:</label>
     <input type="number" class="form-control" id="price" name="price">
     <!--Artist-->
     <label for="des">Artist:</label>
     <input type="text" class="form-control" name="artist"  id="artist" placeholder="Artist">
     <!--Year-->
     <label for="des">Year:</label>
     <input type="text" class="form-control" name="year" id="year" placeholder="Year">
     <!--Genre-->
     <label for="des">Genre:</label>
     <input type="text" class="form-control" name="genre" id="genre" placeholder="Genre">
     <!--Image-->
     <input type="file" accept="image/*" name="imageName" id="imageFile">
          <!--gives an error if the image is not uploaded properly-->
     <p id="uploadError"></p>
     <!--Add product button-->
     <button type="submit" class="btn btn-block" onclick="uploadFile()">
        Add Product
        <span class="glyphicon glyphicon-ok"></span>
     </button>   
     </form> 
    </body>
</html>