# TestYourCloudKnowledge.com

## Description
TestYourCloudKnowledge.com is a web application designed to help users assess their knowledge of cloud computing concepts and technologies. It offers a collection of quizzes covering various topics related to cloud computing, including but not limited to cloud service models, deployment models, security, and best practices.

## User Story
The target audience or user that can use this site are:
- As a cloud computing enthusiast, I want to test my knowledge of different cloud service models to understand their differences and use cases.
- As a student studying cloud computing, I want to practice quizzes on cloud security to prepare for certification exams.
- As an IT professional, I want to assess my understanding of cloud deployment models to make informed decisions for my organization's cloud strategy.

## Installation
To deploy TestYourCloudKnowledge.com locally, follow these steps:
1. Clone the repository:

        git clone https://github.com/TobeOsueke/TestYourCloudKnowledge.com.git

2. Navigate to the project directory:
        cd TestYourCloudKnowledge.com

3. Copy the full file name/path of index.html: 
        
        /Users/your_username/parent_folder/TestYourCloudKnowledge.com/index.html

4. Open your web browser and paste the file path you copied in previous step to view the application.

## Deployment
The site was deployed to GitHub pages. You can follow the below steps to deploy in your environment:
1. After you login to your GitHub account, navigate to the Repository - https://github.com/TobeOsueke/TestYourCloudKnowledge.com

2. Fork the Repository: On the top right corner of the repository page, you'll see a button labeled "Fork". Click on it. This will create a copy of the repository in your GitHub account.

3. Wait for Forking: GitHub will redirect you to your forked copy of the repository. Depending on the size of the repository, this process might take a few seconds. Once it's done, you'll see the repository under your GitHub username.

4. In the GitHub repository under your GitHub username, navigate to the Settings tab.

5. From the source section drop-down menu, select the Master/Prod Branch.
6. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
7. Go back to the repository home page, at the button ri corner, you will see Deployment. click on github-pages and follow the on-screen instructions to view the deployed site.

![GitHub Pages screen shoot](asset/images/ReadMe_img/githubpages.png)

## Usage
To use TestYourCloudKnowledge.com, 

- simply navigate to the website URL - https://tobeosueke.github.io/lifehacks/
- Click Register to begin and enter a username
- Select a service provider from the available options.
- Read the Test instructions and click the start test button below the page.
- Each quiz consists of multiple-choice questions related to cloud computing concepts. Users can select their answers and submit the quiz (within 15 minutes) to receive instant feedback on their performance.

## Features
Below are the features present in this website:

