const body = document.querySelector('body');
const Tag1 = document.createElement('div');
const Tag2   = document.createElement('div');
const Box = [];
Tag1.id = 'dispari';
Tag2.id = 'pari';
Tag1.style.color = 'red';
Tag2.style.color = 'green';
for (let i = 0; i < 5000; i++) {
    Box.push(Math.floor(Math.random() * 100));
}
for (let i = 0; i < Box.length; i++) {
    if (Box[i] % 2 === 1 ) {
        Tag1.append(`${Box[i]} `)
    } else {
        Tag2.append(`${Box[i]} `);
    }
}
body.append(Tag1, Tag2);