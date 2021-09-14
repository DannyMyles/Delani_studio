function bounce(){
    $('#mouse-click-icon')
    .animate({
        marginTop:"-30px",
        position:"absolute"
    }, 500)
    .animate({
        marginTop:"0",
        position:"absolute"
    }, {
        duration:500,
        complete:bounce
    });
}

function scrollToAboutUs(){
    const position = $("#aboutus-section").offset();
    console.log(position);
    $('html, body').animate({
        scrollTop:position.top+'px'
    }, 500);
    // scrollTo(0, position.top);
}

function flip(evt){

}

function pulsate(element, element2) {
    $(element).animate({ opacity: 0 }, 500, function() {
        $(element).hide();
        $(element2).show().animate({ opacity:1 }, 500);
    });
}

$(document).ready(function(){
    bounce();
    $('#mouse-click-icon').click(scrollToAboutUs);
    $('.what-we-do-icon').click(function(evt){
        pulsate(this, $(this).prev());
    });

    $('.description').mouseout(function(){
        pulsate(this, $(this).next());
    });

    $('#contactUsForm').submit(function(evt){
        evt.preventDefault();

        const form = evt.target;
        console.log($(form).find('.alert'));
        if(!form.checkValidity()){
            $(form).find('.alert').addClass('alert-danger').html('Check Missing Fields').show();
            return;
        }

        const formData = new FormData(form);
        console.log(formData);
        // $(form).find('.alert').romoveClass('alert-danger');
        $(form).find('.alert').addClass('alert-success')
        .html(form.name.value+' we have received your message. Thank you fro reaching out to us.')
        .show()
    });
});

