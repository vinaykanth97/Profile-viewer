"use client";
import { PlaygroundCards, PrimaryBtn, ProjectCards, SecondaryBtn } from '../components/ElementUtils'
import InnerContent from '../components/InnerContent'
import { useContext, useEffect, useState } from 'react'
import { formContext } from '../components/formContext'
import { useForm, Controller } from 'react-hook-form';
import { playground, projects } from '../data/pageDatas';

export default function Portfolio() {

    let useFormContext = useContext(formContext)
    let { formData, setFormData } = useFormContext
    const { register, handleSubmit, formState: { errors }, control, setValue, getValues, reset } = useForm({
        mode: 'all',
        // defaultValues: formData?.portfolioData
    });
    let [portfolio, setPortfolio] = useState({
        playground,
        projects
    })

    const HandleChange = (e, checkBoxName, selectedItem) => {

        if (e.target.checked) {
            let selectedPortfolio = portfolio?.playground?.map(t => {
                if (t.cardId === selectedItem.cardId) {
                    t.selected = true
                }
                return t
            })
            let selectProject = portfolio?.projects?.map(t => {
                if (t.cardId === selectedItem.cardId) {
                    t.selected = true
                }
                return t
            })
            setPortfolio({
                playground: selectedPortfolio,
                projects: selectProject
            })
            // selectedItem.selected = true
            // setPortfolio(portfolio)
            // if (checkBoxName === "playGroundItems") {
            //     // console.log(portfolio)
            //     setPortfolio({
            //         playground: [...portfolio?.playground, selectedItem],
            //         projects: [...portfolio?.projects]
            //     })
            // } else {
            //     setPortfolio({
            //         playground: [...portfolio?.playground],
            //         projects: [...portfolio?.projects, selectedItem]
            //     })
            // }
        } else {
            let selectedPortfolio = portfolio?.playground?.map(t => {
                if (t.cardId === selectedItem.cardId) {
                    t.selected = false
                }
                return t
            })
            let selectProject = portfolio?.projects?.map(t => {
                if (t.cardId === selectedItem.cardId) {
                    t.selected = false
                }
                return t
            })
            setPortfolio({
                playground: selectedPortfolio,
                projects: selectProject
            })

        }

    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('localFormDatas'))?.portfolioData) {
            setFormData(formData)
        } else {
            setFormData({
                portfolioData: {
                    playground,
                    projects
                }
            })
        }
        setValue('playground', portfolio?.playground)
        setValue('projects', portfolio?.projects)
    }, [portfolio])

    const onSubmit = (data) => {
        console.log(data)
        localStorage.setItem('localFormDatas', JSON?.stringify({ ...formData, portfolioData: data }))
        setFormData({
            portfolioData: data,
        })
    };
    return (

        <InnerContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mb-6 items-center">
                    <h1 className='text-5xs text-black font-bold'>Playgrounds</h1>
                    <p className='cursor-pointer'>See all</p>
                </div>
                <div className='flex flex-wrap gap-[20px] justify-between'>
                    {formData?.portfolioData?.playground?.map((items, i) => {
                        console.log(items)
                        return (
                            <Controller
                                defaultValue={false}
                                control={control}
                                name="playground"
                                render={({ field: { onBlur, value } }) => (
                                    <PlaygroundCards
                                        techIcon={items.techImg.src}
                                        title={items.title}
                                        techName={items.techName}
                                        time={items.time}
                                        cardId={items.cardId}
                                        selectedItem={items.selected}
                                        {...register("playground")}
                                        onChange={(e) => HandleChange(e, "playground", items)}
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
                    {formData?.portfolioData?.projects?.map((items) => {
                        return (
                            <Controller
                                control={control}
                                name="projects"
                                defaultValue={false}
                                render={({ field: { onBlur, value } }) => (
                                    <ProjectCards
                                        projectImg={items.projectImg.src}
                                        title={items.title}
                                        techName={items.techName}
                                        time={items.time}
                                        cardId={items.cardId}
                                        selectedItem={items.selected}
                                        {...register("projects")}
                                        onChange={(e) => HandleChange(e, 'projects', items)}
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
