import { LocalPromise } from "./LocalPromise";
import { FetchedPromise } from "./FetchedPromise";
import { LocalPromiseConditional } from "./LocalPromiseConditional";
import { LocalPromiseUnHoisted } from "./LocalPromiseUnhoisted";
import { LocalPromiseModeSwitch } from "./LocalPromiseModeSwitch";
import { ContextWithUseHook } from "./ContextWithUseHook";
import { PromiseSentFromServer } from "./PromiseSentFromServer";

export const UseHook = () => {
  return (
    <div>
      <h1>Use Hook!</h1>
      <div className={"flex"}>
        <LocalPromise />
        <FetchedPromise />
        <LocalPromiseConditional toggle={true} />
        <LocalPromiseUnHoisted />
        <LocalPromiseModeSwitch />
        {/*<LocalPromiseWithoutSuspense />*/}
        <ContextWithUseHook />
        <PromiseSentFromServer />
      </div>
    </div>
  );
};
