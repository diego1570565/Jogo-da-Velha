  
    vez = 'x'
    
    $('#p1').removeClass('vez')
    
    acabou = false

    function jogada(id) {


        if (vez == 'x' && acabou == false && $('#' + id).html() == '') {
         
            $('#p2').removeClass('vez')
            acabou == false
            $('#p1').addClass('vez')
            $('#' + id).html('x')
            verificarvez(vez);
            vez = 'o'
        }
        if (vez == 'o' && acabou == false && $('#' + id).html() == '') {
            $('#p2').addClass('vez')
            $('#p1').removeClass('vez')
            $('#' + id).html('o')
            verificarvez(vez);
            vez = 'x'
        }

        verificarvez()
        acabou = false
        if ($('#1').html() != '' && $('#2').html() != '' && $('#3').html() != '' && $('#4').html() != '' && $('#5').html() != '' && $('#6').html() != '' && $('#7').html() != '' && $('#8').html() != '' && $('#9').html() != '') {
            alert('Empate')
            reiniciar(vez)
        }
    }
    function verificarvez(vez) {
        if ($('#1').html() == vez && $('#2').html() == vez && $('#3').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#4').html() == vez && $('#5').html() == vez && $('#6').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#7').html() == vez && $('#8').html() == vez && $('#9').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#1').html() == vez && $('#4').html() == vez && $('#7').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#2').html() == vez && $('#5').html() == vez && $('#8').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#3').html() == vez && $('#6').html() == vez && $('#9').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#1').html() == vez && $('#5').html() == vez && $('#9').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
        if ($('#3').html() == vez && $('#5').html() == vez && $('#7').html() == vez) {
            alert('Fim de Jogo : ' + vez.toUpperCase() + ' venceu')
            acabou = true
            reiniciar(vez)
        }
    }
    function reiniciar() {
        $('#1').html('')
        $('#2').html('')
        $('#3').html('')
        $('#4').html('')
        $('#5').html('')
        $('#6').html('')
        $('#7').html('')
        $('#8').html('')
        $('#9').html('')
        alert('Novo Jogo')
    }