window.onload = function() {
    document.getElementById('navBarFlat').checked = false;
    document.getElementById('navBarFlat').addEventListener('change', function(e) {
        let v = this.checked;
        let navbar = document.querySelector('.navbar');
        if (v) { // 激活
            navbar.classList.remove('deactive');
            navbar.classList.add('active');
        } else { // 去激活 / 矢活
            navbar.classList.remove('active');
            navbar.classList.add('deactive');
        }
    });

}