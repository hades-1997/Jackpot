var dangquay = document.getElementById('dangquay');
var votay = document.getElementById('votay');
var vongquay = document.getElementById('vongquay');
var firework = document.getElementById('animation_firework');

function chay(totalStaff) {
        firework.style.display = "none";
        var so_1 = 0;
        var so_2 = 0;
        var so_3 = 0;

        b = String(Math.floor(Math.random() * totalStaff) + 1);

        dangquay.play();
        vongquay.play();

        setTimeout(function () {
                var c = b.length
                if (c == 1) {
                        so_1 = 0;
                        so_2 = 0;
                        so_3 = b;
                }
                if (c == 2) {
                        so_1 = 0;
                        so_2 = b.substr(0, 1);
                        so_3 = b.substr(1, 1);
                }
                if (c == 3) {
                        so_1 = b.substr(0, 1);
                        so_2 = b.substr(1, 1);
                        so_3 = b.substr(2, 1);
                }
                $('#tens').removeClass('tens1');
                $('#tens').removeClass('tens2');
                $('#tens').removeClass('tens3');
                $('#tens').removeClass('tens4');
                $('#tens').removeClass('tens5');
                $('#tens').removeClass('tens6');
                $('#tens').removeClass('tens7');
                $('#tens').removeClass('tens8');
                $('#tens').removeClass('tens9');
                $('#tens').removeClass('tens0');
                $('#units').removeClass('units1');
                $('#units').removeClass('units2');
                $('#units').removeClass('units3');
                $('#units').removeClass('units4');
                $('#units').removeClass('units5');
                $('#units').removeClass('units6');
                $('#units').removeClass('units7');
                $('#units').removeClass('units8');
                $('#units').removeClass('units9');
                $('#units').removeClass('units0');
                $('#hundreds').removeClass('hundreds1');
                $('#hundreds').removeClass('hundreds2');
                $('#hundreds').removeClass('hundreds3');
                $('#hundreds').removeClass('hundreds4');
                $('#hundreds').removeClass('hundreds5');
                $('#hundreds').removeClass('hundreds6');
                $('#hundreds').removeClass('hundreds7');
                $('#hundreds').removeClass('hundreds8');
                $('#hundreds').removeClass('hundreds9');
                $('#hundreds').removeClass('hundreds0');

                setTimeout(function () {
                        $('#units').addClass('units' + so_3);
                }, 100);
                setTimeout(function () {
                        $('#hundreds').addClass('hundreds' + so_1);
                }, 100);
                setTimeout(function () {
                        $('#tens').addClass('tens' + so_2);
                }, 100);
                setTimeout(function () {
                        firework.style.display = "block";
                        mopopup(so_1, so_2, so_3);
                        dangquay.pause();
                        vongquay.pause();
                        votay.play();
                }, 12000);

        }, 100);
}

function reset() {
        $('#tens').removeClass('tens1');
        $('#tens').removeClass('tens2');
        $('#tens').removeClass('tens3');
        $('#tens').removeClass('tens4');
        $('#tens').removeClass('tens5');
        $('#tens').removeClass('tens6');
        $('#tens').removeClass('tens7');
        $('#tens').removeClass('tens8');
        $('#tens').removeClass('tens9');
        $('#tens').removeClass('tens0');
        $('#units').removeClass('units1');
        $('#units').removeClass('units2');
        $('#units').removeClass('units3');
        $('#units').removeClass('units4');
        $('#units').removeClass('units5');
        $('#units').removeClass('units6');
        $('#units').removeClass('units7');
        $('#units').removeClass('units8');
        $('#units').removeClass('units9');
        $('#units').removeClass('units0');
        $('#hundreds').removeClass('hundreds1');
        $('#hundreds').removeClass('hundreds2');
        $('#hundreds').removeClass('hundreds3');
        $('#hundreds').removeClass('hundreds4');
        $('#hundreds').removeClass('hundreds5');
        $('#hundreds').removeClass('hundreds6');
        $('#hundreds').removeClass('hundreds7');
        $('#hundreds').removeClass('hundreds8');
        $('#hundreds').removeClass('hundreds9');
        $('#hundreds').removeClass('hundreds0');
        $('#thongbao').css('display', 'none');
        firework.style.display = "none";
        dangquay.pause();
        vongquay.pause();
        votay.pause();
}

function mopopup(so_1, so_2, so_3) {
        $('#sotrungthuong').text(so_1 + so_2 + so_3);
        $('#thongbao').css('display', 'block');
}