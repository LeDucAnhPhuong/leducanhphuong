"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState, useTransition } from "react";

import { MoveUpRight } from "lucide-react";
import Terminal from "../ui/Terminal";
import { toast } from "sonner";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null!);

  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const toastID = toast.loading("sending your message...");
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
          {
            from_name: form.name,
            to_name: "Lê Đức Anh Phương",
            from_email: form.email,
            user_email: form.email,
            to_email: "leducanhphuongdev@gmail.com",
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success("Thank you for your message 😃", { id: toastID });

            setTimeout(() => {
              setForm({
                name: "",
                email: "",
                message: "",
              });
            }, 3000);
          },
          (error) => {
            console.error(error);
            toast.error("I didn't receive your message 😢", { id: toastID });
          }
        );
    });
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <Terminal>
          <div className="contact-container">
            <h3 className="head-text">Let&apos;s talk</h3>
            <p className="text-lg dark:text-white-600 text-black-600 mt-3">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Input full name..."
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Input email..."
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn text-black dark:text-white" type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
                <MoveUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </Terminal>
      </div>
    </section>
  );
};

export default Contact;
