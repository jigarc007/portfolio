"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { sendMail } from "../lib/mail";

function Form() {
  const [captcha, setCaptcha] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha) {
      const formData = {};
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.id) return;
        formData[field.id] = field.value;
      });
      console.log({ formData });
      if (formData?.email && formData?.name && formData?.message) {
        console.log("sending the mail...");
        await sendMail({
          to: formData.email,
          body: `<html>
        <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body>
        <table bgcolor="#fafafa" style=" width: 100%!important; height: 100%; background-color: #fafafa; padding: 20px; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, 'Lucida Grande', sans-serif;  font-size: 100%; line-height: 1.6;">
        <tr>
        <td></td>
        <td bgcolor="#FFFFFF" style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block!important; max-width:600px!important; margin:0 auto!important; clear:both!important;"><div style="padding:20px; max-width:600px; margin:0 auto; display:block;">
        <table style="width: 100%;">
        <tr>
        <td><p style="text-align: center; display: block;  padding-bottom:20px;  margin-bottom:20px; border-bottom:1px solid #dddddd;"><img width="54px" height="54px" src="https://i.postimg.cc/NMmW4n6g/JCLogo-removebg-preview.png"/></p>
        <p style="margin-bottom: 10px; font-weight: normal; font-size:16px; color: #333333;"><b>Name:</b> ${formData.name}</p>
        <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"><b>From:</b> ${formData.email}</h2>
        <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"><b>Message:</b> ${formData.message}</h2>
        </tr>
        </table>
        </div></td>
        <td></td>
        </tr>
        </table>
        </body>
        </html>`,
          name: formData.name,
          subject: "Message from client to hire me",
        });
        toast.success("Thank you for contact me!");
      } else {
        toast.warning("please fill the all the required field.");
      }
    } else {
      toast.warning("please select the captcha.");
    }
  };
  return (
    <form
      method="post"
      className="flex flex-col gap-y-4"
      onSubmit={handleSubmit}
    >
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" required />
        <User size={20} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" required />
        <MailIcon size={20} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea
          type="message"
          id="message"
          placeholder="Type Your Message Here."
          required
        />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <div className="relative flex items-center">
        <ReCAPTCHA
          className="mx-auto w-full"
          sitekey={process.env.NEXT_PUBLIC_RECEPTCHA_SITE_KEY}
          onChange={setCaptcha}
        />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        {`Let's talk`}
        <ArrowRightIcon size={20} />
      </Button>
      <ToastContainer position="top-right" />
    </form>
  );
}

export default Form;
