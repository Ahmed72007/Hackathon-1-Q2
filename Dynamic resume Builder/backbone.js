var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pictureInput = document.getElementById('picture');
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Create a FileReader to read the uploaded image
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imgSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Get the image source
        // Generate the resume output
        resumeOutput.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <img src=\"").concat(imgSrc, "\" alt=\"Profile Picture\" style=\"width: 150px; border-radius: 50%;\">\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        resumeOutput.style.display = 'block'; // Show the resume output
    };
    if (pictureInput.files && pictureInput.files[0]) {
        reader.readAsDataURL(pictureInput.files[0]); // Read the uploaded image
    }
});
