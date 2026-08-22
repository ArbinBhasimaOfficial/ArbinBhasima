import type { Router } from "express";

export function createPostRouter(router: Router) {
  router.get("/post", (req, res) => {
    res.send("Post index  Routes");
  });
  router.get("/post/get", (req, res) => {
    res.send("Post get");
  });
  return router;
}
