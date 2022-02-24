// DOM SELECTION

// //document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = 'yellow';


// //document.getElementsByTagName()
// menghasilkan HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let index = 0; index < p.length; index++) {
//     p[index].style.backgroundColor = 'lightblue';   
// }

// //document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'nyobain getElementsByClassName';

// //document.querySelector()
// // menghasilkan 1 element html
// const p4 = document.querySelector('#b p');
// p4.style.fontSize = '40px';

// // const li2 = document.querySelector('section#b ul li:nth-child(1)');
// // li2.style.backgroundColor = 'aqua';

// //document.querySelectorAll()
// // menghasilkan nodelist
// const p = document.querySelectorAll('p');
// p[0].style.backgroundColor = 'lightGreen';

// // Scoping
// // tujuannya untuk mempersempit scope daripada document
// const sectionB = document.getElementById('b');
// const pInB = sectionB.getElementsByTagName('p')[0];
// pInB.style.backgroundColor = 'yellow';

// DOM MANIPULATION - Element Manipulation : Memanipulasi elemen/atribut pada html atau css
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Mochammad Zidan Al-Baihaqi';
// innerHTML dapat mengubah apapun dalam htmlnya, termasuk menambahkan tags
// const sectionB = document.getElementById('b');
// const ulParagraf4 = sectionB.getElementsByTagName('ul')[0];
// ulParagraf4.setAttribute('id','ulParagraf4');

// // DOM MANIPULATION - Node Manipulation
// // membuat elemen baru
// const pBaru = document.createElement('p');
// // membuat text node
// const txtPBaru = document.createTextNode('Paragraf Baru');
// // masukkan text node ke elemen
// pBaru.appendChild(txtPBaru);
// // masukkan elemen ke dalam akhir section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// // menyimpan di antara elemen; di li
// // bikin elemen li
// const liBaru = document.createElement('li');
// const txtLiBaru = document.createTextNode('list baru');
// liBaru.appendChild(txtLiBaru);
// const ulParent = document.querySelector('section#b ul');
// const li2 = ulParent.querySelector('li:nth-child(2)');
// ulParent.insertBefore(liBaru,li2);

//removeChild
// pakai elemen sectionA di atas
// const linkRemove = sectionA.querySelector('a');
// sectionA.removeChild(linkRemove);

// //replaceChild
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const h2Baru = document.createElement('h2');
// const txtH2Baru = document.createTextNode('H2 Baru');
// h2Baru.appendChild(txtH2Baru);
// sectionB.replaceChild(h2Baru,p4);

// catatan
// selector nth child dimulai dari indeks 1, sedangkan untuk 
// HTMLCollection dan nodeList dimulai dari 0
// getElementsById dan getElementsByTagName lebih cepat diproses
// untuk removechild, harus bertipe data node

// nyobain d3
