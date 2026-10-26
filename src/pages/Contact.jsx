import React, { useState } from "react";
import { contact } from "../data/data";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  AtSign,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

function Contact() {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      setSuccess(false);
      return;
    }

    console.log("Form submitted:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: contact.socials.twitter,
      icon: AtSign,
    },
    {
      name: "LinkedIn",
      url: contact.socials.linkedin,
      icon: BriefcaseBusiness,
    },
    {
      name: "GitHub",
      url: contact.socials.github,
      icon: Code2,
    },
  ];

  return (
    <main className="relative isolate overflow-hidden bg-white px-4 py-14 text-slate-800 transition-colors duration-300 sm:px-6 sm:py-20 dark:bg-slate-950 dark:text-slate-100">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-500/10" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400">
            <MessageCircle size={16} />
            Contact Us
          </span>

          <h1 className="larian mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {contact.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            {contact.subtitle}
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* Contact Information */}
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's talk
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Have something on your mind? Reach out to us using the details
              below. We'd be happy to hear from you.
            </p>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group mt-7 flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white dark:hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <Mail size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Email Us
                </h3>
                <p className="mt-1 break-all text-sm text-slate-600 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Support Email */}
            <a
              href={`mailto:${contact.supportEmail}`}
              className="group mt-2 flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white dark:hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                <MessageCircle size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Support
                </h3>
                <p className="mt-1 break-all text-sm text-slate-600 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">
                  {contact.supportEmail}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-2 flex items-start gap-4 rounded-xl p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Our Location
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {contact.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7 border-t border-slate-200 pt-6 dark:border-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Follow Us
              </h3>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send us a message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Fill out the form below and we'll be happy to connect.
            </p>

            <form
              onSubmit={SubmitHandler}
              noValidate
              className="mt-7 space-y-5"
            >
              {contact.formFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {field.label}
                    {field.required && (
                      <span className="ml-1 text-red-500">*</span>
                    )}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={5}
                      required={field.required}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                      placeholder="Write your message here..."
                      className={`w-full resize-y rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950 ${
                        errors[field.name]
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-950"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100 dark:border-slate-700 dark:focus:border-emerald-500 dark:focus:ring-emerald-950"
                      }`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                      placeholder={
                        field.name === "name"
                          ? "Enter your full name"
                          : field.name === "email"
                            ? "you@example.com"
                            : "How can we help?"
                      }
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950 ${
                        errors[field.name]
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-950"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100 dark:border-slate-700 dark:focus:border-emerald-500 dark:focus:ring-emerald-950"
                      }`}
                    />
                  )}

                  {errors[field.name] && (
                    <p
                      id={`${field.name}-error`}
                      className="mt-2 text-sm font-medium text-red-500"
                    >
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 sm:w-auto dark:focus:ring-emerald-900"
              >
                <Send size={17} />
                Send Message
              </button>

              {success && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-400"
                >
                  Message sent successfully!
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
