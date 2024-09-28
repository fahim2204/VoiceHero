"use client"
import React, { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log(formData);
    };

    return (
        <div className="px-6 py-10 bg-beta rounded-2xl shadow-lg mt-6">
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='grid sm:grid-cols-2 gap-5 sm:gap-3'>
                    <Input
                        name="firstName"
                        label="First Name"
                        labelPlacement='outside'
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        classNames={{
                            inputWrapper: "bg-white"
                        }}
                    />
                    <Input
                        name="lastName"
                        label="Last Name"
                        labelPlacement='outside'
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        classNames={{
                            inputWrapper: "bg-white"
                        }}
                    />
                </div>
                <Input
                    name="email"
                    label="Company Email"
                    labelPlacement='outside'
                    placeholder="name@company.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    classNames={{
                        inputWrapper: "bg-white"
                    }}
                />
                <Input
                    name="phone"
                    label="Phone No."
                    labelPlacement='outside'
                    placeholder="+1 234 1234 124"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    classNames={{
                        inputWrapper: "bg-white"
                    }}
                />
                <Textarea
                    name="message"
                    label="Your Message"
                    labelPlacement='outside'
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    classNames={{
                        inputWrapper: "bg-white"
                    }}
                />
                <Button className='mt-4' type="submit" fullWidth color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;