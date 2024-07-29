import { LocalPromiseLongRunningPromises } from "./LocalPromiseLongRunningPromises";
import {HoistedLocalPromiseLongRunningPromises} from "./HoistedLocalPromiseLongRunningPromises";

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
        {/*<LocalPromiseWithoutSuspense />*/}
        {/*<ContextWithUseHook />*/}
{/*
        <LocalPromiseLongRunningPromises />
*/}
        <HoistedLocalPromiseLongRunningPromises />
      </div>
    </div>
  );
};
