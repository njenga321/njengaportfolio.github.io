
// Initialize firebase
  firebase.initializeApp(firebaseConfig);

// Firebase confg
  const firebaseConfig = {
    apiKey: "AIzaSyAN32zszjdQaO69tn43i7cP_Q_7A7Big6Y",
    authDomain: "new-portfolio-46ed6.firebaseapp.com",
    databaseURL: "https://new-portfolio-46ed6-default-rtdb.firebaseio.com",
    projectId: "new-portfolio-46ed6",
    storageBucket: "new-portfolio-46ed6.appspot.com",
    messagingSenderId: "750560812675",
    appId: "1:750560812675:web:836d38c55877e481b505b6",
    measurementId: "G-2B4KDSN1J8"
  };




// Reference database
  var contactFormDB = firebase.database().ref("New Portfolio");

  document.getElementById("contactForm").addEventListener("submit", submitForm);


  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    console.log(name, emailid, msgContent);
  };


const getElementVal = (id) => {
  return document.getElementById(id).value;
};