- Home Page (https://tobeosueke.github.io/TestYourCloudKnowledge.com/index.html): This page contains the purpose and steps on how to use this website. It also and display a internal link to the registration page

![Home Page Screen Shoot](asset/images/ReadMe_img/home.png)

- User Registration: Users can register by entering their username at this url https://tobeosueke.github.io/TestYourCloudKnowledge.com/register.html. Note that the user name field must be filled before the form can be submit.

![User Registration ScreenShoot](asset/images/ReadMe_img/register.png)

- Welcome Message: After registration a welcome message is displayed showing the user's username and two links to AWS and Azure testing zone respectively. Clicking on any these links will take you to the testing page of that service.

![User Registration ScreenShoot](asset/images/ReadMe_img/welcome.png)

- Testing Zone: For both service providers testing zone, users must be registered before they can access it. 

![User Registration ScreenShoot](asset/images/ReadMe_img/testrules.png)

- Start Test Button: The start test button is used to start the test. It triggers a confirmation alert for users to confirm that they are ready to begin test.

![User Registration ScreenShoot](asset/images/ReadMe_img/confirm.png)

- Timer: Once the test is started, a timer is displayed on the page as shows on the below image. If the 15 minutes time elapse, the submit button is automatically triggered and the test will end.

![User Registration ScreenShoot](asset/images/ReadMe_img/timer.png)

- Next Button: One Question is displayed at a time. Users can move to the next question, by clicking the next button.

- Submit Button: When on the last question, the submit button is shown (replacing the Next button) for users to click and submit the test.

![User Registration ScreenShoot](asset/images/ReadMe_img/submit.png)

- Feedback: Upon clicking the submit button, the user's score, alongside all attempted questions, their answers, and the correct answers, are promptly displayed. This feature also highlights the questions the user answered correctly, providing clear feedback on their performance.

## Design Section
The following are the design considerations for this site:

### Structure of all Pages: 
This sites consist of four pages: home, registration, aws test zone and azure test zone.
- All pages are divided(structured) into three: Header, Page Content, Footer
- The header consist of site banner and page h1 title.
- The page body are made up of text and images that are structured using div elements.
- The footer consist of text under the semantic footer elemet.

### Colour Scheme:
1. body background colour white.
2. Text colour: white, #8c3902 and #800020.
3. Footer background colour: #0e3d53.

## Technologies Used:
1. HTML 
2. CSS
3. JavaScript
4. IDE: Visual Studio Code
5. Version Control: Git and GitHub
6. Online Deployment: GitHub pages

## Contributing
We welcome contributions from the community! If you'd like to contribute to TestYourCloudKnowledge.com, please follow these guidelines:
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make your changes
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature`)
- Create a new Pull Request

## Credits
TestYourCloudKnowledge.com was created by Tobe Osueke. We would like to acknowledge the following resources that were helpful:

### Image Source
- AWS.png  - https://www.linkedin.com/pulse/aws-cloud-practitioner-essentials-waqas-khurshid-gpmyf/
- azure-aws.jpeg - https://ecstech.com/ecs-insight/cloud/aws-and-azure-effective-tools-for-a-multi-cloud-solution/

### Code Source:
- Got the below code used in awsAzure.js from https://sentry.io/answers/how-to-get-values-from-urls-in-javascript/#:~:text=Getting%20URL%20Query%20Parameters%20in%20the%20Browser&text=The%20get()%20method%20returns,for%20a%20given%20query%20parameter.

        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams.has('user')); // true
- Code Institues JavaScript Course was also helpful.

## TESTING
The site was fully tested during the entire process of developemnt. Every features on each pages were tested. Below are list of test performed on each pages:

### Index.html Page
1. Image Responsiveness: All images were checked that they display well in different mobile device.
2. Checking Each Divs (parent and child) are well floated.
3. Link: Checked that all internal links open on same tab.
4. Footer: Checked that the footer is well positioned at the button of the page for laptops and mobile screen size. 

### register.html Page
1. Image Responsiveness: Header image were checked that they display well in different mobile device.
2. Checked that each html elements (including images) are well positioned on different screen size (mobile, tab, laptop).
3. Link: Checked that all internal links open on same tab.
4. Register form: Checked that users are able to input name and the submit button sends the data for processing.
5. Verified that the form cannot be submitted unless the username field is filled.

### Testing Zone
1. Ensured that users are unable to access any testing zone pages without registration. If a user attempts to access these pages without being registered, they are automatically redirected to the registration page.
2. Checked that when the start test button is clicked the, confirmation alert box is displayed.
3. Confirmed that when the user clicks "OK" on the confirmation dialog box, the test initiates, whereas selecting "Cancel" prevents the test from commencing.
4. Confirmed that once the test commences, the timer is displayed, and each page presents one question.
5. Verified that the "Next" button successfully transitions the user from one question to another.
6. Confirmed that the test concludes automatically when the timer expires.
7. Ensured that the "Submit Test" button functions as intended, displaying test results upon submission.

## FAQs
### How can I contribute a new quiz?
To contribute a new quiz, please follow these steps:
1. Create a new quiz file in the `src/quizzes` directory.
2. Define the questions, options, and correct answers in the quiz file.
3. Submit a pull request with your changes.

### How are quiz scores calculated?
Quiz scores are calculated based on the number of correct answers submitted by the user. Each correct answer contributes to the user's total score. Maximum score that a user can score is 15 since the total questions is 15

## Changelog
### Version 1.0.0 (2024-05-10)
- Initial release of TestYourCloudKnowledge.com
