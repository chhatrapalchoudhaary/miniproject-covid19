In this project let's build a **Covid19 Dashboard** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a **class component**, displaying that data, using **component lifecycle** methods, **routing** concepts and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/lGl9tRXcsmxicjTITM2A8P/Covid19_Dashboard?node-id=0%3A1" target="_blank" >here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities

- Users should be able to navigate to Home, About routes using links in Navbar.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- Home Route
  - Users should be able to see stats of confirmed, active, recovered, deceased cases in India.
  - Users should be able to navigate to home route when clicking on **COVID19INDIA** logo.
  - Users should be able to see state wise confirmed, active, recovered,deceased cases in a table.
  - Users should be able to sort the stats based on States/UT.
  - Users should be able to see Home with highlighted text in Navbar.
  - Users should be able to see the footer as shown in figma.
- Search Functionality
  - Users should be able to search across all states in India and see the suggestions as a dropdown.
  - Users should be able to navigate to a State Specific Page after clicking on the suggestion.
  - When the users clicks on a state suggestion, it should open a new page with respective state details.
- State Specific Route
  - Users should be able to see the state name and last updated date.
  - Users should be able to see stats of confirmed, active, recovered, deceased cases in specific states.
  - Users should be able to see the tested count.
  - Users should be able to see Top districts for confirmed, active, recovered,deceased cases.
  - Users should be able to see spread trends for both cumulative and daily.
  - Users should be able to see the footer as shown in figma.
- About Route
  - Users should be able to see faqs.
  - Users should be able to see About with highlighted text in Navbar.
  - Users should be able to see the footer as shown in figma.

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- Use React Charts package to implement given charts
  - React charts <a href="https://www.npmjs.com/package/recharts" target="_blank" >Documentation</a>.
  - Line chart implementation <a href="https://codesandbox.io/s/dark-theme-switch-forked-6keo4?file=/src/Dashboard/Chart.js" target="_blank">CodeSandbox</a>.
  - Multi area chart implementation <a href="https://codesandbox.io/s/react-chartjs-2-line-chart-example-forked-kzspl?file=/src/App.js" target="_blank">CodeSandbox</a>.
- Implement Select fields using this package
  - React select <a href="https://www.npmjs.com/package/react-select/v/2.4.3" target="_blank">Documentation</a>.
  - React select implementation <a href="https://codesandbox.io/s/react-select-dropdown-example-forked-su3x2?file=/package.json:253-258" target="_blank">CodeSandbox</a>.
- Usage of extracting date wise stats <a href="https://codepen.io/nagendra-pujari1191/pen/YzVMXxz?editors=0010" target="_blank">Codepen</a>.
</details>

### Important Note

Below Instructions are needed to pass the test cases.

<details>
<summary>Click to view</summary>

- **Note:**

  - For Mini Projects, You have to use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, If you use styled components.

  - Refer to the below Example for the usage of `testid` in the HTML elements.

    - Example: `<div testid="countryWideConfirmedCases" className="country-wide-confirmed-cases"/>`.

  - Get the all states data from the response of Get Countrywide covid19 cases API by mapping the states list that we have provided you in the App.js file.

  - If you receive any type of covid19 cases count of a state as undefined from the API call, store that value as 0.

  - Example:- You have received the active, confirmed cases count for the State Goa as undefined so instead of storing undefined store active, confirmed cases of Goa as 0. Like this for all states and districts store 0 if you receive any count as undefined.

  - Your code will container a `Counter` Component in the path `src/components` you can modify the component based on your use-case or you can ignore it.

- Routes:

  - The Home Route should contain the pathname as `/`.

  - The State-specific Route should contain the pathname as `/state/:stateCode`

    - **Note:** use the particular state code in place of id.

  - The About Route should contain the pathname as `/about`.

- Header:

  - Your code should contain a `Header` Component in the path `src/components`.

- Footer:

  - Your code should contain a `Footer` Component in the path `src/components`.

  - The Footer component should consist of all social icons from the `react-icons` third-party library.

  - The Github icon should contain the test id with the value as `githubIcon`

  - The Instagram icon should contain the test id with the value as `instagramIcon`

  - The Twitter icon should contain the test id with the value as `twitterIcon`

