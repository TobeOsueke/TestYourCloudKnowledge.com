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

        countdownTimer(60 * 15, document.createElement("div")); // 15 minutes in seconds and div element

        setTimeout(function () {
            // code to be executed after 1 sec delay
            showNextQuestion(); // Show the first question
            let nextBtn = document.getElementById("next-btn");
            nextBtn.style.display = "block";   //display next button
        }, 1000);

    }
    else {
        txt = "You pressed Cancel!";
    }


}

var url = window.location.pathname;
console.log(url);
var question; 
if (url.includes("azure.html")) {
    questions = [
        {
            question: "What is Azure DevOps?",
            options: [
                "A cloud-based version control system",
                "A platform for managing software development projects",
                "An operating system for cloud servers",
                "A programming language"
            ],
            answer: 1
        },
        {
            question: "Which Azure service is used for hosting web applications?",
            options: [
                "Azure Virtual Machines",
                "Azure App Service",
                "Azure Kubernetes Service",
                "Azure Functions"
            ],
            answer: 1
        },
        {
            question: "What is Azure Blob Storage used for?",
            options: [
                "Structured data storage",
                "Storing large amounts of unstructured data",
                "Relational database management",
                "In-memory caching"
            ],
            answer: 1
        },
        {
            question: "What does Azure Virtual Network allow you to do?",
            options: [
                "Host virtual machines only",
                "Connect Azure resources to each other and to on-premises resources securely",
                "Store and manage data in a distributed manner",
                "Automate deployment of resources"
            ],
            answer: 1
        },
        {
            question: "What Azure service is used for real-time analytics and data processing?",
            options: [
                "Azure SQL Database",
                "Azure Cosmos DB",
                "Azure Stream Analytics",
                "Azure Data Lake Storage"
            ],
            answer: 2
        },
        {
            question: "Which Azure service provides serverless computing?",
            options: [
                "Azure Functions",
                "Azure Virtual Machines",
                "Azure Kubernetes Service",
                "Azure App Service"
            ],
            answer: 0
        },
        {
            question: "What is Azure Active Directory used for?",
            options: [
                "Hosting websites",
                "Identity and access management",
                "Data warehousing",
                "Running virtual machines"
            ],
            answer: 1
        },
        {
            question: "What Azure service is used for Internet of Things (IoT) solutions?",
            options: [
                "Azure Data Factory",
                "Azure IoT Hub",
                "Azure Event Grid",
                "Azure Logic Apps"
            ],
            answer: 1
        },
        {
            question: "What is Azure Functions?",
            options: [
                "A container orchestration service",
                "A serverless compute service",
                "A relational database service",
                "A message broker service"
            ],
            answer: 1
        },
        {
            question: "Which Azure service is used for big data analytics and AI?",
            options: [
                "Azure Synapse Analytics",
                "Azure Machine Learning",
                "Azure Data Lake Storage",
                "Azure Data Factory"
            ],
            answer: 1
        },
        {
            question: "What is the Azure service for building, testing, deploying, and managing applications and services?",
            options: [
                "Azure DevOps",
                "Azure Logic Apps",
                "Azure API Management",
                "Azure Kubernetes Service"
            ],
            answer: 0
        },
        {
            question: "Which Azure service provides scalable cloud storage?",
            options: [
                "Azure Virtual Machines",
                "Azure Blob Storage",
                "Azure SQL Database",
                "Azure Functions"
            ],
            answer: 1
        },
        {
            question: "What does Azure Cosmos DB provide?",
            options: [
                "Structured query language (SQL) database service",
                "Relational database service",
                "NoSQL database service",
                "In-memory caching service"
            ],
            answer: 2
        },
        {
            question: "What is Azure Kubernetes Service (AKS)?",
            options: [
                "A container orchestration service",
                "A serverless compute service",
                "A relational database service",
                "A message broker service"
            ],
            answer: 0
        },
        {
            question: "What Azure service is used for hosting databases in the cloud?",
            options: [
                "Azure Functions",
                "Azure App Service",
                "Azure SQL Database",
                "Azure Event Grid"
            ],
            answer: 2
        },
        {
            question: "What does Azure SQL Database offer?",
            options: [
                "Relational database management",
                "NoSQL database management",
                "In-memory caching",
                "File storage"
            ],
            answer: 0
        },
        {
            question: "What Azure service provides data integration and transformation at scale?",
            options: [
                "Azure Logic Apps",
                "Azure Event Grid",
                "Azure Data Factory",
                "Azure IoT Hub"
            ],
            answer: 2
        },
        {
            question: "What is Azure Cognitive Services used for?",
            options: [
                "Hosting websites",
                "Identity and access management",
                "Big data analytics",
                "Artificial intelligence and machine learning"
            ],
            answer: 3
        },
        {
            question: "What does Azure Event Grid do?",
            options: [
                "Processes data in real-time",
                "Manages containers",
                "Automates deployment",
                "Integrates data sources"
            ],
            answer: 0
        },
        {
            question: "What is Azure App Service used for?",
            options: [
                "Hosting virtual machines",
                "Building, deploying, and scaling web apps",
                "Hosting databases",
                "Processing big data"
            ],
            answer: 1
        },
        {
            question: "What does Azure IoT Hub enable?",
            options: [
                "Real-time analytics",
                "Device-to-cloud and cloud-to-device communication",
                "Container orchestration",
                "Data warehousing"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of Azure Container Instances (ACI)?",
            options: [
                "Orchestrating container deployments",
                "Running individual containers without managing servers",
                "Managing virtual machines",
                "Automating CI/CD pipelines"
            ],
            answer: 1
        },
        {
            question: "What Azure service is used for event-driven serverless computing?",
            options: [
                "Azure Functions",
                "Azure Virtual Machines",
                "Azure App Service",
                "Azure Kubernetes Service"
            ],
            answer: 0
        },
        {
            question: "What is Azure Logic Apps used for?",
            options: [
                "Orchestrating workflows and integrating systems",
                "Hosting databases",
                "Processing big data",
                "Managing virtual machines"
            ],
            answer: 0
        },
        {
            question: "What does Azure Synapse Analytics provide?",
            options: [
                "Big data analytics and data warehousing",
                "Artificial intelligence and machine learning",
                "In-memory caching",
                "Serverless computing"
            ],
            answer: 0
        },
        {
            question: "What is Azure Data Lake Storage used for?",
            options: [
                "Structured data storage",
                "Storing large amounts of unstructured data",
                "Relational database management",
                "In-memory caching"
            ],
            answer: 1
        },
        {
            question: "What is Azure Key Vault used for?",
            options: [
                "Identity and access management",
                "Big data analytics",
                "Security management and secrets storage",
                "Orchestrating workflows"
            ],
            answer: 2
        },
        {
            question: "What does Azure Functions provide?",
            options: [
                "Scalable cloud storage",
                "Serverless compute service",
                "Data integration and transformation at scale",
                "Identity and access management"
            ],
            answer: 1
        },
        {
            question: "What is Azure API Management used for?",
            options: [
                "Orchestrating workflows and integrating systems",
                "Managing APIs",
                "Processing big data",
                "Security management"
            ],
            answer: 1
        },
        {
            question: "What Azure service is used for hosting databases in a fully managed PaaS environment?",
            options: [
                "Azure SQL Database",
                "Azure Blob Storage",
                "Azure Cosmos DB",
                "Azure Data Lake Storage"
            ],
            answer: 0
        }
    ];
    
}
else if (url.includes("aws.html")) {
    //AWS test Questions, Options and answers
questions = [
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
}
else {
    window.location.replace("register.html");
}


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
    let timerDiv = document.getElementById("timer-div")
    timerDiv.remove();  //since test has ended, remove timer

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

    // let homeLink = document.createElement("a");
    // homeLink.textContent = "Go Back To Home Page"
    // homeLink.href = "index.html"
    // questionAnswersElem.appendChild(homeLink)

 
}


function countdownTimer(duration, displayElement) {
    let timer = duration, minutes, seconds;
    document.getElementById("timer-div").appendChild(displayElement);
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (--timer == 0) {
            clearInterval(intervalId); // Stop the interval
            endTestBasedonTimer()
        }
    }, 1000);


}

//this function is called when the timer elapses
function endTestBasedonTimer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        var userAnswer = parseInt(selectedOption.value);
        userAnswers.push(userAnswer);
        var correctAnswer = questions[randomNumber].answer;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }
    let nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "none";
    displayScore();
}

