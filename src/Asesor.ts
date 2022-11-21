export const app = () => {
    console.log('App');
    // document.body.innerHTML = `<h1> Esto es nuevo de hoy <h1>`;
    const h1 = document.querySelector('h1');
    console.dir(h1);
    if (!h1) return;
    h1.innerHTML += `nuevo h1`;
};
