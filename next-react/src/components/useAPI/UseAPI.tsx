import { PromiseSentFromServer } from "./PromiseSentFromServer";

export const UseAPI = () => {
  return (
    <div>
      <h1>Use API with RSC running in Nextjs!</h1>
      <div className={"flex"}>
        <PromiseSentFromServer />
      </div>
    </div>
  );
};
