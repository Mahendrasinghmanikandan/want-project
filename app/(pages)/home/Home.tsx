import { IMAGE_HELPER } from "@/app/helper/imageHelper";
import Hero from "./Hero";
import { Meteors } from "@/components/ui/meteors";
import LensImagesDisplay from "@/app/component/LensImagesDisplay";
import { BigHeading } from "@/app/component/Typography";
import { PrimaryButton, SecondaryButton } from "@/app/component/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";
import ContactForm from "@/app/component/ContactForm";

const SERVICES = [
  {
    title: "Architectural Planning",
    content:
      "Functional layouts designed for practical living and efficient space usage.",
  },
  {
    title: "Soil Investigation",
    content: "Soil testing to support safe foundation design.",
  },
  {
    title: "Structural Design",
    content:
      "Engineering-based structural planning focused on safety and durability.",
  },
  {
    title: "MEP Design Coordination",
    content:
      "Electrical, plumbing, and service planning to reduce site conflicts.",
  },
  {
    title: "Construction",
    content: "Structured execution with stage-wise monitoring and supervision.",
  },
  {
    title: "Renovation",
    content:
      "Upgrading and strengthening existing buildings through careful planning.",
  },
];

const WORKFLOW_STEPS = [
  "Architectural Planning",
  "Soil Investigation",
  "Structural Design",
  "MEP Coordination",
  "Estimation & Cost-Benefit Analysis",
  "Cost Overrun Protection",
  "Construction Execution",
  "Checklist Verification",
  "Final Handover",
];

