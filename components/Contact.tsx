'use client';

import React from 'react'
import SectionHeading from "@/components/SectionHeading";
import {FaPaperPlane} from "react-icons/fa6";
import {motion} from "framer-motion";
import {useSectionInView} from "@/hocks/useSectionInView";
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from "@/components/SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
    const {ref} = useSectionInView('Contact', 0.75)

    const sendMessage = async (formData: FormData) => {
        const {data, error} = await sendEmail(formData);
        if (error) {
            toast.error(error);
            return;
        }
        if (data) {
            toast.success("Email sent successfully");
        }
    }

    return (
        <motion.section
            id={'contact'}
            ref={ref}
            className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
        >
            <SectionHeading>
                Contact me
            </SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:example@gmail.com">
                    example@gmail.com
                </a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex flex-col dark:text-black' action={sendMessage}>
                <input
                    className='h-14  px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                     transition-all dark:outline-none'
                    name='senderEmail'
                    required maxLength={500}
                    type='email'
                    placeholder='Your email'/>
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                     transition-all dark:outline-none'
                    name='message'
                    required maxLength={500}
                    placeholder='Your message'/>
                <SubmitBtn/>
            </form>
        </motion.section>
    )
}
