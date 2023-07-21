import { Routes } from "~/constants/constants"

export default function ({ store, redirect }) {
  console.log('in landing middleware');
  // TODO: check redirects?
  if(store.state.auth.loggedIn) {
    return redirect(Routes.Spomeniks)
  } else {
    return redirect(Routes.Landing)
  }
}