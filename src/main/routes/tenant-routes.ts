import { Router } from "express";

export default (router: Router) => {
  router.get("/", (req, res) => {
    res.send("Tenants routes");
  });
};
