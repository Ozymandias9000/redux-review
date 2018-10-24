import React from "react";
import { render } from "react-dom";
import App from "./App";

import store from "./store/store";
import { addArticle } from "./actions/actionCreators";

render(<App />, document.querySelector("#app"));
