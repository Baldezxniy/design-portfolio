'use server'

import {Resend} from "resend";
import {getErrorMessage, validateString} from '@/lib/utils';
import ContactForm from "@/email/ContactForm";
import React from "react";

const resend = new Resend(process.env.RESENT_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (validateString(message, 500)) {
        return {error: 'Invalid Message'};
    }

    if (validateString(senderEmail, 5000)) {
        return {error: 'Invalid Email'};
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'miroslavkosuk@gmail.com',
            subject: 'Сообщение с формы сайта.',
            reply_to: senderEmail as string,
            react: React.createElement(ContactForm, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    } catch (error: any) {
        if (error instanceof Error) {
            return {error: error.message}
        } else if (error && typeof error === 'object' && 'message' in error) {
            return {error: error.message}
        } else {
            return {error: getErrorMessage(error)}
        }
    }

    return {data};
}
