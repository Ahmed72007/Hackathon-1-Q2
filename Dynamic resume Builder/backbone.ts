// JavaScript code to add editing capabilities
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
let imgSrc: string | ArrayBuffer | null = '';

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
            <div class="resume-section" contenteditable="true">
                <h2>${name}</h2>
                <img src="${imgSrc}" alt="Profile Picture" style="width: 150px; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
            </div>
            <div class="resume-section" contenteditable="true">
                <p><strong>Email:</strong> ${email}</p>
            </div>
            <div class="resume-section" contenteditable="true">
                <h3>Experience</h3>
                <p>${experience}</p>
            </div>
            <div class="resume-section" contenteditable="true">
                <h3>Education</h3>
                <p>${education}</p>
            </div>
            <div class="resume-section" contenteditable="true">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;
        resumeOutput.style.display = 'block';

        // Add listeners to handle editing
        makeSectionsEditable();
    };

    if (pictureInput.files && pictureInput.files[0]) {
        reader.readAsDataURL(pictureInput.files[0]);
    }
});

function makeSectionsEditable() {
    const sections = resumeOutput.querySelectorAll('.resume-section');

    sections.forEach((section) => {
        section.addEventListener('click', () => {
            section.setAttribute('contenteditable', 'true');
        });

        section.addEventListener('blur', () => {
            section.setAttribute('contenteditable', 'false');
        });

        section.addEventListener('keypress', (event) => {
            // Handle pressing Enter to exit edit mode
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent adding a new line
                section.blur(); // Exit edit mode
            }
        });
    });
}
