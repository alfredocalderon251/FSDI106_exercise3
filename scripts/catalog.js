
/** GLOBAL Variables */
//var items = ["Item 1", "Item 2", "Item 42"];

var items = [
    {
        code: "askk123",
        title: "Phone",
        price: 123.45,
        description: "This is the long description of a product so the client learn about it and buy it",
        category: "Electronics",
        rating: 4,
        image: "images/phone.jpg"
    },
    {
        code: "13224",
        title: "PC",
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem",
        category: "Compute",
        rating: 4,
        image: "images/PC.jpg"
    },
    {
        code: "789654",
        title: "Speaker",
        price: 150.10,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem",
        category: "Sound",
        rating: 4,
        image: "images/sound.jpg"
    }
    ,{
        code: "641214",
        title: "TV",
        price: 500.00,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem",
        category: "TV",
        rating: 4,
        image: "images/tv.jpg"
    }
    ,{
        code: "7498764",
        title: "Sofa",
        price: 50.50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem",
        category: "Home",
        rating: 4,
        image: "images/chair.jpg"
    }
    ];
    




/**Functions */
function displayCatalog(){
    /**
     * Travel the Array
     * get each element from the array
     * display the element into the DOM (html)
     */

     for(var i=0;i<items.length;i++){
         var product=items[i];
         //var pLayout="<div> <h4>"+product+"</h4></div>";
         var pLayout=`<div class="item" id="${product.code}">
         <img src="${product.image}">
         <h4>${product.title}</h4>
         <h6 class="itemprice">$${product.price}</h6>
         <p>${product.description}</p>
         <div class="buttondiv">
         <button class="btn btn-primary btn-sm">Add to Cart</button>
         </div>
         </div>
         
         `
         console.log(i,pLayout);
         $('#catalog').append(pLayout);
     }

}
function init(){
    console.log("Catalog Page");
    displayCatalog();
}



$("#btn_search").on( "click", function(){
    
    var SearchText=$('#txt_search').val();
    
    
        for(var i=0;i<items.length;i++){
            if(SearchText.toUpperCase()!=items[i].title.toUpperCase()){
                $('#'+items[i].code).hide();
            }
            else
            {
                $('#'+items[i].code).show();
            }

            if(SearchText==""){
                $('#'+items[i].code).show();
            }
        }
   
    
    
    
});

btn_search
/**Initialization */
window.onload=init;