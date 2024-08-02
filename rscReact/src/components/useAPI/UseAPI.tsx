import { PromiseSentFromServer } from "./talkExamples/PromiseSentFromServer";

export const UseAPI = () => {
  return (
    <div>
      <h1>Use API with RSC running in Waku!</h1>
      <div className={"flex"}>
        <PromiseSentFromServer />
      </div>
    </div>
  );
};
