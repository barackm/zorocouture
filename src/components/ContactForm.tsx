"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiUser, HiMail, HiArrowRight } from "react-icons/hi";
import Input from "./Input";
import Button from "./Button";

const formSpreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (status === "success") {
      timeoutId = setTimeout(() => {
        setStatus("");
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (isLoading) return;
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch(`https://formspree.io/f/${formSpreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {status === "success" && (
        <p className="text-green-500 mb-4">
          ✨ Message envoyé avec succès! Merci de nous avoir contacté! 🎉
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 mb-4">
          ❌ Oops! Une erreur s&apos;est produite. Veuillez réessayer.
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Votre nom"
            register={register}
            required
            error={errors.name?.message}
            icon={<HiUser size={20} />}
            disabled={isLoading}
          />
          <Input
            name="email"
            type="email"
            placeholder="Votre email"
            register={register}
            required
            error={errors.email?.message}
            icon={<HiMail size={20} />}
            disabled={isLoading}
          />
          <Input
            name="message"
            placeholder="Votre message"
            register={register}
            required
            error={errors.message?.message}
            textarea
            disabled={isLoading}
          />
        </div>
        <Button
          fullWidth
          type="submit"
          icon={<HiArrowRight />}
          disabled={isLoading}
        >
          {isLoading ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
