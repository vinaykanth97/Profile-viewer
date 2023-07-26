"use client";
import { PlaygroundCards, PrimaryBtn, ProjectCards, SecondaryBtn } from '../components/ElementUtils'
import InnerContent from '../components/InnerContent'
import { useContext, useState } from 'react'
import { formContext } from '../components/formContext'
import { useForm, Controller } from 'react-hook-form';
import { playGroundItems, projectItems } from '../data/pageDatas';

export default function Portfolio() {

    let useFormContext = useContext(formContext)
    let { formData, setFormData } = useFormContext
    const { register, handleSubmit, formState: { errors }, control, setValue, getValues, reset } = useForm({
        mode: 'all',
        defaultValues: formData?.portfolioData
    });
    let [portfolio, setPortfolio] = useState({
        playground: playGroundItems,
        projects: projectItems
    })
    let playgroundArr = []
    let projectArr = []

    const HandleChange = (e, checkBoxName, id) => {
        let { playground, projects } = portfolio
        function CheckArray(whichArray, whichEmpArray, setValueIn) {

            if (e.target.checked) {
                console.log('checked')
                whichArray?.filter((p) => {
                    if (p.cardId === id) {
                        whichEmpArray.push(p)

                        setValue(setValueIn, whichEmpArray)
                    }
                })
            } else {
                console.log('unchecked')
                let tes = playgroundArr?.findIndex((p) => {
                    if (p.cardId === id) {
                        return p
                    }
                })
                playgroundArr?.splice(tes, 1)
                setValue(setValueIn, whichEmpArray)
            }
        }
        if (checkBoxName === "playGroundItems") {
            CheckArray(playground, playgroundArr, 'playGroundItems')
        } else {
            CheckArray(projects, projectArr, 'projectItems')
        }


    }
    const onSubmit = (data) => {
        console.log(data)

        // localStorage.setItem('localFormDatas', JSON?.stringify({ ...formData, portfolioData: data }))
        // setFormData({
        //     portfolioData: data,
        // })
    };
    return (

        <InnerContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mb-6 items-center">
                    <h1 className='text-5xs text-black font-bold'>Playgrounds</h1>
                    <p className='cursor-pointer'>See all</p>
                </div>
                <div className='flex flex-wrap gap-[20px] justify-between'>
                    {playGroundItems.map((items, i) => {
                        return (
                            <Controller
                                defaultValue={false}
                                control={control}
                                name="playGroundItems"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <PlaygroundCards
                                        techIcon={items.techImg.src}
                                        title={items.title}
                                        techName={items.techName}
                                        time={items.time}
                                        cardId={items.cardId}

                                        {...register("playGroundItems")}
                                        onChange={(e) => HandleChange(e, "playGroundItems", items.cardId)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />

                        )
                    })}
                </div>
                <div className="flex justify-between mb-6 items-center mt-[60px]">
                    <h1 className='text-5xs text-black font-bold'>Projects</h1>
                    <p className='cursor-pointer'>See all</p>
                </div>
                <div className='flex flex-wrap gap-[20px] justify-between'>
                    {projectItems.map((items, i) => {
                        return (
                            <Controller
                                control={control}
                                name="projectItems"
                                defaultValue={false}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <ProjectCards
                                        projectImg={items.projectImg.src}
                                        title={items.title}
                                        techName={items.techName}
                                        time={items.time}
                                        cardId={items.cardId}
                                        onChange={(e) => HandleChange(e, 'projectItems', items.cardId)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
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

    )
}
