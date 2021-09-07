function changePlanValues(val) {
    var dalyIncome;
    if (val >= 0 && val <= 999) {
        dalyIncome = (((val*100)/15)/30).toFixed(1)
        $('#plan-name').text('STANDART');
        $('#plan-cost').text('100-999');
        $('#plan-time').text('15');
        $('#daly-income').text(dalyIncome);
        $('#plan-img-src').attr("src","img/standart.png");
    } else if(val >= 1000 && val <= 4999) {
        dalyIncome = (((val*100)/20)/30).toFixed(1)
        $('#plan-name').text('GOLD');
        $('#plan-cost').text('1000-4999');
        $('#plan-time').text('20');        
        $('#daly-income').text(dalyIncome);
        $('#plan-img-src').attr("src","img/gold.png");
    } else{
        dalyIncome = (((val*100)/25)/30).toFixed(1)
        $('#plan-name').text('PLATINUM');
        $('#plan-cost').text('5000');
        $('#plan-time').text('25');
        $('#daly-income').text(dalyIncome);
        $('#plan-img-src').attr("src","img/platinum.png");
    }
}

function updateCostInput(val) {
    $('#cost').val(val);
    changePlanValues(val);
}

$(document).on('input', '#cost', function () {
    var value = this.value;
    if (!value) {
        $('.slider').val("0");  
    }else{
        $('.slider').val(value);
    }
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
    }});

$('#card-btn-1').on('click', function () {
    if (!$('#card-1').hasClass('gradient-overly')) {
        $('#card-1').addClass(' gradient-overly');
        $('#card-1').append(
            `<h2 id="overly-text-card-1" class="overly-text">Возврат депозита через <span id="from-day">20</span> дней</h2>`
        );
        $('#card-btn-1').html('Возобновить');       
        $('#card-btn-1').removeClass('btn-blue');       
    } else{
        $('#card-1').removeClass('gradient-overly');
        $('#overly-text-card-1').remove();
        $('#card-btn-1').html('Расторгнуть');
        $('#card-btn-1').addClass('btn-blue');
    }});

$('#card-btn-2').on('click', function () {
    if (!$('#card-2').hasClass('gradient-overly')) {
        $('#card-2').addClass(' gradient-overly');
        $('#card-2').append(
            `<h2 id="overly-text-card-2" class="overly-text">Возврат депозита через <span id="from-day">20</span> дней</h2>`
        );
        $('#card-btn-2').html('Возобновить');       
        $('#card-btn-2').removeClass('btn-blue');       
    } else{
        $('#card-2').removeClass('gradient-overly');
        $('#overly-text-card-2').remove();
        $('#card-btn-2').html('Расторгнуть');
        $('#card-btn-2').addClass('btn-blue');
    }
});
