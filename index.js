

$(".andriodButton").click(()=>{
var a = document.createElement("a");
a.href = "files/Harry Spotter Experiment.apk"
a.setAttribute("download","Harry Spotter Experiment.apk");
a.click();
});


$(".submmitButton").click(()=>{

    if($(".form-control").val().indexOf("@") > -1){
        $(".submmitButton").text("Sending");
        var userEmail = $(".form-control").val();
        Email.send({
            //https://smtpjs.com/
        }).then(
            message => alert(message)
        //  message => {
        //     // $(".submmitButton").text("Sent");
        //     Swal.fire({
        //         title: 'Sent!',
        //         text: "We have received your email address, we will add you to our internal testing team over the next 24 hours. Once you have been added to the internal testing team you will received an email from Apple asking you if you want to join the team, you need to confirm that email.",
        //         icon: 'success',
        //         confirmButtonColor: '#248280',
        //         confirmButtonText: 'OK'
        //       })
        //       $(".submmitButton").text("Submit");
        //       $(".form-control").val("Enter iCloud Email");
        //  }
        );
    } else {
        $(".form-control").css('color', 'red'); 
    }
}); 

$(".form-control").click(()=>{
    $(".form-control").css('color', 'black');
    $(".submmitButton").text("Submit");
    if($(".form-control").val() === "Enter iCloud Email"){
        $(".form-control").val("");
    }
});

//Checking for when the user click outside of the input field
$(document).click(function(event){
    if ($(event.target).closest(".form-control").get(0) == null){
        if($(".form-control").val() === ""){
            $(".form-control").val("Enter iCloud Email");
        }
    }
});