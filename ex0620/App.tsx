import FormInput from "./formInput/FormInput";
import PillButton from "./formInput/PillButton";
import { MESSAGE } from "./formInput/message";

function App() {
  const FormInputComponents = [
    {
      InputProps: { placeholoder: MESSAGE.ID },
      Component: PillButton,
      ComponentProps: { content: "중복확인" },
    },
    {
      InputProps: { placeholoder: MESSAGE.PW },
    },
    {
      InputProps: { placeholoder: MESSAGE.PWCHECK },
    },
  ];

  return (
    <div className="App">
      {FormInputComponents.map((v) => (
        <FormInput {...v} />
      ))}
    </div>
  );
}

export default App;
