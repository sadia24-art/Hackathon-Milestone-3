// Interface for resume data
interface ResumeData {
    fullName: string;
    email: string;
    phone: string;
    about: string;
    skills: string[];
    experience: string;
    education: string;
}

// Function to generate resume output
function generateResume(event: Event): void {
    event.preventDefault();

    // Collect data from form
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    // Create a resume data object
    const resumeData: ResumeData = {
        fullName,
        email,
        phone,
        about,
        skills,
        experience,
        education
    };

    // Generate the resume output
    displayResume(resumeData);
}

// Function to display resume
function displayResume(resumeData: ResumeData): void {
    const resumeOutput = document.getElementById("resumeOutput")!;
    
    // Clear previous output
    resumeOutput.innerHTML = "";

    // Create HTML content for the resume
    resumeOutput.innerHTML = `
        <h3>${resumeData.fullName}</h3>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>

        <div class="resume-section">
            <h4>About Me</h4>
            <p>${resumeData.about}</p>
        </div>

        <div class="resume-section">
            <h4>Skills</h4>
            <ul>
                ${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>

        <div class="resume-section">
            <h4>Work Experience</h4>
            <p>${resumeData.experience}</p>
        </div>

        <div class="resume-section">
            <h4>Education</h4>
            <p>${resumeData.education}</p>
        </div>
    `;
}

// Event listener to handle form submission
document.getElementById("resumeForm")!.addEventListener("submit", generateResume);
