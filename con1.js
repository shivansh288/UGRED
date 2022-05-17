function display() {
    DispWin = window.open('', 'NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message += "<li><b>EMAIL: </b>" + document.form1.email.value;
    message += "<li><b>PHONE: </b>" + document.form1.phone.value;
    message += "<li><b>GENDER: </b>" + document.form1.gender.value;
    message += "<li><b>CITY: </b>" + document.form1.city.value;
    message += "<li><b>STATE: </b>" + document.form1.state.value;
    message += "<li><b>COUNTRY: </b>" + document.form1.country.value; 
    message += "<li><b>YOUR QUERY: </b>" + document.form1.query.value + "</ul>";
    DispWin.document.write(message);
}