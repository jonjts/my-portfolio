import PrimaryButton from "../PrimaryButton";

export const PresentationSection = () => (
  <section className="flex flex-col gap-16 items-center">
    <h2 className="text-white">Hi, I&apos;m Jonas</h2>
    <p className="text-grey-300 text-2xl">
      I’m a <strong className="text-white">frontend software engineer</strong>{" "}
      with <strong className="text-white">nearly 10 years</strong> of experience
      bringing ideas to life through functional and intuitive interfaces.
    </p>
    <PrimaryButton className="self-start">Look at my CV</PrimaryButton>
  </section>
);
