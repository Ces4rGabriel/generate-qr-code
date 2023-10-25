let button = document.querySelector('#button-enviar');

function viewUrl() {
    let url = document.getElementById('input-text').value;
    let urlQrCode = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + url + '&choe=UTF-8';
    window.location.href = 'qrcode.html?url=' + encodeURIComponent(urlQrCode);
}

