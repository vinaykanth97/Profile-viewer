import React from 'react'
import InnerContent from '../components/InnerContent'
import { InputField, PrimaryBtn, SecondaryBtn } from '../components/ElementUtils'
export default function Socials() {
    return (
        <>
            <InnerContent>
                <form>
                    <InputField labelName="GitHub" fieldName="githubUrl" type="url" />
                    <InputField labelName="Linkedin" fieldName="linkedInUrl" type="url" />
                    <InputField labelName="Facebook" fieldName="facebookUrl" type="url" />
                    <InputField labelName="Instagram" fieldName="instagramUrl" type="url" />
                    <InputField labelName="Dribbble" fieldName="dribbleUrl" type="url" />
                    <InputField labelName="Behance" fieldName="behanceUrl" type="url" />
                    <div className='flex justify-end items-center gap-5 pb-10'>
                        <SecondaryBtn text="Cancel" btnType="button" />
                        <PrimaryBtn text="Save changes" btnType="submit" />
                    </div>
                </form>
            </InnerContent>
        </>
    )
}
