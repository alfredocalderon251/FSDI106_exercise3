function init(){
    console.log("Admin Page");
}

window.onload=init;
var items=[];

//object constructor for Items
function Item(code,title,price,description,category,rating,image){
this.code=code;
this.title=title;
this.price=price;
this.description=description;
this.category=category;
this.rating=rating;
this.image=image;
}

function register(){    
    var code=$('#txt_code').val();
    var title=$('#txt_title').val();
    var price=$('#txt_price').val();
    var description=$('#txt_description').val();
    var category=$('#txt_category').val();
    var rating=$('#txt_rating').val();
    var image=$('#txt_image').val();

    var NewItem=new Item(code,title,price,description,category,rating,image);
    items.push(NewItem);
    console.log(NewItem);
}

function solveHomework(){

    var data = [
        {
            age: 99,
            name: "Sergio",
            color: "Gray"
        },
        {
            age: 23,
            name: "John",
            color: "Blue"
        },
        {
            age: 27,
            name: "Alice",
            color: "Pink"
        },
        {
            age: 87,
            name: "Robert",
            color: "Gray"
        },
        {
            age: 23,
            name: "Sheldon",
            color: "Black"
        },
        {
            age: 45,
            name: "Will",
            color: "Green"
        },
        {
            age: 16,
            name: "Kevin",
            color: "Yellow"
        },
        {
            age: 37,
            name: "Liz",
            color: "Pink"
        },
        {
            age: 98,
            name: "Noah",
            color: "White"
        },
        {
            age: 31,
            name: "Alfredo",
            color: "White"
        },
        {
            age: 74,
            name: "Rhenard",
            color: "Green"
        },
        {
            age: 39,
            name: "Myk",
            color: "Blue"
        },
    ];

    //1 - Who (name - age) is the oldest
    //2 - Who (name - age) is the youngest
    //3 - Sum of All ages 

    /*Required read about
    HTTP Methods (GET, POST, PUT, PATCH , DELETE)
    HTTP Status Codes
    */


}

$("#btn_register").on( "click", function(){
    register();
});