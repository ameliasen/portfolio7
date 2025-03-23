function toggleContent(element) {
  const content = element.nextElementSibling;

  // Check if the content is already visible
  if (content.classList.contains("show")) {
      content.classList.remove("show"); // Hide the content
  } else {
      // Hide other open sections
      document.querySelectorAll('.contact-content').forEach(section => {
          section.classList.remove("show");
      });

      content.classList.add("show"); // Show the clicked section
  }
}



    document.addEventListener("DOMContentLoaded", () => {
        const textContents = document.querySelectorAll(".text-content");

        // Check if an element is in the viewport
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
        };

        // Add 'visible' class when the element is in the viewport
        const handleScroll = () => {
            textContents.forEach((textContent) => {
                if (isInViewport(textContent)) {
                    textContent.classList.add("visible");
                }
            });
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Trigger animation on page load for elements already in the viewport
        handleScroll();
    });



    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
    
        // Check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
    
        // Add the 'visible' class when in the viewport
        function handleScroll() {
            cards.forEach((card) => {
                if (isInViewport(card)) {
                    card.classList.add("visible");
                }
            });
        }
    
        // Listen to scroll and call handleScroll
        window.addEventListener("scroll", handleScroll);
    
        // Initial check
        handleScroll();
    });
    






    function validateForm() {
        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const agree = document.getElementById("agree").checked;
        const nameError = document.getElementById("name-error");
        const usernameError = document.getElementById("username-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const agreeError = document.getElementById("agree-error");
    
        nameError.textContent = "";
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        agreeError.textContent = "";
    
        let isValid = true;
    
        if (name === "" || /\d/.test(name)) {
            nameError.textContent = "Please enter your name properly.";
            isValid = false;
        }
    
        if (!/^[A-Za-z]\w{5,29}$/.test(username)) {
            usernameError.textContent = "Please enter a valid username (letters and numbers, 6-30 characters).";
            isValid = false;
        }
    
        if (email === "" || !email.includes("@")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }
    
        if (password === "" || password.length < 6) {
            passwordError.textContent = "Please enter a password with at least 6 characters.";
            isValid = false;
        }
    
        if (!agree) {
            agreeError.textContent = "Please agree to the above information.";
            isValid = false;
        }
    
        return isValid;
    }
    

    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }
    
    function toggleContent(element) {
        const content = element.nextElementSibling;
        content.classList.toggle('active');
    }
    


    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const message = document.getElementById('message').value.trim();

        document.getElementById('nameError').textContent = name ? '' : 'Name is required';
        document.getElementById('emailError').textContent = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? '' : 'Valid email is required';
        document.getElementById('phoneError').textContent = phone.match(/^\d{10}$/) ? '' : 'Valid 10-digit mobile number is required';
        document.getElementById('addressError').textContent = address ? '' : 'Address is required';
        document.getElementById('messageError').textContent = message ? '' : 'Message is required';

        if (!name || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !phone.match(/^\d{10}$/) || !address || !message) {
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            this.reset();
        }
    });



    if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}





    if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>

    const buttons = document.querySelectorAll('.interest-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});




const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
    icon.addEventListener("click", function () {
        // Remove 'active' class from all icons
        icons.forEach((el) => el.classList.remove("active"));
        
        // Add 'active' class to the clicked icon
        this.classList.add("active");
    });
});
