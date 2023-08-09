import MailWrapper from "./wrappers/MailWrapper";

const MailingList = () => {
  const thankYou = (
    <p className="text-center font-bold">
      Thank you for signing up for our newsletter!
    </p>
  );

  const label = (
    <label
      htmlFor="mailingListEmail"
      className="heading mb-2 block text-center"
    >
      Sign up for our newsletter
    </label>
  );

  const input = (
    <input
      required
      type="email"
      id="mailingListEmail"
      name="mailingListEmail"
      className="m-3 h-[3rem] w-[19rem] appearance-none rounded-lg border border-dark
        bg-offwhite px-3 py-8 shadow-md outline-2 outline-dark focus:outline"
      placeholder="Email Address"
    />
  );

  return <MailWrapper submitted={thankYou} label={label} input={input} />;
};

export default MailingList;
