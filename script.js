document
  .querySelector("button[type='button']")
  .addEventListener("click", function () {
    const phoneNumber = document.getElementById("phone-number");
    const form = document.getElementById("form");
    const resultElement = document.getElementById("result");
    const mtn = document.getElementById("mtn");
    const glo = document.getElementById("glo");
    const airtel = document.getElementById("airtel");
    const mobile = document.getElementById("mobile");

    const messages = checkNumber(phoneNumber);
    const network = checkNetwork(phoneNumber.value);

    if (messages.length > 0) {
      resultElement.innerHTML = messages.join(", ");
    } else {
      resultElement.innerHTML = network;
    }
  });

function checkNumber(phoneNumber) {
  let messages = [];
  const phoneNumberValue = phoneNumber.value.trim();

  if (phoneNumberValue === "" || phoneNumberValue === null) {
    messages.push("Please enter a phone number");
  } else if (phoneNumberValue.length !== 11) {
    messages.push("Phone number must be 11 digits");
  }

  return messages; // Return the error messages
}

function checkNetwork(phoneNumberValue) {
  const mtnPrefixes = /^(0803|0806|0813|0816|0810|0903|0906|0703|0706|0814)/;
  const gloPrefixes = /^(0705|0805|0807|0811|0815|0905)/;
  const airtelPrefixes = /^(0701|0708|0802|0808|0812|0902|0907|0901|0912)/;
  const etisalatPrefixes = /^(0809|0817|0818|0908|0909)/;

  if (mtnPrefixes.test(phoneNumberValue) && phoneNumberValue.length == 11) {
    mtn.style.display = "block";
    return "MTN";
  } else if (
    gloPrefixes.test(phoneNumberValue) &&
    phoneNumberValue.length == 11
  ) {
    glo.style.display = "block";
    return "Glo";
  } else if (
    airtelPrefixes.test(phoneNumberValue) &&
    phoneNumberValue.length == 11
  ) {
    airtel.style.display = "block";
    return "Airtel";
  } else if (
    etisalatPrefixes.test(phoneNumberValue) &&
    phoneNumberValue.length == 11
  ) {
    mobile.style.display = "block";
    return "9mobile";
  }
}
