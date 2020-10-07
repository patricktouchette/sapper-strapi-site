import fetch from "node-fetch";

import api from "./_api.js";

export async function get(req, res) {
  const { slug } = req.params;

  const query = `/pages?slug=${slug}&published=true`;
  const result = await fetch(`${api}${query}`);
  const data = await result.json();

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
