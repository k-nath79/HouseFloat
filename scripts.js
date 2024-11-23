document.addEventListener("DOMContentLoaded", () => {
    // Hardcoded WhatsApp number and email address
    const whatsappNumber = "916282713497"; // WhatsApp number
    const emailAddress = "kashinath79797@gmail.com"; // Email address
  
    // Initialize EmailJS with your user ID
    emailjs.init("your_user_id"); // Replace with your actual EmailJS user ID
  
    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from submitting the default way
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Check if all fields are filled
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Format the WhatsApp message
      const whatsappMessage = `Hello! Here are the details submitted:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
  
      // Construct WhatsApp URL to send the message
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      console.log("WhatsApp URL:", whatsappURL);  // Check the URL in console
      window.open(whatsappURL, "_blank");
  
      // Email params for sending the email
      const emailParams = {
        to_email: emailAddress,
        from_name: name,
        from_email: email,
        message: message,
      };
  
      // Send email via EmailJS
      emailjs.send("your_service_id", "your_template_id", emailParams)
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            alert("Message sent to WhatsApp and Email!");
          },
          (error) => {
            console.log("Error sending email:", error);  // Log the error to console
            alert("There was an error sending the email.");
          }
        );
    });
  });
  