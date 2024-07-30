import { HoistedLocalPromiseLongRunningPromises } from "./HoistedLocalPromiseLongRunningPromises";
import { LocalPromiseLongRunningPromisesWithSideEffects } from "./LocalPromiseLongRunningPromisesWithSideEffects";
import {PromiseSentFromServer} from "./PromiseSentFromServer";

export const UseHook = () => {
  return (
    <div>
      <h1>Use Hook!</h1>
      <div className={"flex"}>
        {/*<LocalPromise />*/}
        {/*<FetchedPromise />*/}
        {/*<LocalPromiseConditional toggle={true} />*/}
        {/*<LocalPromiseUnHoisted />*/}
        {/*<LocalPromiseModeSwitch />*/}
        {/*/!*<LocalPromiseWithoutSuspense />*!/*/}
        {/*<ContextWithUseHook />*/}
        <PromiseSentFromServer />
        {/*<LocalPromiseLongRunningPromises />*/}
        {/*<HoistedLocalPromiseLongRunningPromises />*/}
        {/*<LocalPromiseLongRunningPromisesWithSideEffects />*/}
      </div>
    </div>
  );
};
