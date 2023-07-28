"use client"
import InnerContent from '../components/InnerContent'
import { InputField, PrimaryBtn, SecondaryBtn, ToggleSwitch } from '../components/ElementUtils'
import avatarProfile from '../images/codedamn-avatar.png'
import { Controller, useForm } from "react-hook-form"
import { useCallback, useContext, useEffect } from 'react'
import { formContext } from '../components/formContext'



export default function Profile() {
  let useFormContext = useContext(formContext)
  let { formData, setFormData } = useFormContext
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    mode: 'all',
    defaultValues: formData?.profileData
  });
  const onSubmit = (data) => {
    localStorage.setItem('localFormDatas', JSON?.stringify({ ...formData, profileData: data }))
    setFormData({
      ...formData,
      profileData: data,
    })
  };

  return (
    <>
      <InnerContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-7">
            <figure className='mr-6'>
              <img src={avatarProfile.src} alt="avatar Profile" className='w-[72px] h-[72px]' />
            </figure>
            <div className="button-utils flex gap-3">
              <label htmlFor='fileupload' className='py-[10px] px-[16px] bg-primary-600 text-[#fff] rounded-[10px] font-semibold'>Upload new picture</label>
              <input type="file" className='hidden' id="fileupload" name='profileImage' />
              <SecondaryBtn text="Delete" btnType="button" />
            </div>
          </div>
          {/* Field Items */}


          <Controller
            control={control}
            name="displayName"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField labelName="Display name" fieldName="displayName" type="text" {...register("displayName", { required: true })} error={errors.displayName} onChange={onChange}
                onBlur={onBlur} value={value} />
            )}
          />

          <div className="mb-7" >
            <label className="block text-black font-semibold mb-1">About</label>
            <textarea rows="3" className={`border-solid  border-2 w-[100%]  p-2 text-black resize-none ${errors.about ? 'border-[#d84848]' : 'border-zink-200'}`} name='about' {...register("about", { required: true })}></textarea>
            {errors.about && <p className='mt-2 text-[#d84848]'>This field is required</p>}
          </div >
          <Controller
            control={control}
            name="profession"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField labelName="Profession" fieldName="profession" type="text" {...register("profession", { required: true })} error={errors.profession} onChange={onChange}
                onBlur={onBlur} value={value} />
            )}
          />


          <Controller
            control={control}
            name="dateofbirth"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField labelName="dateofbirth" fieldName="dateofbirth" type="date" {...register("dateofbirth", { required: true })} error={errors.dateofbirth} onChange={onChange}
                onBlur={onBlur} value={value} />
            )}
          />
          <div className="mb-7" >
            <label className="block text-black font-semibold mb-1">Gender</label>
            <select name="gender" className={`${errors.gender ? 'border-[#d84848]' : 'border-zink-200'} border-solid border-zink-200 border-2 w-[100%]  p-2 text-black `}  {...register("gender", { required: true })}>
              <option value="">Select your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className='mt-2 text-[#d84848]'>This field is required</p>}
          </div>
          <div className="mb-[50px]">
            <h2 className="text-4xs text-black font-bold mb-2">Section visibility</h2>
            <p className='mb-8'>Select which sections and content should show on your profile page.</p>

            <Controller
              control={control}
              name="followers"
              defaultValue={false}
              render={({ field: { onChange, onBlur, value } }) => (
                <ToggleSwitch title="Followers and following" subtitle="Shows your followers and the users you follow on codedamn" fieldName="followers" {...register("followers")} value={value} onBlur={onBlur} onChange={onChange} />
              )}
            />
            <Controller
              control={control}
              name="xpEarned"
              defaultValue={false}
              render={({ field: { onChange, onBlur, value } }) => (
                <ToggleSwitch title="XP" subtitle="Shows the XP you have earned" fieldName="xpEarned"   {...register("xpEarned")} value={value} onBlur={onBlur} onChange={onChange} />
              )}
            />

            <Controller
              control={control}
              name="achievementBadges"
              defaultValue={false}
              render={({ field: { onChange, onBlur, value } }) => (
                <ToggleSwitch title="Achievement badges" subtitle="Shows your relative percentile and proficiency" fieldName="achievementBadges"  {...register("achievementBadges")} value={value} onChange={onChange} onBlur={onBlur} />
              )}
            />


          </div>
          <div className='flex justify-end items-center gap-5 pb-10'>
            <SecondaryBtn text="Cancel" btnType="button" />
            <PrimaryBtn text="Save changes" btnType="submit" />
          </div>
        </form>

      </InnerContent>
    </>
  )
}
