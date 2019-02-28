// $(window).ready(function (){ long variant
// })

$(function () {//short variant

    const ITEM_LINE = $('#item-line-template');
    const ITEM_BOX  = $('#item-box-template');

    createProduct('Banana');
    createProduct('Tomato');
    createProduct('Apple');

    $('#add-button').click(addItem);
    $('.content-box').submit(addItem);

    function addItem() {
        let $inputField = $('#input-field');
        let productName = $inputField.val();
        if(productName!=='') {
            createProduct(productName);
        }
        $inputField.val('');
        return false;
    }
    function createProduct(name) {
        let $cloneLine = ITEM_LINE.clone();
        let $cloneBox = ITEM_BOX.clone();
        let productQuantity = 1;

        $cloneLine.find('#name-span').text(name);
        $cloneLine.find('#not-bought-name-span').text(name);
        $cloneLine.find('#rename-input').val(name);
        $cloneLine.find('#quantity-span').text(productQuantity);
        $cloneLine.show();

        $cloneBox.find('.item-name').text(name);
        $cloneBox.find('#quantity-span').text(productQuantity);
        $cloneBox.show();

        $cloneLine.find('#name-span').click(function () {
            $cloneLine.find('#name-span').hide();
            $cloneLine.find('#rename-input').show();
            $cloneLine.find('#rename-input').focus();
        });

        $cloneLine.find('#rename-input').focusout(function () {
            $cloneLine.find('#rename-input').hide();
            let newName = $cloneLine.find('#rename-input').val();
            $cloneLine.find('#name-span').text(newName);
            $cloneLine.find('#not-bought-name-span').text(newName);
            $cloneBox.find('.item-name').text(newName);
            $cloneLine.find('#name-span').show();
        });

        $cloneLine.find('#plus-button').click(function () {
            $cloneLine.find('#minus-button').removeClass('disabled');
            productQuantity++;
            $cloneLine.find('#quantity-span').text(productQuantity);
            $cloneBox.find('#item-counter').text(productQuantity);
        });

        $cloneLine.find('#minus-button').click(function () {
            productQuantity--;
            if(productQuantity===1)
                $cloneLine.find('#minus-button').addClass('disabled');
            $cloneLine.find('#quantity-span').text(productQuantity);
            $cloneBox.find('#item-counter').text(productQuantity);
        });

        $cloneLine.find('#delete-button').click(function () {
            $cloneLine.remove();
            $cloneBox.remove();
        });

        $cloneLine.find('#bought-button').click(function () {
            $cloneLine.find('#name-span').hide();
            $cloneLine.find('#plus-button').hide();
            $cloneLine.find('#minus-button').hide();
            $cloneLine.find('#bought-button').hide();
            $cloneLine.find('#delete-button').hide();
            $cloneLine.find('#not-bought-name-span').show();
            $cloneLine.find('#not-bought-button').show();
            $('#bought-box').append($cloneBox);
        });

        $cloneLine.find('#not-bought-button').click(function () {
            $cloneLine.find('#not-bought-button').hide();
            $cloneLine.find('#not-bought-name-span').hide();
            $cloneLine.find('#plus-button').show();
            $cloneLine.find('#minus-button').show();
            $cloneLine.find('#bought-button').show();
            $cloneLine.find('#delete-button').show();
            $cloneLine.find('#name-span').show();
            $('#not-bought-box').append($cloneBox);
        });

        $('#product-list').append($cloneLine);
        $('#not-bought-box').append($cloneBox);
    }
}) ;