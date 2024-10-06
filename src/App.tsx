import cs from "./App.module.scss";
import { UserModel } from "./consts/models/UserModel.ts";

const FAKE_USERS: UserModel[] = [];

function App() {
  return <div className={cs.appContainer}>App</div>;
}

export default App;
