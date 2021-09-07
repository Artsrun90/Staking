function changePlanValues(val) {
    if (val >= 0 && val <= 999) {
        $('#plan-name').text('STANDART');
        $('#plan-cost').text('100-999');
        $('#plan-time').text('15');
    } else if(val >= 1000 && val <= 4999) {
        $('#plan-name').text('GOLD');
        $('#plan-cost').text('1000-4999');
        $('#plan-time').text('20');        
    } else{
        $('#plan-name').text('PLATINUM');
        $('#plan-cost').text('5000');
        $('#plan-time').text('25');
    }
}

function updateCostInput(val) {
    $('#cost').val(val);
    changePlanValues(val);
}

$(document).on('input', '#cost', function () {
    var value = this.value;
    $('.slider').val(value);
    changePlanValues(value);
})

$('#order').on('click', function () {
    var costVal = $('#cost').val();
    if (costVal >= 0 && costVal < 100) {
        alert('Минимальная сумма 100');
        $('#cost').val('');
    }
    if (costVal > 5000) {
        alert('Максимальная сумма 5000');
        $('#cost').val('');
    }
})

$('#card-btn-0').on('click', function () {
    if (!$('#card-0').hasClass('gradient-overly')) {
        $('#card-0').addClass(' gradient-overly');
        $('#card-0').append(
            `<h2 id="overly-text-card-0" class="overly-text">Возврат депозита через <span id="from-day">20</span> дней</h2>`
        );
        $('#card-btn-0').html('Возобновить');       
        $('#card-btn-0').removeClass('btn-blue');       
    } else{
        $('#card-0').removeClass('gradient-overly');
        $('#overly-text-card-0').remove();
        $('#card-btn-0').html('Расторгнуть');
        $('#card-btn-0').addClass('btn-blue');
    }
})
