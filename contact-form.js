function submitButton() {
  const first = document.getElementById("first-name").value;
  const last = document.getElementById("last-name").value;
  const message = document.getElementById("message").value;
  const enquiry = document.getElementById("radio-enquiry").checked;
  const request = document.getElementById("radio-request").checked;
  const consent = document.getElementById("checkbox").checked;

  console.log(consent);

  const mail = document.getElementById("email").value;
  const specialChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = specialChar.test(mail);

  const checked = document.getElementById("checkbox").checked;
  function checkBoxes() {
    if (!checked) {
      alert("Checkbox not checked");
    }
    return checked;
  }

  function emailValidation() {
    if (!isValid) {
      alert("Special characters are not allowed");
    }
    return mail.includes("@");
  }

  if (first && last && mail && message && emailValidation() && checkBoxes()) {
    alert("Thanks for completing the form. we'll be in touch soon!");
  } else {
    alert("One of the fields do not meet the criteria");
  }

  //CSS property manipulation through JS
  const firstColor = document.querySelector("#first-name");
  const warning = document.querySelector("#alert");

  const lastColor = document.querySelector("#last-name");
  const lastAlert = document.querySelector("#last-alert");

  const emailColor = document.querySelector("#email");
  const emailAlert = document.querySelector("#email-alert");

  const enquiryAlert = document.querySelector("#enquiry-alert");

  const messageColor = document.querySelector("#message");
  const messageAlert = document.querySelector("#message-alert");

  const consentAlert = document.querySelector("#consent-alert");

  if (!first) {
    firstColor.style.borderColor = "red";
    warning.innerHTML = "Please fill this field";
    warning.style.color = "red";
  }

  if (!last) {
    lastColor.style.borderColor = "red";
    lastAlert.innerHTML = "Please fill this field";
    lastAlert.style.color = "red";
  }

  if (!mail) {
    emailColor.style.borderColor = "red";
    emailAlert.innerHTML = "Please fill this field";
    emailAlert.style.color = "red";
  }

  if (!enquiry && !request) {
    enquiryAlert.innerHTML = "Please select a query type";
    enquiryAlert.style.color = "red";
  }

  if (!message) {
    messageColor.style.borderColor = "red";
    messageAlert.innerHTML = "Please fill this field";
    messageAlert.style.color = "red";
  }

  if (!consent) {
    consentAlert.innerHTML = "Please select a query type";
    consentAlert.style.color = "red";
  }

  if (
    !first ||
    !last ||
    !mail ||
    !message ||
    (!enquiry && !request) ||
    !consent
  ) {
    const main = document.getElementById("main");
    main.style.height = "840px";
    main.style.backgroundColor = "white";
  }

  emailValidation();
}
