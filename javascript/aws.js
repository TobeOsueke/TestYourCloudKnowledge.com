function runOnPageLoad() {
    const searchParams = new URLSearchParams(window.location.search);
        if (!searchParams.has('user')) {
            window.location.replace("register.html");
        }
    userName = searchParams.get('user');
}
runOnPageLoad()

function userNameDisplay() {
    // Use template literals with backticks?
    let html = `
    Hi ${userName}
    `;
    document.getElementById("username-display").innerHTML = html;
}

function startTest() {
    let rulesElement = document.getElementById("rules");
    rulesElement.style.display = "none";
    let clickToStart = document.getElementById("click-to-start");
    clickToStart.style.display = "none";
    
}