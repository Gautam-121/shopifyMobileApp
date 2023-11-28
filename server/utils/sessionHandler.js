const { Session } = require('@shopify/shopify-api');
const Cryptr = require('cryptr');
const SessionModel = require('../models/SessionModels.js');

const cryption = new Cryptr(process.env.ENCRYPTION_STRING);

const storeSession = async (session) => {

  console.log("Enter Inside It" , session)

  const [result , created ] = await SessionModel.findOrCreate({
        where: { id: session.id },
        defaults: {
         content : cryption.encrypt(JSON.stringify(session)),
         shop : session.shop,
        }
      })

      console.log("after created")

      if(!created)
      {
         await SessionModel.update(
          {
            content : cryption.encrypt(JSON.stringify(session)),
            shop: session.shop
          },
          {
            where : {id :  session.id},
            limit : 1
          },
          
         )
      }
  
      console.log("All Done")

  // await SessionModel.findOneAndUpdate(
  //   { id: session.id },
  //   {
  //     content: cryption.encrypt(JSON.stringify(session)),
  //     shop: session.shop,
  //   },
  //   { upsert: true }
  // );

  return true;
};

const loadSession = async (id) => {

  const sessionResult = await SessionModel.findOne({ where : {id :  id}} )
  const sessionRes = await SessionModel.findAll({ where : {id :  id}} )

  console.log(sessionRes)

  if (sessionResult === null) {
    return undefined;
  }
  if (sessionResult.content.length > 0) {
    const sessionObj = JSON.parse(cryption.decrypt(sessionResult.content));
    const returnSession = new Session(sessionObj);
    return returnSession;
  }
  return undefined;
};

const deleteSession = async (id) => {
  await SessionModel.destroy({where : {id : id}})
  return true;
};

const sessionHandler = { storeSession, loadSession, deleteSession };

module.exports =  sessionHandler;
