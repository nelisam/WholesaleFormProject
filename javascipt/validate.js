//Declaring
function validate() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var seeCompanyRegField = document.getElementById("seeCompanyRegField").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";
//Validation
  var text;
  if (name.length < 2) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (surname.length < 2) {
    text = "Please Enter valid Surname";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 20) {
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  //Display Form Information
  alert(
    "Form Submitted Successfully!\n" +
      " Your name is " +
      name +
      " " +
      surname +
      ".\n\nYou're a : " +
      seeCompanyRegField +
      " Business." +
      "\n\nWe can contact you using your telephone number: " +
      phone +
      " or your email address: " +
      email +
      " \n\n Your message is: \n" +
      message +
      "."
  );
  return true;
}
