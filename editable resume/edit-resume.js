var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var imgSrc = '';
// Function to handle the form submission
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
        imgSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // Generate the resume output
        resumeOutput.innerHTML = "\n            <div class=\"resume-section\">\n                <h2 id=\"editableName\" contenteditable=\"true\">".concat(name, "</h2>\n                <img id=\"editableImage\" src=\"").concat(imgSrc, "\" alt=\"Profile Picture\" style=\"width: 150px; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); cursor: pointer;\">\n            </div>\n            <div class=\"resume-section\">\n                <p id=\"editableEmail\" contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Experience</h3>\n                <p id=\"editableExperience\" contenteditable=\"true\">").concat(experience, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Education</h3>\n                <p id=\"editableEducation\" contenteditable=\"true\">").concat(education, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Skills</h3>\n                <p id=\"editableSkills\" contenteditable=\"true\">").concat(skills, "</p>\n            </div>\n        ");
        resumeOutput.style.display = 'block';
        // Add listener to handle image change
        makeImageEditable();
    };
    if (pictureInput.files && pictureInput.files[0]) {
        reader.readAsDataURL(pictureInput.files[0]);
    }
});
// Function to make the image editable by clicking
function makeImageEditable() {
    var editableImage = document.getElementById('editableImage');
    editableImage.addEventListener('click', function () {
        var pictureInput = document.createElement('input');
        pictureInput.type = 'file';
        pictureInput.accept = 'image/*';
        pictureInput.style.display = 'none';
        pictureInput.addEventListener('change', function (event) {
            var _a;
            var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    editableImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                };
                reader.readAsDataURL(file);
            }
        });
        // Trigger file input click
        pictureInput.click();
    });
}
