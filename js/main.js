$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath = $('.home-image path'); // каждый новый класс в svg
    var counterUp = $('.counter-up'); // кнопка увеличения этажа
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button')
    var viewFlatsButton = $('.view-flats')
    var menuButton = $('.menu-button')
    var navbarPanel = $('.navbar-panel')

    menuButton.on('click', function() {
        navbarPanel.toggle('fast');
    });

    // функция при наведени мышкой на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счётчик справа
    });

    floorPath.on('click', toggleModal); /* при клике на этаж вызвать окно */
    modalCloseButton.on('click', toggleModal); /* при клике на кнопку закрыть убирает окно */
    viewFlatsButton.on('click', toggleModal);
    counterUp.on('click', function() { // отслеживаем клик по кнопке вверх
        if(currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18-ти
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01 а не 1
            $('.counter').text(usCurrentFloor); // записываем значение этажа в счётчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });
    counterDown.on('click', function() { // отслеживаем клик по кнопке вниз
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    function toggleModal() { // функция открыть-закрыть окно
        modal.toggleClass('is-open');
    }
});