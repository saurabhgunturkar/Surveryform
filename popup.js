function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = Array.from(document.getElementsByName("gender")).filter(cb => cb.checked).map(cb => cb.value);
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
        alert("Please fill in all fields.");
        return;
    }

    //display values from variable
    document.getElementById("resultFirstName").innerText = firstName;
    document.getElementById("resultLastName").innerText = lastName;
    document.getElementById("resultDOB").innerText = dob;
    document.getElementById("resultCountry").innerText = country;
    document.getElementById("resultGender").innerText = gender.join(", ");
    document.getElementById("resultProfession").innerText = profession;
    document.getElementById("resultEmail").innerText = email;
    document.getElementById("resultMobile").innerText = mobile;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {

    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {

    document.getElementById("surveyForm").reset();
}
