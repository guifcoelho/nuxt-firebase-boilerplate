function isLogin(store){
  return store.state.auth.user !== null;
}

function isAdminRoute(route) {
  return route.name.split('-')[0] === 'admin';
}

export default function({ store, redirect, route }) {
    if(isLogin(store) && route.name === 'login'){
      return redirect('/admin');
    }
    if(!isLogin(store) && isAdminRoute(route)){
      return redirect('/login');
    }
}