const FAQ_ITEMS = [
  {
    question: "How We Control Cost Overruns",
    intro:
      "Cost overruns usually do not happen suddenly. They develop through missed details, rework, and repeated changes during construction. At Wano Projects, cost control begins before execution.",
    lead: "We reduce risk by:",
    bullets: [
      "Completing design stages before construction",
      "Coordinating structural and service layouts early",
      "Reducing avoidable changes",
      "Reviewing work stage by stage",
    ],
    outro: "This helps maintain better control over project cost and timeline.",
  },
  {
    question: "Checklist-Based Execution at Every Stage",
    intro:
      "Each stage of construction is verified using structured checklists.",
    lead: "These checklists help confirm:",
    bullets: [
      "Material quality",
      "Work accuracy",
      "Structural alignment",
      "Service coordination",
      "Stage completion correctness",
    ],
    outro:
      "Small issues identified early are corrected immediately, preventing larger problems later.",
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <Hero />
      <div className="w-full relative overflow-hidden h-[30vh] bg-primary-color flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white font-normal text-center leading-loose">
          Every project follows essential engineering <br /> stages without
          skipping critical process.
        </h1>
        <Meteors number={10} />
      </div>
      <section className="w-full min-h-[100vh] rounded-2xl flex gap-4">
        <div className="w-[70vw] flex flex-col gap-4 top-0 sticky">
          <div className="h-[40vh] w-full bg-secondary-color rounded-2xl flex items-left justify-center flex-col px-10">
            <BigHeading
              heading={
                <h1 className="leading-loose uppercase text-primary-color">
                  Our Philosophy
                </h1>
              }
            />
            <p className="leading-loose">
              Wano Projects believes that a building should be planned properly
              before it is built. Good construction is not only about
              appearance. It is about safety, usability, long-term performance,
              and disciplined execution.
              <br />
              We follow an engineering-first approach where design, structure,
              services, and execution are coordinated from the beginning. This
              helps reduce confusion, avoids unnecessary changes later, and
              creates better project control.
              <br />
              Our goal is simple: build in a way that is practical, technically
              sound, and responsible.
            </p>
          </div>
          <div className="h-[60vh] w-full bg-secondary-color rounded-2xl flex items-left justify-center flex-col px-10">
            <BigHeading
              heading={
                <h1 className="leading-loose uppercase text-primary-color">
                  What Makes Wano Projects Different
                </h1>
              }
            />
            <BigHeading
              heading={
                <h1 className="leading-loose text-2xl text-primary-color">
                  Our key strengths are:
                </h1>
              }
            />
            <ul className="leading-loose list-disc pl-4">
              <li>Complete workflow from planning to handover</li>
              <li>No skipped engineering stages</li>
              <li>Checklist-based execution at every stage</li>
              <li>
                Early coordination of architectural, structural, and service
                design
              </li>
              <li>Cost-overrun control through proper planning</li>
              <li>Practical local-market pricing</li>
              <li>Structured responsibility and warranty support </li>
            </ul>
            <p className="leading-loose pt-2">
              Many projects become costly because important steps are skipped in
              the beginning. We reduce that risk by planning carefully before
              execution starts.
            </p>
          </div>
        </div>
        <div className="w-[30vw] flex flex-col gap-4">
          <div className="h-[102vh] w-full rounded-2xl">
            <LensImagesDisplay
              img={IMAGE_HELPER.HOME_HERO_LEFT_IMAGE}
              height="102vh"
            />
          </div>
        </div>
      </section>
      <section className="w-full rounded-2xl px-10 py-10 bg-gradient-to-br from-primary-color via-primary-color to-[#1f2f40] text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-6">
          <TextAnimate
            as="h2"
            by="word"
            animation="blurInUp"
            className="text-4xl font-bold tracking-wide uppercase"
            once
          >
            Our Services
          </TextAnimate>
          <p className="leading-loose max-w-4xl text-white/90">
            Wano Projects provides integrated services covering planning,
            design, and construction stages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-5"
              >
                <p className="text-sm text-white/70">Service {index + 1}</p>
                <h3 className="text-xl font-semibold pt-1">{service.title}</h3>
                <p className="leading-loose text-white/85 pt-2">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Meteors number={12} />
      </section>
      <section className="w-full bg-secondary-color rounded-2xl px-10 py-10 flex flex-col gap-5">
        <h2 className="text-4xl font-bold leading-tight uppercase text-primary-color">
          Built with Responsibility and Warranty Support
        </h2>
        <p className="leading-loose text-primary-color">
          Wano Projects provides structured warranty support to ensure
          confidence and accountability after project completion.
        </p>
        <p className="leading-loose text-primary-color">
          Our warranty framework includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary-color/30 bg-white px-6 py-6">
            <h3 className="text-2xl text-primary-color font-semibold">
              Structural Warranty - 15 Years
            </h3>
            <p className="leading-loose text-primary-color pt-2">
              Structural components are designed and executed with long-term
              performance in mind. Structural warranty support reflects our
              commitment to engineering discipline and construction
              responsibility.
            </p>
          </div>
          <div className="rounded-xl border border-primary-color/30 bg-white px-6 py-6">
            <h3 className="text-2xl text-primary-color font-semibold">
              Workmanship Warranty - 1 Year
            </h3>
            <p className="leading-loose text-primary-color pt-2">
              Execution-related workmanship is supported for one year after
              project completion, covering issues related to construction
              quality and finishing performance.
            </p>
          </div>
        </div>
        <p className="leading-loose text-primary-color">
          This structured warranty system reflects our focus on delivering
          reliable buildings with long-term responsibility.
        </p>
      </section>

      <section className="w-full relative overflow-hidden bg-primary-color rounded-2xl px-10 py-10 flex flex-col gap-6">
        <TextAnimate
          as="h2"
          by="word"
          animation="slideUp"
          className="text-3xl md:text-4xl font-bold leading-loose text-white"
          once
        >
          Our Standard Workflow for Every Project
        </TextAnimate>
        <p className="leading-loose text-white">
          Every Wano Projects building follows a clear sequence:
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {WORKFLOW_STEPS.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-xl border border-white/20 !bg-primary-color px-4 py-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full !bg-primary-color text-secondary-color font-semibold">
                {index + 1}
              </span>
              <span className="text-white font-medium">{step}</span>
            </li>
          ))}
        </ol>
        <p className="leading-loose text-white">
          This system helps maintain clarity, reduce rework, and improve
          coordination between design and execution.
        </p>
        <Meteors number={12} />
      </section>
      <section className="w-full rounded-2xl px-6 py-10 md:px-10 bg-gradient-to-br from-[#f4efe9] to-white flex flex-col gap-4">
        <h2 className="text-4xl font-bold uppercase text-primary-color">FAQ</h2>
        <p className="text-primary-color/70 leading-loose">
          Click any question to expand and read details.
        </p>
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              className="group w-full rounded-xl border border-primary-color/20 bg-white px-6 py-5 open:border-primary-color/40 open:shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl md:text-2xl text-primary-color font-semibold leading-snug marker:content-none">
                {item.question}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-color/25 text-primary-color transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pt-4 text-primary-color">
                <p className="leading-loose">{item.intro}</p>
                <p className="leading-loose pt-2">{item.lead}</p>
                <ul className="leading-loose list-disc pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="leading-loose pt-2">{item.outro}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <section className="min-h-[50vh] relative overflow-hidden rounded-2xl px-6 py-10 md:px-10 bg-primary-color text-white flex flex-col justify-center gap-5">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
            Planning a New Home or Renovation Project?
          </h2>
          <p className="leading-loose text-white/90 max-w-4xl">
            If you are looking for a structured and disciplined building
            process, Wano Projects is ready to support your project from
            planning to completion.
          </p>
          <div className="flex items-center gap-4 flex-wrap pt-2">
            <PrimaryButton text="Contact Wano Projects" />
            <SecondaryButton text="Schedule a Consultation" />
          </div>
          <Meteors number={12} />
        </section>
        <div className="min-h-[50vh] bg-secondary-color rounded-2xl p-4 md:p-8 flex items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
