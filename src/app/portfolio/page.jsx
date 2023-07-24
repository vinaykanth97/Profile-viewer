import { PlaygroundCards, PrimaryBtn, ProjectCards, SecondaryBtn } from '../components/ElementUtils'
import InnerContent from '../components/InnerContent'
import html5Icon from "../images/html-5.svg"
import jsIcon from "../images/javascript.svg"
import project1 from "../images/project.jpg"
import project2 from "../images/project-2.jpg"
import project3 from "../images/project-3.jpg"
import project4 from "../images/project-4.jpg"
import EditPageLayout from '../editpageLayout'

export default function Portfolio() {
    let playGroundItems = [{
        title: 'PlayGround Title',
        techName: 'HTML/CSS',
        time: '1 min ago',
        cardId: "play1",
        techImg: html5Icon,
        projectImg: project1,
    }, {
        title: 'PlayGround Title',
        techName: 'HTML/CSS',
        time: '1 min ago',
        cardId: "play2",
        techImg: html5Icon,
        projectImg: project2,
    }, {
        title: 'PlayGround Title',
        techName: 'HTML/CSS',
        time: '1 min ago',
        cardId: "play3",
        techImg: jsIcon,
        projectImg: project3,
    }, {
        title: 'PlayGround Title',
        techName: 'HTML/CSS',
        time: '1 min ago',
        cardId: "play4",
        techImg: html5Icon,

    }]
    const projectItems = [{
        title: 'Personal Portfolio Website',
        projectImg: project1,
        techName: ['HTML/CSS', 'Javascript'],
        time: '1 min ago',
        cardId: "pi-1",
    }, {
        title: 'Personal Portfolio Website',
        projectImg: project4,
        techName: ['HTML/CSS', 'Javascript'],
        time: '1 min ago',
        cardId: "pi-2",
    }, {
        title: 'Personal Portfolio Website',
        projectImg: project3,
        techName: ['HTML/CSS', 'Javascript'],
        time: '1 min ago',
        cardId: "pi-3",
    }, {
        title: 'Personal Portfolio Website',
        projectImg: project2,
        techName: ['HTML/CSS', 'Javascript'],
        time: '1 min ago',
        cardId: "pi-4",
    },]
    return (
        <>
            <InnerContent>
                <form>
                    <div className="flex justify-between mb-6 items-center">
                        <h1 className='text-5xs text-black font-bold'>Playgrounds</h1>
                        <p className='cursor-pointer'>See all</p>
                    </div>
                    <div className='flex flex-wrap gap-[20px] justify-between'>
                        {playGroundItems.map((items) => {
                            return (
                                <PlaygroundCards
                                    techIcon={items.techImg.src}
                                    title={items.title}
                                    techName={items.techName}
                                    time={items.time}
                                    cardId={items.cardId}
                                />
                            )
                        })}
                    </div>
                    <div className="flex justify-between mb-6 items-center mt-[60px]">
                        <h1 className='text-5xs text-black font-bold'>Projects</h1>
                        <p className='cursor-pointer'>See all</p>
                    </div>
                    <div className='flex flex-wrap gap-[20px] justify-between'>
                        {projectItems.map((items) => {
                            return (
                                <ProjectCards
                                    projectImg={items.projectImg.src}
                                    title={items.title}
                                    techName={items.techName}
                                    time={items.time}
                                    cardId={items.cardId}
                                />
                            )
                        })}
                    </div>
                    <div className='flex justify-end items-center gap-5 pb-10 mt-7'>
                        <SecondaryBtn text="Cancel" btnType="button" />
                        <PrimaryBtn text="Save changes" btnType="submit" />
                    </div>
                </form>

            </InnerContent>
        </>
    )
}
