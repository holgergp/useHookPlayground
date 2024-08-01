import { UseHookGenerator } from "./talkExamples/UseHookGenerator";
import {UseHookLoop} from "./talkExamples/UseHookLoop";
import {NonInterleavedCachedPromise} from "./talkExamples/NonInterleavedCachedPromise";
import {UseHookErrorBoundary} from "./talkExamples/UseHookErrorBoundary";
import {UseHookRejectedButAlternative} from "./talkExamples/UseHookRejectedButAlterative";

export const UseHook = () => {
  return (
    <div>
      <h1>Use Hook!</h1>
      <div className={"flex"}>
        <UseHookRejectedButAlternative />
      </div>
    </div>
  );
};
