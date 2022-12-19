'use strict';


var vared = prompt(`Soo what keyword do u wanna search?`);


if (!vared) {
    vared = `bad buddy`;
}



fetch('https://api.tvmaze.com/search/shows?q=' + vared).
    then(response => response.json()).
    then(data => info(data));


const pic = document.querySelector('#pictures');
const body = document.querySelector('body');
const main = document.createElement('main');
body.appendChild(main);
const section = document.createElement('section');
main.appendChild(section);



function info(data) {
    for (const dat in data) {
        // name of show as h1 element
        const h1 = document.createElement('h1');
        h1.innerHTML = data[dat]['show']['name'];
        section.appendChild(h1);
        // genra as h5 element
        const h5 = document.createElement('h5');
        h5.innerHTML = 'Genres: ';
        // seperator between genras
        const span = document.createElement('span');
        const genres = data[dat]['show']['genres'];
        const separetor = genres.join(' | ');
        span.textContent = separetor;
        h5.appendChild(span);
        section.appendChild(h5);
        // show's link
        const k = document.createElement('a');
        section.appendChild(k);
        const attr = document.createAttribute('href');
        attr.value = data[dat]['show']['url'];
        k.setAttributeNode(attr);
        const kim = document.createAttribute('hadaf');
        kim.value = '_blank';
        k.setAttributeNode(kim);
        k.innerHTML = data[dat]['show']['url'];
        // poster
        const img = document.createElement('img');
        img.src = data[dat]['show']['image']['medium'];
        // text were the img doesn't show
        img.alt = `Showe's poster`;
        // when there is no poster pic
        img.addEventListener('error', function (event) {
            event.pic.src = 'https://via.placeholder.com/100x200?text=text+here';
            event.onerror = null;
        });
        section.appendChild(img);
        const sum = document.createElement('h4');
        sum.innerHTML = data[dat]['show']['summary'];
        section.appendChild(sum);

    }
}