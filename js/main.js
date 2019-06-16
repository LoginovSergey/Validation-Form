function checkNumber () {
    $(function () {
        $("#first_input").mask("8 (999) 999-99-99");
    });

    let wrapperFirstInput = document.getElementById('wrapper_first_input');
    let wrongPass = document.getElementById('second_input');
    let checkPhoneNumber = document.getElementById('first_input');
    let wrong = document.getElementById('wrong');
    let ok = document.getElementById('ok_svg');
    let btn = document.getElementById('btn');
    let pass = document.getElementById('second_input').value;

    if (checkPhoneNumber.value.search(/[^0-9()\- ]/gi) >= 0 || checkPhoneNumber.value === '' || checkPhoneNumber.value.length !== 17 || pass.length < 4) {
        wrong.style.display = 'block';
        ok.style.display = 'none';
        checkPhoneNumber.style.color = '#b40000';
        wrapperFirstInput.style.backgroundColor = '#fff';
        wrongPass.style.backgroundColor = '#fff'
    } else {
        ok.style.display = 'block';
        wrong.style.display = 'none';
        checkPhoneNumber.style.color = '#fff';
        wrongPass.style.backgroundColor = 'transparent';
        wrapperFirstInput.style.backgroundColor = 'transparent';
    }

    if (wrong.style.display !== 'block') {
        btn.disabled = false;
        btn.style.backgroundColor = '#ffffff';
        btn.style.opacity = '1';
    } else {
        btn.disabled = true;
        btn.style.opacity = '0.2';
        btn.style.backgroundColor = 'transparent'
    }
}