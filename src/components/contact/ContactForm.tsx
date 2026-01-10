import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "./schema/contactFormSchema";
import ContactFormFields from "./ContactFormFields";
import { sendContactEmail } from "./utils/emailService";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      await sendContactEmail(data);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-morphism p-6 rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormFields />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/80 text-white font-medium py-3"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
