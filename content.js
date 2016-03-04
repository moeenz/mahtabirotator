$('a[data-user-id="719125992"] img, img.ProfileAvatar-image[src="https://pbs.twimg.com/profile_images/705507027200528384/AnTc3PwI_400x400.jpg"]').each(function (index) {
    $(this).rotate(180);
});

document.addEventListener("DOMSubtreeModified", function(event){
    $('a[data-user-id="719125992"] img, img.ProfileAvatar-image[src="https://pbs.twimg.com/profile_images/705507027200528384/AnTc3PwI_400x400.jpg"]').each(function (index) {
        $(this).rotate(180);
    });
});
