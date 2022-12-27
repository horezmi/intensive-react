// import { put } from "redux-saga/effects";
// import { signUpSaga } from "./store/saga";
// import { initApp, initAppLoading } from "./store/slice";

// describe("RegistrationPage", () => {
//   describe("Store", () => {
//     describe("Saga", () => {
//       it("init app saga", () => {
//         const iter = signUpSaga();

//         const step1 = iter.next();
//         expect(step1.done).toBe(false);
//         expect(step1.value).toEqual(put(initAppLoading(true)));

//         const step2 = iter.next();
//         expect(step2.done).toBe(false);
//         expect(step2.value).toEqual(put(initApp({ name: "Peter" })));

//         const step3 = iter.next();
//         expect(step3.done).toBe(false);
//         expect(step3.value).toEqual(put(initAppLoading(false)));

//         const step4 = iter.next();
//         expect(step4.done).toBe(true);
//       });
//     });
//   });
// });

export {};
