$(document).ready(function() {
    $('.menu-overlay').click(function(event) {
        if (!$(event.target).closest('.menu-block').length) {
            closeMenu();
        }
    });

    $('.menu-block').click(function(event) {
        event.stopPropagation();
    });

    $('.menu-show').click(function() {
        showMenu();
    });

    $('.menu-cross-icon').click(function() {
        closeMenu();
    });

    $('.menu-item-arrow-down').click(function() {

        let menuItemDescription = $(this).data('menu');
        $('#' + menuItemDescription).toggleClass('active');

    });

    $('.cultivation .grid-item').click(function(event) {
        event.stopPropagation(); 
        clearDescription();
        $(this).find('.grid-item-description').addClass('active');
    });
}); 

function clearDescription() {
    $('.grid-item-description').removeClass('active');
}

function showMenuItem() {
    let items = $('.menu-item');
    
    items.each((index, element) => {
        setTimeout(() => {
            console.log(element);
            $(element).addClass('active');
        }, 100 * index);
    });
}

function removeMenuItem() {
    $('.menu-item').removeClass('active');
}


function showMenu() {
    $('.menu-overlay').addClass('menu-active');
    showMenuItem()
}

function closeMenu() {
    $('.menu-overlay').removeClass('menu-active');
    removeMenuItem();
    clearActiveMenuTabs();
}

function clearActiveMenuTabs() {
    $('.menu-item-description').removeClass('active');
}
