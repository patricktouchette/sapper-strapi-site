import fetch from "node-fetch";

import api from "../_api.js";

export async function get(req, res) {
  const { collection } = req.params;

  const query = `/${collection}`;
  const result = await fetch(`${api}${query}`);
  const data = await result.text();

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(data);
}
