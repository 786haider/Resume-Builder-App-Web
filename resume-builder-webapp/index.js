
function editForm() {
    
    alert("Edit carefully your form.");
}

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();   

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });


    let resumeContent = `
        <html>
        <head>
            <title>Resume CV</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .container { max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Resume CV</h1>
                <h2>Personal Information</h2>
                <p><strong>Full Name:</strong> ${data['full-name']}</p>
                <p><strong>Father Name:</strong> ${data['father-name']}</p>
                <p><strong>Email:</strong> ${data['email']}</p>
                <p><strong>Phone Number:</strong> ${data['phone']}</p>
                
                <h2>Education</h2>
                <p><strong>Institution Name:</strong> ${data['institution']}</p>
                <p><strong>Degree Obtained:</strong> ${data['degree']}</p>
                <p><strong>Year of Graduation:</strong> ${data['year']}</p>

                <h2>Skills</h2>
                <p><strong>Skill 1:</strong> ${data['skill1']}</p>
                <p><strong>Skill 2:</strong> ${data['skill2'] || 'Not provided'}</p>
                <p><strong>Skill 3:</strong> ${data['skill3'] || 'Not provided'}</p>
                
                <h2>Work Experience</h2>
                <p>${data['work-experience']}</p>
                
                <button onclick="window.print()">Print Resume</button>
            </div>
        </body>
        </html>
    `;

    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
   const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
