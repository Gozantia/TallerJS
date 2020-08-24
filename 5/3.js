const texto3 = document.querySelector(".texto3");

texto3.addEventListener("mouseover", () => {
    return (texto3.innerHTML += `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
    sapiente aliquam possimus doloribus nulla laboriosam recusandae facilis
    enim delectus vero.</p>`);
});