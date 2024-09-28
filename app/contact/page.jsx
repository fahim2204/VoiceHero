import { BiHomeAlt } from "react-icons/bi";
import { Badge, BreadcrumbItem, Breadcrumbs, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import GetStartedSection from "../../components/GetStartedSection";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {

    return (
        <main className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 relative">
                <div className="mb-10">
                    <Breadcrumbs
                        separator={<><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.86409 1.14003L6.74743 4.00003L3.86409 6.86003L4.80276 7.80669L8.64076 4.00003L4.80276 0.193359L3.86409 1.14003Z" fill="#3C312E" fill-opacity="0.8" />
                            <path d="M1.46943 0.193359L0.530762 1.14003L3.4141 4.00003L0.530762 6.86003L1.46943 7.80669L5.30743 4.00003L1.46943 0.193359Z" fill="#3C312E" fill-opacity="0.8" />
                        </svg></>}
                        itemClasses={{
                            separator: "px-2"
                        }}
                    >
                        <BreadcrumbItem startContent={<BiHomeAlt />}>Homepage</BreadcrumbItem>
                        <BreadcrumbItem color="primary">Contact Us</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <section className="max-w-xl mx-auto flex flex-col gap-3 mb-10 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Talk to our Team</h1>
                    <h3 className="text-lg sm:text-xl font-medium">Get your enterprise pricing and product application questions answered by one of our experts.</h3>
                    <p className="text-sm sm:text-base">For technical support or general inquiries, please visit our Help Center, or you can reach out to our dedicated support team via our support chat.</p>
                    <ContactForm />
                </section>
            </div>
        </main>
    );
}