$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get  the inputs required
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function  for order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //to check the price i used switch case for the instances
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "chicken&mushroom":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "chicken&beefpepp":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "meetdaluxe":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 140;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 90;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 90;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 90;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 90;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 130;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 130;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 130;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 110;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 110;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 180;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 180;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);

        //create a new object

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('#deliver').show(1000);
        $('#pickup').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver  click function
    $("#deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('#deliver').hide(1000);
        $('#pickup').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up click function
    $("#pickup").click(function () {

        alert("Your order is ready for pickup")
    });
    $("#make-delivery").click(function () {

        alert("your order has been received, an extra cost of 180ksh will be charged for the delivery")
        // if (document.forms['frm'].question.value === "") {
        //     alert("empty");
        //     return false;
        //   }
        
    });
    // function IsEmpty() {
    //     if (document.forms['frm'].question.value === "") {
    //       alert("empty");
    //       return false;
    //     }
    //     return true;
    //   }
    //   <form name="frm">
    //     Question: <input name="question" /> <br />
    //     <input id="insert" onclick="return IsEmpty();" type="submit" value="Add Question" />
    //   </form>
});
// function makeDelivary(){
//     alert("your order has been received, an extra cost of 180ksh will be charged for the delivery")
// }