<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
      <ul>
        <li><a href="#test-user-login">Test User Login</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Jobly is a full-stack web application built with Express.js for the backend and React.js for the frontend. It serves as a comprehensive job search platform where users can create accounts, log in securely, and explore various companies and job listings effortlessly.

### Key Features
* **User Authentication:** Jobly implements secure user authentication allowing users to sign up, log in, and maintain personalized profiles.

* **Company and Job Listings:** Users can browse through a vast array of companies and explore detailed information about each company. Additionally, they can view available job listings associated with each company.

* **Job Search and Application:** Jobly enables users to search for specific jobs based on different criteria such as job title, company name, or keywords. Users can easily apply to jobs they are interested in directly through the platform.

### Built With

* [![JavaScript][JavaScript]][JavaScript-url]
* [![React.js][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
To setup the development environment for Jobly on your computer, follow the steps below:

### Installation

1. Clone the repository
  ```sh
  git clone https://github.com/amcbroom52/react-jobly.git
  ```
2. install the dependencies
  ```sh
  npm install
  ```

3. Set up [backend server](https://github.com/amcbroom52/react-jobly-backend) on the port specified in `src/api/api.js`, or connect to [backend deployment](https://react-jobly-backend-amcbroom.onrender.com)

  ```js
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";
  ```

4. Start dev environment
  ```sh
  npm start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->
## Deployment

[Jobly Website](https://knowledgeable-silver.surge.sh/)

### Test User Login

**Username:** testusername

**Password:** password

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Adrian McBroom - [LinkedIn](https://www.linkedin.com/in/adrian-mcbroom/) - adrianmcb2000@gmail.com

Project Link: https://github.com/amcbroom52/react-jobly

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white
[JavaScript-url]: https://www.javascript.com/
