
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormValues } from "./schema/contactFormSchema";

const ContactFormFields = () => {
  const form = useFormContext<ContactFormValues>();

  return (
    <>
      {/* Honeypot field - hidden from normal users */}
      <div className="absolute opacity-0 pointer-events-none">
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} tabIndex={-1} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Your name" 
                {...field} 
                className="bg-white/10 border-white/20 text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Email</FormLabel>
            <FormControl>
              <Input 
                placeholder="your.email@example.com" 
                type="email" 
                {...field} 
                className="bg-white/10 border-white/20 text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Subject</FormLabel>
            <FormControl>
              <Input 
                placeholder="What is this regarding?" 
                {...field} 
                className="bg-white/10 border-white/20 text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Message</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Write your message here..." 
                {...field} 
                className="bg-white/10 border-white/20 text-white min-h-[150px] resize-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ContactFormFields;
