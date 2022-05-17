function validate() {
    if (document.form1.fname.value.length < 2) {
        alert("Please enter your full name.");
        return false;
    }
    if (document.form1.lname.value.length < 2) {
        alert("Please enter your last name.");
        return false;
    }

    if (document.form1.mail.value.length < 12) {
        alert("Please enter correct email address");
        return false;
    }
    if (document.form1.num.value.length < 10) {
        alert("Please enter full phone number");
        return false;
    }
    if (document.form1.city.value.length < 4) {
        alert("Please enter full city name");
        return false;
    }
    if (document.form1.pcode.value.length < 6) {
        alert("Please enter full Pincode");
        return false;
    }
    if (document.form1.state.value.length < 4) {
        alert("Please enter correct state");
        return false;
    }
    
    return true;
}