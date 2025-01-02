import { Post } from "../types/post";

const dummyPosts: Post[] = [
  {
    id: 1,
    author: "John Doe",
    title: "Understanding Vue.js",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    publishedOn: "2023-01-15",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Advanced TypeScript Tips",
    content: "TypeScript is a powerful tool for writing robust code",
    publishedOn: "2023-02-20",
  },
  {
    id: 3,
    author: "Alice Johnson",
    title: "CSS Grid Layout",
    content: "CSS Grid Layout is a two-dimensional layout system.",
    publishedOn: "2023-03-10",
  },
  {
    id: 4,
    author: "Bob Brown",
    title: "JavaScript ES6 Features",
    content: "ES6 introduced many new features to JavaScript.",
    publishedOn: "2023-04-05",
  },
  {
    id: 5,
    author: "Charlie Green",
    title: "React Hooks",
    content:
      "React Hooks allow you to use state and other features in functional components.",
    publishedOn: "2023-05-01",
  },
  {
    id: 6,
    author: "Diana Prince",
    title: "Angular Directives",
    content: "Directives are a core feature of Angular.",
    publishedOn: "2023-06-15",
  },
  {
    id: 7,
    author: "Eve Adams",
    title: "Node.js Streams",
    content: "Streams are a powerful way to handle data in Node.js.",
    publishedOn: "2023-07-20",
  },
  {
    id: 8,
    author: "Frank White",
    title: "Python for Data Science",
    content: "Python is a popular language for data science.",
    publishedOn: "2023-08-10",
  },
  {
    id: 9,
    author: "Grace Hopper",
    title: "Machine Learning Basics",
    content: "Machine learning is a field of artificial intelligence.",
    publishedOn: "2023-09-05",
  },
  {
    id: 10,
    author: "Hank Pym",
    title: "Introduction to Docker",
    content: "Docker is a tool for containerizing applications.",
    publishedOn: "2023-10-01",
  },
  {
    id: 11,
    author: "Ivy Lee",
    title: "Kubernetes for Beginners",
    content:
      "Kubernetes is a system for automating deployment, scaling, and management of containerized applications.",
    publishedOn: "2023-11-15",
  },
  {
    id: 12,
    author: "Jack Black",
    title: "GraphQL vs REST",
    content: "GraphQL and REST are two different approaches to API design.",
    publishedOn: "2023-12-20",
  },
  {
    id: 13,
    author: "Karen White",
    title: "Understanding Redux",
    content: "Redux is a state management library for JavaScript applications.",
    publishedOn: "2024-01-10",
  },
  {
    id: 14,
    author: "Leo King",
    title: "Vue.js Composition API",
    content: "The Composition API is a new feature in Vue.js 3.",
    publishedOn: "2024-02-05",
  },
  {
    id: 15,
    author: "Mona Lisa",
    title: "Svelte for Web Development",
    content:
      "Svelte is a modern JavaScript framework for building user interfaces.",
    publishedOn: "2024-03-01",
  },
  {
    id: 16,
    author: "Nina Brown",
    title: "Understanding Webpack",
    content: "Webpack is a module bundler for JavaScript applications.",
    publishedOn: "2024-04-15",
  },
  {
    id: 17,
    author: "Oscar Wilde",
    title: "Introduction to TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
    publishedOn: "2024-05-20",
  },
  {
    id: 18,
    author: "Paul Green",
    title: "Building APIs with Express",
    content: "Express is a web application framework for Node.js.",
    publishedOn: "2024-06-10",
  },
  {
    id: 19,
    author: "Quincy Adams",
    title: "Understanding Promises in JavaScript",
    content:
      "Promises are a way to handle asynchronous operations in JavaScript.",
    publishedOn: "2024-07-05",
  },
  {
    id: 20,
    author: "Rachel Blue",
    title: "Introduction to MongoDB",
    content: "MongoDB is a NoSQL database.",
    publishedOn: "2024-08-01",
  },
  {
    id: 21,
    author: "Steve Rogers",
    title: "Understanding RESTful APIs",
    content: "RESTful APIs are a way to design networked applications.",
    publishedOn: "2024-09-15",
  },
  {
    id: 22,
    author: "Tony Stark",
    title: "Building Single Page Applications",
    content:
      "Single Page Applications are web applications that load a single HTML page.",
    publishedOn: "2024-10-20",
  },
  {
    id: 23,
    author: "Uma Thurman",
    title: "Introduction to GraphQL",
    content: "GraphQL is a query language for APIs.",
    publishedOn: "2024-11-10",
  },
  {
    id: 24,
    author: "Victor Hugo",
    title: "Understanding CSS Flexbox",
    content:
      "CSS Flexbox is a layout model for arranging elements in a container.",
    publishedOn: "2024-12-05",
  },
  {
    id: 25,
    author: "Wendy White",
    title: "Introduction to WebAssembly",
    content:
      "WebAssembly is a binary instruction format for a stack-based virtual machine.",
    publishedOn: "2025-01-01",
  },
  {
    id: 26,
    author: "Xander Cage",
    title: "Building Mobile Apps with React Native",
    content:
      "React Native is a framework for building mobile apps using React.",
    publishedOn: "2025-02-15",
  },
  {
    id: 27,
    author: "Yara Greyjoy",
    title: "Understanding Serverless Architecture",
    content:
      "Serverless architecture is a way to build and run applications without managing servers.",
    publishedOn: "2025-03-20",
  },
  {
    id: 28,
    author: "Zara Black",
    title: "Introduction to DevOps",
    content:
      "DevOps is a set of practices that combines software development and IT operations.",
    publishedOn: "2025-04-10",
  },
  {
    id: 29,
    author: "Aaron White",
    title: "Understanding Microservices",
    content:
      "Microservices are a way to design software applications as a collection of loosely coupled services.",
    publishedOn: "2025-05-05",
  },
  {
    id: 30,
    author: "Bella Brown",
    title: "Introduction to Cloud Computing",
    content:
      "Cloud computing is the delivery of computing services over the internet.",
    publishedOn: "2025-06-01",
  },
  {
    id: 31,
    author: "Carter Green",
    title: "Understanding Continuous Integration",
    content: "Continuous Integration is a practice in software engineering.",
    publishedOn: "2025-07-15",
  },
  {
    id: 32,
    author: "Daisy Blue",
    title: "Introduction to Continuous Deployment",
    content: "Continuous Deployment is a practice in software engineering.",
    publishedOn: "2025-08-20",
  },
  {
    id: 33,
    author: "Ethan Hunt",
    title: "Understanding Agile Methodology",
    content: "Agile methodology is an approach to software development.",
    publishedOn: "2025-09-10",
  },
  {
    id: 34,
    author: "Fiona White",
    title: "Introduction to Scrum",
    content: "Scrum is a framework for managing work.",
    publishedOn: "2025-10-05",
  },
  {
    id: 35,
    author: "George Black",
    title: "Understanding Kanban",
    content: "Kanban is a method for managing work.",
    publishedOn: "2025-11-01",
  },
  {
    id: 36,
    author: "Hannah Green",
    title: "Introduction to Lean Software Development",
    content:
      "Lean Software Development is an approach to software development.",
    publishedOn: "2025-12-15",
  },
  {
    id: 37,
    author: "Ian White",
    title: "Understanding Test-Driven Development",
    content: "Test-Driven Development is a software development process.",
    publishedOn: "2026-01-20",
  },
  {
    id: 38,
    author: "Jill Black",
    title: "Introduction to Behavior-Driven Development",
    content: "Behavior-Driven Development is a software development process.",
    publishedOn: "2026-02-10",
  },
  {
    id: 39,
    author: "Kevin Green",
    title: "Understanding Domain-Driven Design",
    content: "Domain-Driven Design is an approach to software development.",
    publishedOn: "2026-03-05",
  },
  {
    id: 40,
    author: "Laura Blue",
    title: "Introduction to Event-Driven Architecture",
    content: "Event-Driven Architecture is a software architecture pattern.",
    publishedOn: "2026-04-01",
  },
  {
    id: 41,
    author: "Mike White",
    title: "Understanding Command Query Responsibility Segregation",
    content:
      "Command Query Responsibility Segregation is a software architecture pattern.",
    publishedOn: "2026-05-15",
  },
  {
    id: 42,
    author: "Nina Black",
    title: "Introduction to Event Sourcing",
    content: "Event Sourcing is a software architecture pattern.",
    publishedOn: "2026-06-20",
  },
  {
    id: 43,
    author: "Oscar Green",
    title: "Understanding Functional Programming",
    content: "Functional Programming is a programming paradigm.",
    publishedOn: "2026-07-10",
  },
  {
    id: 44,
    author: "Paula Blue",
    title: "Introduction to Reactive Programming",
    content: "Reactive Programming is a programming paradigm.",
    publishedOn: "2026-08-05",
  },
  {
    id: 45,
    author: "Quincy White",
    title: "Understanding Aspect-Oriented Programming",
    content: "Aspect-Oriented Programming is a programming paradigm.",
    publishedOn: "2026-09-01",
  },
  {
    id: 46,
    author: "Rachel Black",
    title: "Introduction to Object-Oriented Programming",
    content: "Object-Oriented Programming is a programming paradigm.",
    publishedOn: "2026-10-15",
  },
  {
    id: 47,
    author: "Steve Green",
    title: "Understanding Procedural Programming",
    content: "Procedural Programming is a programming paradigm.",
    publishedOn: "2026-11-20",
  },
  {
    id: 48,
    author: "Tina Blue",
    title: "Introduction to Logic Programming",
    content: "Logic Programming is a programming paradigm.",
    publishedOn: "2026-12-10",
  },
  {
    id: 49,
    author: "Uma White",
    title: "Understanding Concurrent Programming",
    content: "Concurrent Programming is a programming paradigm.",
    publishedOn: "2027-01-05",
  },
  {
    id: 50,
    author: "Victor Black",
    title: "Introduction to Parallel Programming",
    content: "Parallel Programming is a programming paradigm.",
    publishedOn: "2027-02-01",
  },
];

export default dummyPosts;
