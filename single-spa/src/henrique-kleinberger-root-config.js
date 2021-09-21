import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname === '/' ,
});

registerApplication({
  name: "@henrique-kleinberger/react-single",
  app: () =>
    System.import("@henrique-kleinberger/react-single" ),
    activeWhen: location => location.pathname === '/react-single'
});

registerApplication({
  name: "@henrique-kleinberger/react-router",
  app: () =>
    System.import("@henrique-kleinberger/react-router" ),
  activeWhen: ["/react-router"],
});

// registerApplication({
//   name: "@henrique-kleinberger/navbar",
//   app: () => System.import("@henrique-kleinberger/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
