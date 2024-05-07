# Title
TestYourCloudKnowledge.com

### lifehacks Project Description
This is a website that provides questions to users in testing format to access their knowledge in Cloud technology.

# Image Source
AWS.png  - https://www.linkedin.com/pulse/aws-cloud-practitioner-essentials-waqas-khurshid-gpmyf/
azure-aws.jpeg - https://ecstech.com/ecs-insight/cloud/aws-and-azure-effective-tools-for-a-multi-cloud-solution/

# Code Source:
Got the below code used in aws.html from https://sentry.io/answers/how-to-get-values-from-urls-in-javascript/#:~:text=Getting%20URL%20Query%20Parameters%20in%20the%20Browser&text=The%20get()%20method%20returns,for%20a%20given%20query%20parameter.

        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams.has('user')); // true

# TESTING
The site was fully tested during the entire process of developemnt. Every features on each pages were tested. Below are list of test performed on each pages:

### Index.html Page
1. Image Responsiveness: All images were checked that they display well in different mobile device.
2. Checking Each Divs (parent and child) are well floated.
3. Link: Checked that all internal links open on same tab.
4. Footer: Checked that the footer is well positioned. 

### register.html Page
1. Image Responsiveness: Header image were checked that they display well in different mobile device.
2. Checked that each html elements are well positioned on different screen size (mobile, tab, laptop)
3. Link: Checked that all internal links open on same tab.
4. Register form: Checked that users are able to input name and the submit button sends the data for processing.

