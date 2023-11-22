//your JS code here. If required.
function submitForm() {
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const email = document.getElementById('email').value;

      // Create the result string
      const result = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

      // Display the result using alert
      alert(result);
    }