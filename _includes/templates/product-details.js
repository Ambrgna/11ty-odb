module.exports = (product) => {
  return `
    <!DOCTYPE html>
        <html>
            <head>
            <title>${product.title}</title>
            <link rel="stylesheet" href="/css/tailwind.css"/>
            </head>
            <body>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="w-3/5 h-auto lg:w-1/4 md:w-1/2 p-4 w-full">
                        <div class="max-w-lg max-h-50 rounded overflow-hidden shadow-lg">
                            <img
                            class="max-w-24 max-h-32"
                            src=${product.image}
                            alt=${product.title}
                            />
                            <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">${product.title}</div>
                            <p class="text-gray-700 text-base">
                                ${product.description}
                            </p>
                            <br />
                            <p class="text-gray-700 text-base font-bold">
                               $ ${product.price}
                            </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                            <button
                                class="inline-block bg-green-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-white"
                                > <a href="#"/>
                                Buy
                                </a>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section> 
            </body>
        </html>
    `;
};
