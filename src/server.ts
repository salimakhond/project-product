import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  await mongoose.connect(config.database_url as string);

  try {
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