- Home Route:

  - The Loader container should contain the test id with value as `homeRouteLoader`

  - The States Search results unordered list should contain the test id with value as `searchResultsUnorderedList`.

  - The Search bar should contain the search icon with the test id value as `searchIcon`

  - The State Search results list item chevron right icon should contain the test id with value as `searchResultChevronRightIcon`

  - The Confirmed cases card should contain the test id with value as `countryWideConfirmedCases`

  - The Confirmed cases image in the Confirmed cases container should contain the alt text as `country wide confirmed cases pic`

  - The Recovered cases card should contain the test id with value as `countryWideRecoveredCases`

  - The Recovered cases image in the Recovered cases container should contain the alt text as `country wide recovered cases pic`

  - The Active cases card should contain the test id with value as `countryWideActiveCases`

  - The Active cases image in the Active cases container should contain the alt text as `country wide active cases pic`

  - The Deceased cases card should contain the test id with value as `countryWideDeceasedCases`

  - The Deceased cases image in the Deceased cases container should contain the alt text as `country wide deceased cases pic`

  - The Statewise covid19 data table should contain the test id with value as `stateWiseCovidDataTable`

  - The Ascending sort icon should contain the test id with value as `ascendingSortIcon`

  - The Descending sort icon should contain the test id with value as `descendingSortIcon`

  - Place the ascending sort icon and descending sort icon in an HTML container element with the test id attribute value `stateWiseCovidDataTable`

  - Place the total country wide confirmed cases count, the text `Confirmed` and the confirmed cases image inside of the HTML container element with the test id attribute value `countryWideConfirmedCases`

  - Place the total country wide active cases count, the text `Active` and the active cases image inside of the HTML container element with the test id attribute value `countryWideActiveCases`

  - Place the total country wide recovered cases count, the text `Recovered` and the recovered cases image inside of the HTML container element with the test id attribute value `countryWideRecoveredCases`

  - Place the total country wide deceased cases count, the text `Deceased` and the deceased cases image inside of the HTML container element with the test id attribute value `countryWideDeceasedCases`

  - Wrap all the list items of the HTML unordered list element with the test id attribute value `searchResultsUnorderedList` with Link from `react-router-dom`

- State-specific Route

  - **NOTE:** Wrap all the Line charts with an HTML container element and assign test id attribute value as `lineChartsContainer` to that HTML container element.

  - The GET State details API Loader container should contain the test id with value as `stateDetailsLoader`

  - The GET Timline details API Loader container should contain the test id with value as `timelinesDataLoader`

  - The State-specific Confirmed cases card should contain the test id value as `stateSpecificConfirmedCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific confirmed cases pic`

  - The State-specific Active cases card should contain the test id value as `stateSpecificActiveCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific active cases pic`

  - The State-specific Recovered cases card should contain the test id value as `stateSpecificRecoveredCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific recovered cases pic`

  - The State-specific Deceased cases card should contain the test id value as `stateSpecificDeceasedCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific deceased cases pic`

  - Place the total State-specific confirmed cases count, the text `Confirmed` and the confirmed cases image inside of the HTML container element with the test id attribute value `stateSpecificConfirmedCasesContainer`

  - Place the total State-specific active cases count, the text `Active` and the active cases image inside of the HTML container element with the test id attribute value `stateSpecificActiveCasesContainer`

  - Place the total State-specific recovered cases count, the text `Recovered` and the recovered cases image inside of the HTML container element with the test id attribute value `stateSpecificRecoveredCasesContainer`

  - Place the total State-specific deceased cases count, the text `Deceased` and the deceased cases image inside of the HTML container element with the test id attribute value `stateSpecificDeceasedCasesContainer`

  - The Top Districts unordered list should contain the test id attribute with value as `topDistrictsUnorderedList`

- About Route

  - The Loader container should contain the test id value as `aboutRouteLoader`

  - The Faqs unordered list should contain the test id value as `faqsUnorderedList`

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- Home Route:

  - Get stats of confirmed, active, recovered, deceased cases in India:

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'

    ```

  - Get stats of confirmed, active, recovered, deceased cases state wise:

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'

    ```

- State-Specific Route:

  - Get tested count, last updated:

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'
    //(the response contains stats of all the States, You can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Get stats of confirmed, active,recovered, deceased cases in specific states:

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'
    //(the response contains stats of all the States, You can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Get districts (sort to show Top Districts):

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'
    //(the response contains stats of all the States, You can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Get timelines to show spread trends:

    ```js
    'https://apis.ccbp.in/covid19-timelines-data/AP'
    //(change state code in URL for other states)

    //(or)

    'https://apis.ccbp.in/covid19-timelines-data'
    //(the response contains stats of all the States, You can use a state code (Ex:- "AP") to get specific state stats.)

    ```

- About Route:

  - Get faqs:

    ```js
    'https://apis.ccbp.in/covid19-faqs'

    ```

- Vaccination Details Route:

  - Get states data:

    ```js
    'https://apis.ccbp.in/covid19-state-ids'

    ```

  - Get Districts data (state specific):

    ```js
    'https://apis.ccbp.in/covid19-districts-data/2'
    //(change state id in URL)

    ```

  - Get sites conducting vaccination, total registrations, total vaccination, vaccination trends, vaccination - category, vaccination by age Details:

    ```js
    'https://apis.ccbp.in/covid19-vaccination-data'
    //(change date in URL)

    ```

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Additional Functionality to be added</summary>

- Users should be able to see Themes (Light & Dark) in Navbar.
- State Specific Route
  - Users should be able to see India maps with highlighting states.
- Vaccination Details Route
  - Users should be able to see dropdowns to select state and district.
  - Users should be able to see Sites Conducting Vaccination, Total Registrations, Total Vaccination Doses sections.
  - Users should be able to see Vaccination Trends for both by doses and ages section.
  - Users should be able to see Vaccination Details with highlighted text in Navbar.

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the testcases at own your pace. But we suggest you to submit to know the percentage of completion through testcases and that score will be considered for your interviews.

- For Mini Projects, you need to only publish/deploy the code using `ccbp publish RJSCPAUCLT domain_name.ccbp.tech`. So that our team will be able to see that code and deployed URL( Ex: something.ccbp.tech) and will share feedback to you if required.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
