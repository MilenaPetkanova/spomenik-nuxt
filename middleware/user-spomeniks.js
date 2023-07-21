export default async function ({ store, app, redirect, route, params }) {
  console.log('in usp middleware');
  
  const spomeniks = await app.$spomeniksService.getAll();
  store.dispatch("spomeniks/initSpomeniks", spomeniks);

  const userSpomenik = store.state.spomeniks.spomeniks?.find(spomenik => spomenik.id == params.id)
  store.dispatch("spomeniks/setShownSpomenik", userSpomenik);

  // TODO: handle case when user has no permissions for this route
  // if(!userSpomenik) {
  //   redirect('')
  // }
} 