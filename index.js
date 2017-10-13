//CASH REGISTER
/*
WTF is this very first anonymous function?!?
*/

$(function(){

    //Declare and assign global variables
    //var productList = {"apple": 1, "pear": 2, "pineapple": 5, "guava": 100};
    var total = 0;
    var products = {
      'apple': 1,
      'pear': 5,
      'pineapple': 10
    }

    //Event Handler
    $("#register").on('submit', function(submitEvent){

        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var product = $("#entry").val();
        var itemCost = products[product];
        console.log(itemCost);
        var formattedCost = "";
        var formattedTotal = "";


        //Assign new values
        itemCost = parseFloat(itemCost);
        formattedCost = currencyFormat(itemCost);
        total = total + itemCost;
        formattedTotal = currencyFormat(total);

        //Update the DOM
        $("#itemRow").append('<div class="col-xs-12">' + formattedCost + "</div>");
        //$("#itemRow").append('<div class="row">' + products + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });
});

function currencyFormat(number){
    currency = "$" + number.toFixed(2);
    return currency;
}
