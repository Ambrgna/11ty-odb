const pageTemplate = require("../../_includes/templates/product");
const fetch = require("node-fetch");

// const { builder } = require("@netlify/functions");

const handler = async (event) => {
  const id = event.path.split("product/")[1];

  console.log(id);

  const result = await fetch(`${process.env.PRODUCTS_DATA}/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(result),
  };
};

exports.handler = builder(handler);
