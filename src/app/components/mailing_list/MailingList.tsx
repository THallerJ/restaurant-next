import MailWrapper from "./hocs/MailWrapper";

const MailingList = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-second">
      <MailWrapper
        submitted={<ThankYou />}
        label={<Label />}
        input={<Input />}
      />
    </div>
  );
};

export default MailingList;

const ThankYou = () => (
  <p className="text-center font-bold">
    Thank you for signing up for our newsletter!
  </p>
);

const Label = () => (
  <label htmlFor="mailingListEmail" className="heading mb-2 block text-center">
    Sign up for our newsletter
  </label>
);

const Input = () => (
  <input
    required
    type="email"
    id="mailingListEmail"
    name="mailingListEmail"
    className="input mb-2 w-full xsm:w-80"
    placeholder="Email Address"
  />
);
