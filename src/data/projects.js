import projo1 from "../images/projo1.png"
import projo2 from "../images/projo2.png"
import projo3 from "../images/projo3.png"
import projo4 from "../images/projo4.png"

export const projects = [
  {
    title: "Github Issue Tracker",
    description: `
        <p style={{ margin: 0 }}>A minimal, Issue tracker for github, 
        know your github stats just be searching your username and selecting, you can also view other people's github issues.</p>`,
    tools: ["next js", "github API", "vercel"],
    links: {
      github: "https://github.com/maxthestranger/github_issue_tracker",
      external: "https://something.com",
    },
    imgUrl: projo1,
  },
  {
    title: "Strange Theme",
    description: `
        <p style={{ margin: 0 }}>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="vscode.com">Visual Studio Marketplace</a>, Package Control, Atom Package Manager, and npm.</p>
        `,
    tools: ["vscode", "atom", "sublime", "bracket"],
    links: {
      github: "https://github.com/madmax",
      external: "https://theme.com",
    },
    imgUrl: projo2,
  },
  {
    title: "Bookman API",
    description: `
        <p style={{ margin: 0 }}>An API designed for bookstore managers, so they can setup a store and consume the API helping with all sells and stats and payment processing via <a href="https://flutterwave.com">flutterwave</a> and mpesa</p>
        `,
    tools: ["flutterwave", "mpesa", "express", "mongodb"],
    links: {
      github: "https://github.com/maxthestranger/bookman_api",
      external: "https://theme.com",
    },
    imgUrl: projo3,
  },
  {
    title: "Reading List Extention",
    description: `
        <p style={{ margin: 0 }}>A chromium based extention to help organise your web links for reading later, just like chrome's own reading list but with categorisation and some better fetaures like dark theme</p>
        `,
    tools: ["chrome", "edge", "brave", "etc"],
    links: {
      github: "https://github.com/maxthestranger/reading_list_2",
      external: "https://theme.com",
    },
    imgUrl: projo4,
  },
]

export const otherProjects = [
  {
    title: "Github Issue Tracker",
    description: `
        <p style={{ margin: 0 }}>A minimal, Issue tracker for github, 
        know your github stats just be searching your username and selecting, you can also view other people's github issues.</p>`,
    tools: ["next js", "github API", "vercel"],
    links: {
      github: "https://github.com/maxthestranger/github_issue_tracker",
      external: "https://something.com",
    },
  },
  {
    title: "Strange Theme",
    description: `
        <p style={{ margin: 0 }}>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="vscode.com">Visual Studio Marketplace</a>, Package Control, Atom Package Manager, and npm.</p>
        `,
    tools: ["vscode", "atom", "sublime", "bracket"],
    links: {
      github: "https://github.com/madmax",
      external: "https://theme.com",
    },
  },
  {
    title: "Bookman API",
    description: `
        <p style={{ margin: 0 }}>An API designed for bookstore managers, so they can setup a store and consume the API helping with all sells and stats and payment processing via <a href="https://flutterwave.com">flutterwave</a> and mpesa</p>
        `,
    tools: ["flutterwave", "mpesa", "express", "mongodb"],
    links: {
      github: "https://github.com/maxthestranger/bookman_api",
      external: "https://theme.com",
    },
  },
  {
    title: "Reading List Extention",
    description: `
        <p style={{ margin: 0 }}>A chromium based extention to help organise your web links for reading later, just like chrome's own reading list but with categorisation and some better fetaures like dark theme</p>
        `,
    tools: ["chrome", "edge", "brave", "etc"],
    links: {
      github: "https://github.com/maxthestranger/reading_list_2",
      external: "https://theme.com",
    },
  },
]
