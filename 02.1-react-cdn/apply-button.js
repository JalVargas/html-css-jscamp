const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

/*. TENGO DUDAS,ENTENDI SOLO QUE LA PRIMERA LINEA LLAMA. A  la class jobs-listings que esta en  la pagina empleo.  */
