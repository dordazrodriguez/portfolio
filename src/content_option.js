const isLocal = false
const project_base = 'portfolio/'

function imgdir() {
    if (isLocal) {
        return project_base;
    } else {
        return '';
    }
    // if (process.env.REACT_APP_NAME) {
    //   return process.env.REACT_APP_NAME;
    // } 
    // else {
    //   return '';
    // }
}


const logotext = "DAVID";
const meta = {
    title: "David Ordaz - Rodriguez",
    // description: "",
};

const introdata = {
    title: "I’m David Ordaz - Rodriguez",
    animated: {
        // first: "I love business and programming",
        first: "I have a passion for business and programming",
        second: "I code interesting websites and applications",
        third: "Naturally curious",
        fourth: "Actively seeking opportunities that would allow me to combine my knowledge and skills in both programming and finance.",
    },
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    your_img_url: "https://www.adva.com/-/media/adva-main-site/innovation/virtualization/transforming-sd-wan/sd-wan-1.png?rev=15e3aa96072a4b01af67a71e7dd1336e",
};

const dataabout = {
    title: "abit about my self",
    aboutme: []
};

const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];


const skills2 = [{
    languages: 'Python, Java, Javascript, HTML, CSS, Dart, TypeScript, SQL, NoSQL, Matplotlib, Pandas, Numpy',
    technologies: 'Flutter, React, Linux, Docker, SSH, API\'s, Tableau',
}];


const quotes = [{
    quote: '',
    author: '',
},
];


const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "Javascript, HTML, CSS",
        value: 90,
    },
    {
        name: "SQL",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Dart / Flutter",
        value: 90,
    },
    {
        name: "Docker",
        value: 80,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: imgdir() + 'project_images/flight_prediction_ML.gif',
        name: "Airline Flights Price Prediction using Machine Learning",
        // description: "The aim of ths project is to extract meaningful insights from airline data and make predictions about the future of airlines base on factors such as source, destinations, arrival times, departure times, journey dates, and number of stops. Ultimately, this project seeks to predict the fare or ticket price of flights on specific days based on these factors.",
        description: "This project seeks to predict the price of flights on a given day based on factors such as flight sources, destinations, arrival times, departure times, journey dates, and number of stops.",
        link: "https://colab.research.google.com/drive/1tpmXADD_4HdJf7w9oq9_cX5C19871uLD?usp=sharing",
        year: '',
        categories: ["programming", "financial", "Data_Science"],
        tags: ["Python", "Data Science", "Analytics", "Seaborn"],
    },
    {
        img: imgdir() + 'project_images/WGU-JavaFoundations.gif',
        name: "WGU Java Web App",
        description: "Web app made for WGU Computer Shop made with Java and Spring Boot.",
        link: "https://gitlab.com/wgu-gitlab-environment/student-repos/dordazr1/d287-java-frameworks/-/tree/main1?ref_type=heads",
        year: '',
        categories: ["programming"],
        tags: ["Java", "Spring Boot"],
    },
    {
        img: "https://www.datacamp.com/datacamp.png",
        name: "Data Science - Dev Journal",
        description: "Datacamp - Data Science Professional with Python Certification",
        link: "https://colab.research.google.com/drive/18Y84Z4yJi0lUAJBw9mIc9j8DiGmwpGrV?usp=sharing",
        year: '',
        categories: ["financial", "programming", "Data_Science"],
        tags: ['Python', 'Data Science', 'Analytics'],
    },
    {
        img: imgdir() +  'project_images/portfolio_project.gif',
        name: "Portfolio",
        description: "Created this developer portfolio using React.",
        link: "https://github.com/dordazrodriguez/portfolio",
        year: '',
        categories: ["programming"],
        tags: ["React", "Bootstrap", 'JavaScript', 'HTML', 'CSS'],
    },
    {
        img: "https://github.com/dordazrodriguez/IPTV-and-Movie-App/raw/main/Assets/tv.png",
        name: "IPTV and Movie Application",
        description: "A multi-platform application that I developed using Google's Flutter framework for streaming on-demand Movies and TV shows from links available on the internet. App also includes a section for streaming live TV Channels through HLS/HTTP links loaded from .M3U8 files.",
        link: "https://github.com/dordazrodriguez/IPTV-and-Movie-App",
        year: '2018',
        categories: ["programming"],
        tags: ['Flutter', 'Dart', 'SQL', 'NoSQL'],
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "More projects left to add...",
        link: null,
        year: '',
        categories: [],
        tags: [],
    },
];

const contactConfig = {
    YOUR_EMAIL: "dordazrodriguez@gmail.com",
    YOUR_FONE: "(225) 371-1811",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    // github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/david-ordaz-rodriguez-41124713a/",
    linktree: "https://linktr.ee/dordazrodriguez",
    portfolio: "./portfolio",
};

const links = [
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/david-ordaz-rodriguez-41124713a/",
    },
    {
        title: "Github 1",
        url: "https://github.com/djhome50",
    },
    {
        title: "Github 2",
        url: "https://github.com/dordazrodriguez",
    },
];



export {
    contactConfig, dataabout,
    dataportfolio, introdata, links, logotext, meta, services, skills, socialprofils, worktimeline, skills2
};

