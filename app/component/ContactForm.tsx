const ContactForm = () => {
  return (
    <section className="w-full rounded-3xl border border-primary-color/15 bg-white/90 p-6 shadow-md backdrop-blur-sm md:p-8">
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold text-primary-color md:text-3xl">
          Contact Us
        </h2>
        <p className="text-sm text-primary-color/70">
          Please fill out the form below and we will get back to you soon.
        </p>
      </div>

      <form className="flex w-full flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          Name
          <input
            type="text"
            placeholder="John Doe"
            className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          Email
          <input
            type="email"
            placeholder="john@example.com"
            className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          Phone
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          Message
          <textarea
            placeholder="Tell us a bit about your project..."
            className="min-h-32 resize-y rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 py-3 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-xl border-2 border-primary-color bg-primary-color px-5 text-sm font-semibold text-secondary-color transition-colors duration-300 hover:bg-secondary-color hover:text-primary-color"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
