import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const port = process.env.SERVER_PORT || 3001;
    app.listen(port, () => console.log(`Server running port ${port}`));
  })
  .catch((error) => {
    console.error("Error duranting initialization", error);
  });
