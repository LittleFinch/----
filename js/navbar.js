window.addEventListener('DOMContentLoaded', function() {
    function checknavBarFlat() {
        let v = document.getElementById('navBarFlat').checked;
        let navbar = document.querySelector('.navbar');
        if (v) { // 激活
            navbar.classList.remove('deactive');
            navbar.classList.add('active');
        } else { // 去激活 / 矢活
            navbar.classList.remove('active');
            navbar.classList.add('deactive');
        }
    }
    checknavBarFlat()
    document.getElementById('navBarFlat').addEventListener('change', checknavBarFlat);

})