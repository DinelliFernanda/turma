var aprovados = 0;
    var reprovados = 0;
    var exameespecial = 0;
    var medias = [];

function CalcularMedia() {
    var alunos = (document.getElementById('alunos').value);
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);

    media = (n1 + n2) / 2;
    medias.push(media);

    
    let totalMedias = medias.length;

    var soma = 0;
    for (let i = 0; i < totalMedias; i++) {
       soma  = medias[i] + soma;
    }

    if(media< 4) {
        resultado = "Reprovado"
        reprovados++;
    }
    
    else if(media >= 4 && media <= 6){
        resultado = "Exame Especial"
        exameespecial++;
    }
    
    else{
        resultado = "Aprovado"
        aprovados++;
    }

    let tbody = document.querySelector('#adicionar');
    let tr = document.createElement('tr');

    let nomeTd = document.createElement('td');
    nomeTd.innerHTML = alunos;
    
    let mediaTd = document.createElement('td');
    mediaTd.innerHTML = media;

    let finalTd = document.createElement('td');
    finalTd.innerHTML = resultado;

    let mediatTd = document.createElement('td');
    mediatTd.innerHTML = soma / totalMedias;

    tr.appendChild(nomeTd);
    tr.appendChild(mediaTd);
    tr.appendChild(finalTd);
    tr.appendChild(mediatTd);
    tbody.appendChild(tr);

    document.querySelector('#aprovados').innerHTML = aprovados;
    document.querySelector('#reprovados').innerHTML = reprovados;
    document.querySelector('#examesespecial').innerHTML = exameespecial;
}