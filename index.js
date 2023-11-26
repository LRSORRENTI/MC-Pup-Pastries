let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelector(".popup-open");
let popupClose = document.querySelector(".close-btn");

popupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showPopup();
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  removePopup();
});

popupForm.addEventListener("submit", () => {
  removePopup();
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopup();
  } else return;
});

function showPopup() {
  popup.classList.add("active");
  bodyScroll();
}

function removePopup() {
  popup.classList.remove("active");
  bodyScroll();
}

function bodyScroll() {
  document.body.classList.toggle("no-scroll");
}

function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('.popup-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);
    console.log(formData)
       // Debugging: Log the form data entries
       for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
    fetch('http://localhost:3000/send', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      var popup = document.getElementById('popup-message');
      var popupText = document.getElementById('popup-text');
      
      if(data.success) {
        popupText.textContent = data.message; // Set the message
        popup.style.display = 'block'; // Show the popup

        setTimeout(function() {
          closePopup(); // Hide the popup after 2 seconds
         // window.location.href = '/'; // Redirect to the homepage
        }, 2000);
      } else {
        popupText.textContent = data.message; // Set the error message
        popup.style.display = 'block'; // Show the popup
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('popup-text').textContent = 'An error occurred while sending the email.';
      document.getElementById('popup-message').style.display = 'block';
    });
  });
});
