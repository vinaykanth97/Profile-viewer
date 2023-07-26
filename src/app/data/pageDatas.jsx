import html5Icon from "../images/html-5.svg"
import jsIcon from "../images/javascript.svg"
import project1 from "../images/project.jpg"
import project2 from "../images/project-2.jpg"
import project3 from "../images/project-3.jpg"
import project4 from "../images/project-4.jpg"
import { v4 as uuid_v4 } from "uuid";
export const playGroundItems =
    [{
        title: 'Codesandbox',
        techName: 'HTML/CSS',
        time: '1 min ago',
        cardId: "play1",
        techImg: html5Icon,
        projectImg: project1,
        selected: false
    }, {
        title: 'Codepen',
        techName: 'HTML/CSS/JavaScript',
        time: '1 min ago',
        cardId: "play2",
        techImg: jsIcon,
        projectImg: project2,
        selected: false
    }, {
        title: 'Submenu Navigator',
        techName: 'React',
        time: '1 min ago',
        cardId: "play3",
        techImg: jsIcon,
        projectImg: project3,
        selected: false
    }, {
        title: 'Panel Adjustor',
        techName: 'HTML/CSS/JavaScript',
        time: '1 min ago',
        cardId: "play4",
        techImg: html5Icon,
        selected: false
    }]

export const projectItems = [{
    title: 'Voice Dental',
    projectImg: project1,
    techName: ['HTML/CSS', 'Javascript'],
    time: '1 min ago',
    cardId: uuid_v4(),
}, {
    title: 'Don Bosco church',
    projectImg: project4,
    techName: ['HTML/CSS', 'Javascript'],
    time: '1 min ago',
    cardId: uuid_v4(),
}, {
    title: 'INTRC',
    projectImg: project3,
    techName: ['HTML/CSS', 'Javascript'],
    time: '1 min ago',
    cardId: uuid_v4(),
}, {
    title: 'Thinkstudy',
    projectImg: project2,
    techName: ['HTML/CSS', 'Javascript'],
    time: '1 min ago',
    cardId: uuid_v4(),
}]