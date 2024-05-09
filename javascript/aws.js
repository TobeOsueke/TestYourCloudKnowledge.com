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
    <p id="username-p"> Hi ${userName} </p>
    `;
    document.getElementById("username-display").innerHTML = html;
}

function startTest() {

    if (confirm("Press OK to start Test or Cancel to continue reading the rules!")) {
        let rulesElement = document.getElementById("rules");
        rulesElement.remove();  //remove rules span element
        let clickToStart = document.getElementById("click-to-start");
        clickToStart.remove();  //remove click to start div element


        showNextQuestion(); // Show the first question
        let nextBtn = document.getElementById("next-btn");
        nextBtn.style.display = "block";   //display next button
    }
    else {
        txt = "You pressed Cancel!";
    }


}

//test Questions, Options and answers
var questions = [
    {
        question: "What is the primary purpose of Amazon EC2?",
        options: ["To manage DNS records for web applications", "To provide scalable and resizable compute capacity in the cloud", "To distribute content to end-users with low latency", "To store and manage large datasets"],
        answer: 1
    },
    {
        question: "Which of the following instance types provides the best price-performance ratio for general-purpose workloads?",
        options: ["T2", "M5", "R5", "C5"],
        answer: 1
    },
    {
        question: "What is the maximum size for an individual object that can be stored in Amazon S3?",
        options: ["1 GB", "5 TB", "10 TB", "25 GB"],
        answer: 2 // The correct answer is represented by the index of the options array (starting from 0), so 10 TB corresponds to index 2
    },
    {
        question: "Which AWS service provides object storage with a flat, customizable namespace and built-in versioning capabilities?",
        options: ["Amazon S3", "Amazon EBS", "Amazon Glacier", "Amazon EC2"],
        answer: 0
    },
    {
        question: "What is the primary purpose of the 'Lifecycle Policies' feature in Amazon S3?",
        options: [
            "To automatically replicate objects across multiple AWS regions",
            "To automatically archive objects to Amazon Glacier based on specified criteria",
            "To encrypt objects using server-side encryption",
            "To monitor access patterns and usage metrics of objects stored in S3"
        ],
        answer: 1
    },
    {
        question: "Which AWS service can be used to distribute content to end-users with low latency and high data transfer speeds through a global network of edge locations?",
        options: ["Amazon S3", "Amazon EC2", "Amazon CloudFront", "Amazon RDS"],
        answer: 2
    },
    {
        question: "In Amazon S3, what does the acronym 'SSE' stand for in the context of encryption?",
        options: ["Secure Server Encryption", "Server-Side Encryption", "Secure Storage Environment", "Storage Security Encryption"],
        answer: 1
    },
    {
        question: "Which AWS service allows you to create and manage object storage repositories that can store and retain data for long-term archival, compliance, and regulatory requirements?",
        options: ["Amazon S3", "Amazon EBS", "Amazon Glacier", "Amazon RDS"],
        answer: 2
    },
    {
        question: "What AWS CLI command is used to copy an object from a local file system to an S3 bucket?",
        options: ["aws s3 cp", "aws s3 mv", "aws s3 sync", "aws s3 ls"],
        answer: 0
    },
    {
        question: "What is the default storage class for objects stored in Amazon S3?",
        options: ["STANDARD_IA", "INTELLIGENT_TIERING", "GLACIER", "STANDARD"],
        answer: 3
    },
    {
        question: "Which AWS service provides a durable, scalable, and secure object storage service for use cases such as backup and recovery, disaster recovery, and data archiving?",
        options: ["Amazon S3", "Amazon RDS", "Amazon EFS", "Amazon DynamoDB"],
        answer: 0
    },
    {
        question: "What is the HTTP status code returned when an object is successfully deleted from an Amazon S3 bucket?",
        options: ["200 OK", "204 No Content", "404 Not Found", "403 Forbidden"],
        answer: 1
    },
    {
        question: "What is the primary purpose of AWS IAM?",
        options: [
            "To manage billing and payment information for AWS services",
            "To create and manage virtual private clouds (VPCs)",
            "To securely control access to AWS services and resources",
            "To monitor and analyze AWS resource utilization"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a fundamental element of AWS IAM?",
        options: ["Users", "Roles", "Buckets", "Policies"],
        answer: 2
    },
    {
        question: "What is the maximum number of IAM users that you can create per AWS account by default?",
        options: ["10", "100", "500", "Unlimited"],
        answer: 3
    },
    {
        question: "In IAM, what is the purpose of an IAM policy?",
        options: [
            "To define rules for tagging AWS resources",
            "To define permissions for accessing AWS services and resources",
            "To configure network access control lists (ACLs)",
            "To specify the duration for temporary security credentials"
        ],
        answer: 1
    },
    {
        question: "Which AWS service allows you to grant temporary access to your AWS resources to users, groups, or services?",
        options: ["Amazon S3", "AWS IAM", "Amazon EC2", "Amazon RDS"],
        answer: 1
    },
    {
        question: "What is the main benefit of IAM roles compared to IAM users?",
        options: [
            "Roles provide multi-factor authentication (MFA) for enhanced security.",
            "Roles allow cross-account access and delegation of permissions.",
            "Roles have unlimited access to all AWS services by default.",
            "Roles can only be created by AWS Support personnel."
        ],
        answer: 1
    },
    {
        question: "Which AWS CLI command is used to create a new IAM user?",
        options: ["aws iam create-user", "aws iam update-user", "aws iam delete-user", "aws iam list-users"],
        answer: 0
    },
    {
        question: "What is the primary purpose of an IAM group?",
        options: [
            "To define organizational units within an AWS account",
            "To grant permissions to individual IAM users",
            "To provide multi-factor authentication (MFA) for IAM users",
            "To simplify management of permissions for multiple IAM users"
        ],
        answer: 3
    },
    {
        question: "Which AWS service can be used to centrally manage and enforce policies for federated users who sign in using an external identity provider (IdP)?",
        options: ["Amazon Cognito", "AWS IAM", "Amazon RDS", "Amazon CloudFront"],
        answer: 1
    },
    {
        question: "What is the purpose of the IAM 'root account' in AWS?",
        options: [
            "It is the default account created when you sign up for AWS and has complete access to all AWS services and resources.",
            "It is a special account used for deploying AWS Lambda functions.",
            "It is a limited-access account provided for billing purposes only.",
            "It is a deprecated feature and is no longer used in AWS IAM."
        ],
        answer: 0
    },
    {
        question: "What is the primary purpose of Amazon EC2?",
        options: [
            "To manage DNS records for web applications",
            "To provide scalable and resizable compute capacity in the cloud",
            "To distribute content to end-users with low latency",
            "To store and manage large datasets"
        ],
        answer: 1
    },
    {
        question: "Which of the following instance types provides the best price-performance ratio for general-purpose workloads?",
        options: ["T2", "M5", "R5", "C5"],
        answer: 1
    },
    {
        question: "What is the primary difference between Spot Instances and On-Demand Instances in Amazon EC2?",
        options: [
            "Spot Instances have fixed pricing, while On-Demand Instances have variable pricing.",
            "Spot Instances are suitable for production workloads, while On-Demand Instances are intended for testing and development.",
            "Spot Instances can be interrupted by AWS if the current Spot price exceeds your bid price, while On-Demand Instances guarantee capacity.",
            "Spot Instances offer reserved capacity, while On-Demand Instances do not."
        ],
        answer: 2
    },
    {
        question: "Which AWS service can be used to automatically scale the number of EC2 instances in response to changing demand?",
        options: ["Amazon S3", "Amazon RDS", "Amazon EC2 Auto Scaling", "Amazon VPC"],
        answer: 2
    },
    {
        question: "What is the maximum number of Elastic IP addresses that you can allocate per AWS account by default?",
        options: ["5", "10", "50", "100"],
        answer: 1
    },
    {
        question: "What is the purpose of an Amazon Machine Image (AMI) in Amazon EC2?",
        options: [
            "To specify the number of EC2 instances to launch",
            "To define the network configuration for EC2 instances",
            "To provide the operating system and additional software for EC2 instances",
            "To manage the lifecycle of EC2 instances"
        ],
        answer: 2
    },
    {
        question: "Which of the following storage options provides the lowest latency and highest IOPS (input/output operations per second) for EC2 instances?",
        options: ["Amazon EBS (Elastic Block Store)", "Instance Store (Ephemeral Storage)", "Amazon S3", "Amazon Glacier"],
        answer: 1
    },
    {
        question: "Which AWS CLI command is used to launch a new EC2 instance?",
        options: ["aws ec2 create-instance", "aws ec2 launch-instance", "aws ec2 run-instances", "aws ec2 start-instance"],
        answer: 2
    },
    {
        question: "What is the purpose of an EC2 security group?",
        options: [
            "To manage billing and payment information for EC2 instances",
            "To define rules for inbound and outbound traffic to EC2 instances",
            "To store and manage data volumes for EC2 instances",
            "To configure network access control lists (ACLs)"
        ],
        answer: 1
    },
    {
        question: "Which of the following instance types is optimized for high-performance computing (HPC) workloads and provides the lowest network latency?",
        options: ["T2", "M5", "R5", "C5n"],
        answer: 3
    }

];

//declaring global variables
let userAnswers = [];
let currentIndex = -1;
let score = 0;
let randomNumber = -1;
let userQuestions = []

// function to display questions one at a time and capture tester response
function showNextQuestion() {

    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        var userAnswer = parseInt(selectedOption.value);
        userAnswers.push(userAnswer);
        var correctAnswer = questions[randomNumber].answer;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    currentIndex++;

    //hide next button and show submit button when on the last question
    if (currentIndex == 14) {
        let nextBtn = document.getElementById("next-btn");
        nextBtn.style.display = "none";
        let submitBtn = document.getElementById("submit-btn");
        submitBtn.style.display = "block";
    }

    //display questions and their options using radio button
    if (currentIndex < 15) {
        randomNumber = Math.floor(Math.random() * 31); //generate random numbers between 1-30 to display random questions
        userQuestions.push(randomNumber);
        let question = questions[randomNumber];
        let questionElem = document.getElementById("question");
        questionNumberToView = 1 + currentIndex;
        questionElem.textContent = questionNumberToView + ". " + question.question;  //display question and it number
        let optionsElem = document.getElementById("options");
        optionsElem.innerHTML = "";
        for (let i = 0; i < question.options.length; i++) {  //creating radio button for each options and appending it to parent element
            let option = question.options[i];
            let radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = "option";
            radioBtn.value = i;
            optionsElem.appendChild(radioBtn);

            let label = document.createElement("label");
            label.textContent = option;
            optionsElem.appendChild(label);

            optionsElem.appendChild(document.createElement("br"));
        }
    }
    else {
        displayScore();
    }
}

// function to handle submit button and show user's result
function displayScore() {

    // get and remove some html elements
    let questionDiv = document.getElementById("question");
    questionDiv.remove();  //remove questions div element
    let optionsDiv = document.getElementById("options");
    optionsDiv.remove();  //remove options div element
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.remove();  //remove submit button div element

    //display score
    let scoreElem = document.getElementById("score");
    scoreElem.textContent = "Out of 15 questions, you got " + score + " correct answers.";


    let questionAnswersElem = document.getElementById("question-answers") //get parent div to contain/display questions and answers

    //questions, user's answer and correct answer
    for (var i = 0; i < userQuestions.length; i++) {

        //create div to display questions
        let question = questions[userQuestions[i]];
        let resultElem = document.createElement("div");
        resultElem.textContent = "Question " + (i + 1) + ": " + question.question;
        resultElem.style.fontWeight = "bold";
        questionAnswersElem.appendChild(resultElem);

        //Display icon based on whether user got the correct answer or not
        let icon = document.createElement("i");
        let userAnswer = question.options[userAnswers[i]];
        let correctAnswer = question.options[question.answer];
        if (userAnswers[i] == question.answer) {
            icon.classList.add("correct-icon");
            icon.textContent = "\u2713 Your Answer: " + userAnswer; //Unicode character for checkmark symbol
            questionAnswersElem.appendChild(icon);
        }
        else {
            //first check if answer is undefined
            if (typeof userAnswer === "undefined") {
                userAnswer = " "
            }
            icon.classList.add("wrong-icon");
            icon.textContent = "\u2717 Your Answer: " + userAnswer; //Unicode character for checkmark symbol
            questionAnswersElem.appendChild(icon);
            let userResultElem = document.createElement("div");
            userResultElem.textContent = " Correct Answer: " + correctAnswer;
            questionAnswersElem.appendChild(userResultElem);
        }
        questionAnswersElem.appendChild(document.createElement("br"));
        questionAnswersElem.appendChild(document.createElement("br"));
    }

    let homeLink = document.createElement("a");
    homeLink.textContent = "Go Back To Home Page"
    homeLink.href = "index.html"
    questionAnswersElem.appendChild(homeLink)

    //document.getElementById("next-btn").disabled = true;
}

