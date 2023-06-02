const form = document.querySelector("#form")
form.addEventListener("submit", async function (e) {
    ch1 = document.createElement('H1');
    e.preventDefault();
    const userinp = form.elements.link.value;
    const conf = { params: { q: userinp } }
    image = document.createElement('IMG');
    image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + conf.params.q;
    clearscreen();
    image.setAttribute("id", "image");
    image.setAttribute("class", "rounded mx-auto d-block mt-2")
    document.body.append(image);
    form.elements.link.value = '';
})

const clearscreen = () => {
    while (document.getElementById('image') != null) {
        const im = document.getElementById('image');
        im.remove();
    }
}
