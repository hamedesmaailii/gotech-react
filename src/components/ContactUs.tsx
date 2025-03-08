import React from "react";
import Button from "./Button";

type ContactUsProps = {
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    problem: string,
    message: string,
}

const ContactUs : React.FC<ContactUsProps> = ({title, firstName, lastName, email, problem, message}) => {
    return (
        <div className="w-full flex flex-col items-center bg-[url('assets/ContactUsBg.png')] bg-cover bg-no-repeat py-60">
            <h3 className="text-center text-black2 text-large leading-[46px] mb-[40px]" dangerouslySetInnerHTML={{__html: title}}></h3>
            <div className="relative bg-white rounded-[8px] pt-[60px] pb-[50px] px-[52px] shadow-normal w-[770px] h-[650px] before:content-[''] before:absolute before:-left-[33%] before:-bottom-[11%] before:bg-[url('assets/contactUsBeforeImg.png')] before:bg-no-repeat before:w-[292px] before:h-[292px] after:content-[''] after:absolute after:-right-[36%] after:-bottom-[11%] after:bg-[url('assets/contactUsAfterImg.png')] after:bg-no-repeat after:w-[312px] after:h-[292px]">
                <div className="flex justify-between gap-[46px] mb-[36px]">
                    <label className="w-full text-start text-black2 text-small leading-[19px]" htmlFor="firstName">
                        {firstName}
                        <input
                            id="firstName"
                            className="firstName block w-full border-b border-IB outline-none mt-[18px] pb-[20px] text-gray2 text-xsmall leading-[17px]"
                            type="text"
                            placeholder="Robert Lee"
                        />
                    </label>
                    <label className="w-full text-start text-black2 text-small leading-[19px]" htmlFor="lastName">
                        {lastName}
                        <input
                            id="lastName"
                            className="lastName w-full border-b border-IB outline-none mt-[18px] pb-[20px] text-gray2 text-xsmall leading-[17px]"
                            type="text"
                            placeholder="Anderson"
                        />
                    </label>
                </div>
                <div className="mb-[36px]">
                    <label className="flex flex-col text-start text-black2 text-small leading-[19px]" htmlFor="email">
                        {email}
                        <input
                            id="email"
                            className="email w-full border-b border-IB outline-none mt-[18px] pb-[20px] text-gray2 text-xsmall leading-[17px]"
                            type="email"
                            placeholder="kevin.jones@mail.com"
                        />
                    </label>
                </div>
                <div className="mb-[36px]">
                    <label className="flex flex-col text-start text-black2 text-small leading-[19px]" htmlFor="problem">
                        {problem}
                        <select
                            id="problem" name="problem" className="w-full border-b border-IB outline-none mt-[18px] pb-[20px] text-gray2 text-xsmall leading-[17px]"
                        >
                            <option value="Select One">Select One</option>
                            <option value="First Item">First Item</option>
                            <option value="Second Item">Second Item</option>
                            <option value="Third Item">Third Item</option>
                        </select>
                    </label>
                </div>
                <div className="mb-[36px]">
                    <label className="flex flex-col text-start text-black2 text-small leading-[19px]" htmlFor="message">
                        {message}
                        <textarea id="message" className="w-full border-b border-IB resize-y outline-none min-h-100 mt-[18px] text-gray2 text-xsmall leading-[17px]" rows={5} placeholder="Lorem Ipsum is simply dummy text of the printing and...……."></textarea>
                    </label>
                </div>
                <Button
                    text="Our Works"
                    color="primary"
                />
            </div>
        </div>
    )
}

export default ContactUs;