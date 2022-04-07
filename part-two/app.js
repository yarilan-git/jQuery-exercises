$("#submit").on("click", function (event) {    
    event.preventDefault();
    if ($("input").eq(0).val().length < 2) {
        alert("The movie name must have at least two characters!");
        return;
    }

    if (isNaN($("input").eq(1).val()) || 
       $("input").eq(1).val() < 0     || 
       $("input").eq(1).val() > 10    || 
       $("input").eq(1).val() === '') {
        alert("The rating must be a number between 0 and 10!");
        return;
    }
    const nameTD =   "<td>" + $("input").eq(0).val() + "</td>";
    const ratingTD = "<td>" + $("input").eq(1).val() + "</td>";
    const removeBtn = "<td> <button>Remove</button> </td>";
    const newRow = "<tr>" + nameTD + ratingTD + removeBtn + "</tr>";
    $("tbody").append(newRow);
})

$("tbody").on("click", "tr", function () {
    $(this).remove();
})