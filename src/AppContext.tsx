import * as React from "react";

import { Database, Site, Profile, Data } from "./interfaces/database";

const AppContext = React.createContext<Database>({
  site: {} as Site,
  profile: {} as Profile,
  data: {} as Data
});

export default AppContext;
