import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";
import {Tailwind} from '@react-email/tailwind'

type Props = {
    senderEmail: string;
    message: string;
}
export default function ContactForm({senderEmail, message}: Props) {
    return (
        <Html>
            <Head/>
            <Preview>
                New message from your portfolio site
            </Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 py-4 px-10 rounded-md'>
                            <Heading className='leading-tight'>Ты получил ещё один раз хуем по ебалу</Heading>
                            <Text>
                                {message}
                            </Text>
                            <Hr/>
                            <Text>Вы получили по ебалу от: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
