let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', userRegistration);

function userRegistration(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    //get field value
    let userName = registerForm.elements['username'].value;
    // window.alert(userName);

  // Use template literals with backticks?
    let welcomeHTML = `
    <div >
    <h2>Welcome ${userName}</h2>
    <p>Select a cloud provider?</p>
    <ul>
        <li><a href="aws.html?user=${userName}" aria-label="Go to aws page" target="_parent">AWS</a></li>
        <li><a href="azure.html?user=${userName}" aria-label="Go to the azure page" target="_parent">Azure</a></li>
    </ul>
    </div>
    `;

    let registerDiv = document.getElementById('register-div');
    registerDiv.innerHTML = welcomeHTML;

}