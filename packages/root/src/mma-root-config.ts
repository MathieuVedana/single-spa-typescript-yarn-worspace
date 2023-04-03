import { registerApplication, start, LifeCycles } from "single-spa";


registerApplication({
  name: "@mma/app1",
  app: () => System.import<LifeCycles>("@mma/app1"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
