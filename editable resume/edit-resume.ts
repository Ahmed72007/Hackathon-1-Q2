const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
let imgSrc: string | ArrayBuffer | null = '';

// Function to handle the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pictureInput = document.getElementById('picture') as HTMLInputElement;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create a FileReader to read the uploaded image
    const reader = new FileReader();
    reader.onload = function (e) {
        imgSrc = e.target?.result as string | ArrayBuffer | null;

        // Generate the resume output
        resumeOutput.innerHTML = `
            <div class="resume-section">
                <h2 id="editableName" contenteditable="true">${name}</h2>
                <img id="editableImage" src="${imgSrc}" alt="Profile Picture" style="width: 150px; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); cursor: pointer;">
            </div>
            <div class="resume-section">
                <p id="editableEmail" contenteditable="true"><strong>Email:</strong> ${email}</p>
            </div>
            <div class="resume-section">
                <h3>Experience</h3>
                <p id="editableExperience" contenteditable="true">${experience}</p>
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                <p id="editableEducation" contenteditable="true">${education}</p>
            </div>
            <div class="resume-section">
                <h3>Skills</h3>
                <p id="editableSkills" contenteditable="true">${skills}</p>
            </div>
        `;
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
    const editableImage = document.getElementById('editableImage') as HTMLImageElement;

    editableImage.addEventListener('click', () => {
        const pictureInput = document.createElement('input');
        pictureInput.type = 'file';
        pictureInput.accept = 'image/*';
        pictureInput.style.display = 'none';
        
        pictureInput.addEventListener('change', (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    editableImage.src = e.target?.result as string;
                };
                reader.readAsDataURL(file);
            }
        });

        // Trigger file input click
        pictureInput.click();
    });
}
