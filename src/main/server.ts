import "module-alias/register";
import { setupApp } from "./config/app";

function handler() {
  try {
    const app = setupApp();

    app.listen(3000, () =>
      console.log("Server running at http://localhost:3000")
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

handler();
