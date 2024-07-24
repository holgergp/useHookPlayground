import { LocalPromise } from "./LocalPromise.jsx";
import { FetchedPromise } from "./FetchedPromise.jsx";
import { LocalPromiseConditional } from "./LocalPromiseConditional.jsx";
import { LocalPromiseUnHoisted } from "./LocalPromiseUnhoisted.jsx";
import { ContextWithUseHook } from "./ContextWithUseHook.jsx";

export const UseHook = () => {
  return (
    <div>
      <p>Use Hook!</p>
      <div className={"flex"}>
        <LocalPromise />
        <FetchedPromise />
        <LocalPromiseConditional toggle={true} />
        <LocalPromiseUnHoisted />
        <ContextWithUseHook />
      </div>
    </div>
  );
};
