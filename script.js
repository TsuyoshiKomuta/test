document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');

    characters.forEach(character => {
        character.addEventListener('click', () => {
            alert(`${character.innerText} が選択されました`);
        });
        $(document).ready(function () {
            $('#character-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
            });

            $('.character').on('click', function () {
                alert($(this).text() + ' が選択されました');
            });
        });
});
$(document).ready(function () {
    $('#character-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
    });

    $('.character').on('click', function () {
        alert($(this).text() + ' が選択されました');
    });
});
