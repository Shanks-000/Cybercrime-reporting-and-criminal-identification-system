const firebaseConfig = {
    apiKey: "AIzaSyCMiqn91jR1keM7pfk1_dznhsq9y9Q7wQw",
    authDomain: "ccrime-72ceb.firebaseapp.com",
    databaseURL: "https://ccrime-72ceb-default-rtdb.firebaseio.com",
    projectId: "ccrime-72ceb",
    storageBucket: "ccrime-72ceb.appspot.com",
    messagingSenderId: "20188355528",
    appId: "1:20188355528:web:53b4b639979e7f8184fefd"
  };

  firebase.initializeApp(firebaseConfig);

  var crimeFormDB = firebase.database().ref('crimeForm');

  document.getElementById('crimeForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault(); 
    var type = getElementval('type');
    var aadhar = getElementval('aadhar');
    var description = getElementval('description');

    saveDescriptions(type, aadhar, description);

    //alert msg dal rhe h abb
   // document.querySelector('alert').style.display = 'block';

   //reset form
    document.getElementById("crimeForm").reset();
  }

  const saveDescriptions = (type,aadhar,description) => {

    var newCrimeForm = crimeFormDB.push();

    newCrimeForm.set({
        type : type,
        aadhar : aadhar,
        description : description,
    })
  };

  const getElementval = (id) => {
    return document.getElementById(id).value;
  };