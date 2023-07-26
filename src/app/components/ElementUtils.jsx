"use client"
import miniAvatar1 from '../images/mini-avatar-1.png'
import miniAvatar2 from '../images/mini-avatar-2.png'


import { useState } from 'react'

export const PrimaryBtn = (props) => {
    let { text, btnType } = props
    return (
        <button type={btnType} className="py-[10px] px-[16px] bg-primary-600 text-[#fff] rounded-[10px] font-semibold">{text}</button>
    )
}
export const SecondaryBtn = (props) => {
    let { text, btnType } = props
    return (
        <button type={btnType} className="py-[10px] px-[16px] bg-zink-100 text-black rounded-[10px] font-semibold">{text}</button>
    )
}

export const InputField = (props) => {
    let { labelName, fieldName, type, error, onChange, onBlur, value } = props
    return (
        <div className="mb-7">
            <label className="block text-black font-semibold mb-1">{labelName}</label>
            <input type={type} name={fieldName} className={`border-solid  border-2 w-[100%] p-2 text-black placeholder-zink-100 rounded-[6px] ${error ? 'border-[#d84848]' : 'border-zink-200'} `} onChange={onChange} onBlur={onBlur} value={value} />
            {error && (<p className='mt-2 text-[#d84848]'>This field is required</p>)}
        </div>
    )
}

export const ToggleSwitch = (props) => {
    let { title, subtitle, fieldName, value, onChange, onBlur } = props

    return (
        <div className="mb-5 flex justify-between items-center">
            <div className="flex-2">
                <h4 className="text-2xs text-black font-bold mb-1">{title}</h4>
                <p className="text-xs">{subtitle}</p>
            </div>
            <input
                className="bg-zink-500 h-[24px] w-[44px] relative appearance-none rounded-[20px] before:pointer-events-none before:absolute before:h-[18px] before:w-[18px] before:rounded-full before:bg-[#fff]  before:content-['']  before:left-[3px] before:checked:left-[calc(100%-3px)] checked:before:translate-x-[-100%] checked:bg-primary-600 before:transition-[2s] flex items-center"
                type="checkbox"
                role="switch"
                name={fieldName}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}

            />
        </div>
    )

}

export const PlaygroundCards = ({ techIcon, title, techName, time, cardId, value, onChange, onBlur }) => {

    const [groundCard, setgGroundCard] = useState(false)

    return (
        <label className={`card p-[20px] border-solid  border-2 rounded-[10px] basis-[calc(50%-20px)] flex-grow-1 cursor-pointer relative  ${groundCard ? 'border-[#4F46E5]' : 'border-zink-100'} group hover:bg-primary-600 hover:bg-opacity-10 hover:border-[#4F46E5] group-hover flex-1 bg-zink-50`} htmlFor={cardId} onChange={() => setgGroundCard(!groundCard)}>
            <input type="checkbox" name={cardId} id={cardId} className={`${groundCard ? 'block' : 'hidden'}  absolute group-hover:block w-[16px] h-[16px] appearance-none right-[20px] bg-primary-500 rounded-[50%] before:contents-[""] before:w-[8px] before:h-[8px] before:top-[50%] before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-[50%] before:bg-white  before:z-10 checked:before:bg-[#fff] before:rounded-[50%] `}
                defaultChecked={false}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />

            <div className="flex gap-[20px]">
                <figure>
                    <img src={techIcon} alt="Technology" />
                </figure>
                <div className="playground-context">
                    <h5 className='text-3xs text-black font-semibold mb-1'>{title}</h5>
                    <p className='text-xs'>{techName}&nbsp;&#8226;&nbsp;{time} </p>
                    <div className='flex mt-1'>
                        <div className="flex relative">
                            <img src={miniAvatar1.src} alt="Mini Avatar" />
                            <img src={miniAvatar2.src} alt="Mini Avatar" className='relative left-[-6px]' />
                        </div>
                        <p>Shared with Adam, Anna.. +7 more</p>
                    </div>
                </div>
            </div>

        </label>
    )
}


export const ProjectCards = ({ projectImg, title, techName, time, cardId, value, onChange, onBlur }) => {
    const [projectCard, setprojectCard] = useState(false)
    return (
        <label className={`card p-[20px] border-solid  border-2 rounded-[10px] basis-[calc(50%-20px)] flex-grow-1 cursor-pointer relative  ${projectCard ? 'border-[#4F46E5]' : 'border-zink-100'} group hover:bg-primary-600 hover:bg-opacity-10 hover:border-[#4F46E5] group-hover flex-1 bg-zink-50`
        } htmlFor={cardId} onChange={() => setprojectCard(!projectCard)}>
            <input type="checkbox" name={cardId} id={cardId} className="hidden"
                defaultChecked={false}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <div className='mb-6 relative'>

                <img src={projectImg} alt="Project Image" className='w-[100%]' />
                <div className="flex flex-wrap absolute bottom-4 left-4 gap-2">
                    <span className="bg-secondary-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 dark:bg-blue-900 text-secondary-900 rounded-[4px]">Badge</span>
                </div>

            </div>
            <div className="playground-context">
                <h5 className='text-3xs text-black font-semibold mb-2'>{title}</h5>
                <p className='text-xs'>{techName.map((text) => <>{text}&nbsp;&#8226;</>)}{time} </p>
                <div className='flex mt-1'>
                    <div className="flex relative">
                        <img src={miniAvatar1.src} alt="Mini Avatar" />
                        <img src={miniAvatar2.src} alt="Mini Avatar" className='relative left-[-6px]' />
                    </div>
                    <p>3 contributors</p>
                </div>
            </div>
        </label>
    )

}