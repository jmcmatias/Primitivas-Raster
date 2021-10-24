function callStart() {
    if (document.getElementById("PMC").checked) {
        document.getElementById('circunStart').style.display = 'inherit';
        document.getElementById('drawCircun').style.display = 'none';
    } else {
        document.getElementById('lineStart').style.display = 'inherit';
        document.getElementById('drawLine').style.display = 'none';

    }
    clearScene();
}



function callSelection() {
    clearScene();
    if (document.getElementById("PMC").checked) {
        var xa = 0;
        var ya = 0;
        var raio = document.getElementById("raio").value;
        document.getElementById('infoCircun').innerHTML = 'Ponto a = ( ' + xa + ',' + ya + ' )   Raio = ( ' + raio + ' )';
        document.getElementById('circunStart').style.display = 'none';
        document.getElementById('drawCircun').style.display = 'inherit';

    } else {
        var xa = document.getElementById("xa").value;
        var ya = document.getElementById("ya").value;
        var xb = document.getElementById("xb").value;
        var yb = document.getElementById("yb").value;
        document.getElementById('infoLine').innerHTML = 'Ponto a = ( ' + xa + ',' + ya + ' )   Ponto b = ( ' + xb + ',' + yb + ' )';
        document.getElementById('lineStart').style.display = 'none';
        document.getElementById('drawLine').style.display = 'inherit';
    }



    if (document.getElementById("DDA").checked) {
        console.log('x0=' + xa + ',  y0=' + ya + ', x1=' + xb + ', y1=' + yb);
        DDA(xa, ya, xb, yb);
    } else if (document.getElementById("PML").checked) {
        PML(xa, ya, xb, yb);
    } else if (document.getElementById("PMC").checked) {
        PMC(xa, ya, raio);
    }
}

function selectDDA() {
    document.getElementById("algtitle").innerHTML = '<h1>Algoritmo DDA (digital differential analyzer)</h1>';
    document.getElementById("dataDiv").style.display = 'inherit';
    document.getElementById("circun").style.display = 'none';
    document.getElementById("line").style.display = 'inherit';
    if (document.getElementById('drawLine').style.display != 'none')
        callSelection();
}

function selectPML() {
    document.getElementById("algtitle").innerHTML = '<h1>Algoritmo Ponto Médio para geração de linhas</h1>';
    document.getElementById("dataDiv").style.display = 'inherit';
    document.getElementById("circun").style.display = 'none';
    document.getElementById("line").style.display = 'inherit';
    if (document.getElementById('drawLine').style.display != 'none')
        callSelection();
}

function selectPMC() {
    document.getElementById("algtitle").innerHTML = '<h1>Algoritmo Ponto Médio para geração de circunferências</h1>';
    document.getElementById("dataDiv").style.display = 'inherit';
    document.getElementById("line").style.display = 'none';
    document.getElementById("circun").style.display = 'inherit';
    if (document.getElementById('drawCircun').style.display != 'none')
        callSelection();
}