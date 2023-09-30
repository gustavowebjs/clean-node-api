import express, { Express } from "express";
import setupRoutes from "@/main/config/routes";
import setupMiddlewares from "@/main/config/middlewares";

export const setupApp = (): Express => {
  const app = express();
  setupRoutes(app);
  setupMiddlewares(app);
  return app;
};
