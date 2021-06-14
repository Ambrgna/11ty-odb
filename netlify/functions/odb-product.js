const pageTemplate = require("../../_includes/templates/product");
const fetch = require("node-fetch");

const { builder } = require("@netlify/functions");

const handler = async (event) => {
  // console.log(event);
  const id = event.path.split("id/")[1];

  const result = await fetch(`${process.env.PRODUCTS_DATA}/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(result),
  };
};

exports.handler = builder(handler);
