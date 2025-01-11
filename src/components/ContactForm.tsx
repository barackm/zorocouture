"use client";
import React, { useState } from "react";
const formSpreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "Barack Mukelenga",
    email: "barackmukelenga100@gmail.com",
    message: "Test message",
    status: "",
    isLoading: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.isLoading) return;

    setFormState((prev) => ({ ...prev, isLoading: true, status: "" }));

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState({
          name: "",
          email: "",
          message: "",
          status: "success",
          isLoading: false,
        });

        setTimeout(() => {
          setFormState((prev) => ({ ...prev, status: "" }));
        }, 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        isLoading: false,
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {formState.status === "success" && (
        <p className="text-green-500 mb-4">
          ✨ Message sent successfully! Thank you for contacting us! 🎉
        </p>
      )}
      {formState.status === "error" && (
        <p className="text-red-500 mb-4">
          ❌ Oops! Something went wrong. Please try again.
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        action={`https://formspree.io/f/${formSpreeId}`}
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          disabled={formState.isLoading}
          className={`w-full bg-blue-500 text-white p-2 relative ${
            formState.isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {formState.isLoading ? (
            <>
              <span className="opacity-0">Send Message</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
