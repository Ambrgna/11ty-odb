const pageTemplate = require("../../_includes/templates/product-list");
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const result = await fetch(process.env.PRODUCTS_DATA, {
    method: "GET",
  }).then((res) => res.json());

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(result),
  };
};
