document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    });
  });
  let contador = 1;

setInterval(function() {
    document.getElementById('slide' + contador).checked = true;
    contador = (contador % 5) + 1; // 5 is the total number of slides, adjust if you have a different number

}, 4000);



document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    var formData = new FormData(contactForm);
    var formDataObject = {};
    
    event.preventDefault();

    formData.forEach(function(value, key) {
      formDataObject[key] = value;
    });

    console.log("Dados do Formulário:", formDataObject);

    // Salvar os dados no localStorage
    localStorage.setItem("form_data", JSON.stringify(formDataObject));
    
    alert("Entraremos em contato!");

    // Limpar o formulário após o envio
    contactForm.reset();
  });
});
var savedFormData = localStorage.getItem("form_data");
if (savedFormData) {
  var formDataObject = JSON.parse(savedFormData);
  
  // Preencher o formulário com os dados salvos
  document.getElementById("name").value = formDataObject.name;
  document.getElementById("email").value = formDataObject.email;
  document.getElementById("message").value = formDataObject.message;
}