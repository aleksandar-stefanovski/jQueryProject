$(function () {

    // toggleClass
    $("#manager").on("click", function () {
        $(".iForm").slideToggle(400);
        $(".listItems").slideToggle(400);
        listItems
    });

    // Animation for Up
    $(".upToggle").on("click", function () {
        $(".listItems").slideUp(400);
    });


    // Animation for Down
    $(".down").on("click", function () {
        $(".listItems").slideDown(400);
    });

    let pManager;
    let array = [];

    // Save btn
    $(".save-btn").on("click", function () {

        let sName = $("#iName").val();
        let sPhone = $("#iNumber").val();
        let sEmail = $("#iEmail").val();

        // constructor of ol
        pManager = `
        <ol class="list">
        <li id="Result">${sName}</li>
        <li>${sPhone}</li>
        <li>${sEmail}</li>
        <li style="list-style:none;"><button style="margin-top:16px;" class="del-btn">Delete</button></li></ol>`;

        if (sName = "" || sPhone == "") {
            alert("Invalid Input");
        }

        else {
            array.push(pManager);
            $(".listItems").html(array);
            $("#iName").val("");
            $("#iNumber").val("");
            $("#iEmail").val("");
        }
    });

    // Cancel btn
    $(".cancel-btn").on("click", function () {
        if (confirm(`Do you want to clear this form?`)) {
            $("#iName").val("");
            $("#iNumber").val("");
            $("#iEmail").val("");
        } else {
            alert('Okay then :)');
        }
    });


    // Delete btn
    $(document).on("click", ".del-btn", function () {
        if (confirm(`Do you want to delete this Info?`)) {
            array.shift();
            $(".list").remove();
        }
        else {

        }
    });

    // Search btn
    $("#iSearch ").on("keyup", function () {
        let value = $(this).val();
        $(".list li").filter(function () {
            $(this).toggle($(this).text().indexOf(value) > -1)

        });
    });


});