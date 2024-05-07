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
    <p>Hi ${userName}</p>
    `;
    document.getElementById("username-display").innerHTML = html;
}