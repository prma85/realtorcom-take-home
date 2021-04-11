import * as React from "react";

import { Database } from "./interfaces/database";

const AppContext = React.createContext<Database>({
  site: {},
  profile: {},
  data: {} 
} as Database);

export default AppContext;
