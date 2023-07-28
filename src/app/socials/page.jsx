"use client"
import InnerContent from '../components/InnerContent'
import { InputField, PrimaryBtn, SecondaryBtn } from '../components/ElementUtils'
import { Controller, useForm } from "react-hook-form"
import { useContext } from 'react'
import { formContext } from '../components/formContext'
export default function Socials() {
    let useFormContext = useContext(formContext)
    let { formData, setFormData } = useFormContext
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: 'all',
        defaultValues: formData?.socialData
    });
    const onSubmit = (data) => {

        localStorage.setItem('localFormDatas', JSON?.stringify({ ...formData, socialData: data }))
        setFormData({
            ...formData,
            socialData: data,
        })
    };

    return (
        <>
            <InnerContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="githubUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="GitHub" fieldName="githubUrl" type="text" {...register("githubUrl")} error={errors.githubUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="linkedInUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="LinkedIn" fieldName="linkedInUrl" type="text" {...register("linkedInUrl")} error={errors.linkedInUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="facebookUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="Facebook" fieldName="facebookUrl" type="text" {...register("facebookUrl")} error={errors.facebookUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="instagramUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="Instagram" fieldName="instagramUrl" type="text" {...register("instagramUrl")} error={errors.instagramUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="dribbleUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="Dribble" fieldName="dribbleUrl" type="text" {...register("dribbleUrl")} error={errors.dribbleUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="behanceUrl"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField labelName="Behance" fieldName="dribbleUrl" type="text" {...register("behanceUrl")} error={errors.behanceUrl} onChange={onChange}
                                onBlur={onBlur} value={value} />
                        )}
                    />
                    <div className='flex justify-end items-center gap-5 pb-10'>
                        <SecondaryBtn text="Cancel" btnType="button" />
                        <PrimaryBtn text="Save changes" btnType="submit" />
                    </div>
                </form>
            </InnerContent>
        </>
    )
}
