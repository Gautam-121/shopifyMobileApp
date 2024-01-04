const { Router } = require('express');
const clientProvider = require('../../utils/clientProvider.js');
const proxyRouter = Router();

proxyRouter.get("/json", async (req, res) => {
  const { client } = await clientProvider.offline.graphqlClient({
    shop: res.locals.user_shop,
  });
  return res.status(200).send({ content: "Proxy Be Working" });
});

module.exports =  proxyRouter;
