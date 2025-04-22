
import React, { useState } from "react";

const INITIAL = { name: "", email: "", message: "" };

const ContactSection: React.FC = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm(INITIAL);
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white/90 p-8 rounded-lg shadow">
      <div className="mb-4">
        <label className="block font-semibold mb-2">Name</label>
        <input
          className="w-full border rounded px-3 py-2"
          name="name"
          required
          value={form.name}
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email</label>
        <input
          className="w-full border rounded px-3 py-2"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Message</label>
        <textarea
          className="w-full border rounded px-3 py-2"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-8 py-2 rounded-full font-bold disabled:opacity-50"
        disabled={submitted}
      >
        {submitted ? "Thank you!" : "Submit"}
      </button>
    </form>
  );
};

export default ContactSection;
