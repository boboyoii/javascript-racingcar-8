import GameManager from "./controller/GameManager.js";
import GameService from "./service/GameService.js";
import GameView from "./view/GameView.js";

class App {
  async run() {
    const view = new GameView();
    const service = new GameService();
    const gameManager = new GameManager(view, service);
    await gameManager.start();
  }
}

export default App;
