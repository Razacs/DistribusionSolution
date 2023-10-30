# DistribusionSolution
This repository is providing solution of Distribusion challenge. This repository has both Solution 1) Test Strategy Document and 2) Automation Test cases.

**Test Strategy Document Solution.pdf** contains all the Automation approach, scope and Deliverablity.

**Automation Test Scripts:**

That contains automated test scripts for testing the career page of Distribusion using the Node NPM with Axios API Automation Framework.

**Tools and Technologies**

Language: JavaScript
Automation Framework: NPM Node Axios
Reporting: Mochawesome

**Framework Approach**

The test automation framework follows a node structure to enhance code reusability, maintainability, and readability. It's designed to organize the test scripts effectively.

**Folder Struture & Test Cases:**

**src:** Folder contains gitService, where I am calling all the functions to perform API request

**test:** Folder contains all the CRUD methodologies (Create, Get, Edit, Delete) Gist files with the implementation of test cases.

**mochawesome-report** Folder contains mochawesome reports 

**config.js** File contains Base_URL 

**.env** Environment file where I am using my Private Github Token // Before executing replace your Github Token to execute it

For example:

GITHUB_API_TOKEN='ABCDEFG!'


**Setup and Execution Steps**

1) git clone https://github.com/Razacs/JustEatTakeaway-Task.git

2) cd Distribution 

3) npm install (npm init -y) (npm install mocha chai axios --save-dev) (npm install dotenv --save-dev)

(npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator) //Install Dependecies

4) npm test // Execute all test cases

**Reports will be generated in mochawesome report**

**Output:**


![image](https://github.com/Razacs/DistribusionSolution/assets/32739941/97df5d93-7a89-4958-9998-a8be67af3fb8)

![image](https://github.com/Razacs/DistribusionSolution/assets/32739941/a26e78e8-3093-44d2-8a44-03c5493d249d)

![image](https://github.com/Razacs/DistribusionSolution/assets/32739941/ba353f8a-79cb-42f3-9d8a-a9e31c6437ed)


Let me know if you need any further information from my side.

Thanks!

