const { Session } = require('@shopify/shopify-api');
const Cryptr = require('cryptr');
const SessionModel = require('../models/SessionModels.js');

const cryption = new Cryptr(process.env.ENCRYPTION_STRING);
const payload = require('payload');


const storeSession = async (session) => {

  console.log("Enter Inside It" , session)

  // const [result , created ] = await SessionModel.findOrCreate({
  //       where: { id: session.id },
  //       defaults: {
  //        content : cryption.encrypt(JSON.stringify(session)),
  //        shop : session.shop,
  //       }
  //     })

  const result = await payload.find({
    collection: 'session', // required
    where: { id: session.id }, // pass a `where` query here
  })

  if(result.length!=0){
    // Update Document
    await payload.update({
      collection: 'session',
      where: {
        id: { equals: session.id},
        limit : 1
      },
      data: {
        content : cryption.encrypt(JSON.stringify(session)),
        shop: session.shop
      }
    })
  }
  else{
    // Document Created
    await payload.create({
      collection: 'session', // required
      data: {
        content : cryption.encrypt(JSON.stringify(session)),
        shop : session.shop,
      },
    })
  }

      console.log("after created")

      // if(!created)
      // {
      //    await SessionModel.update(
      //     {
      //       content : cryption.encrypt(JSON.stringify(session)),
      //       shop: session.shop
      //     },
      //     {
      //       where : {id :  session.id},
      //       limit : 1
      //     },
          
      //    )
      // }
  
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

  // const sessionResult = await SessionModel.findOne({ where : {id :  id}} )
  // const sessionRes = await SessionModel.findAll({ where : {id :  id}} )
  
  const sessionResult = await payload.find({
    collection: 'session', // required
    where: {id:id}, // pass a `where` query here
  })

  console.log("sessionResult" , sessionResult)


  // console.log(sessionRes)

  if (sessionResult.docs.length === 0) {
    return undefined;
  }
  if (sessionResult.docs[0].content.length > 0) {
    const sessionObj = JSON.parse(cryption.decrypt(sessionResult.content));
    const returnSession = new Session(sessionObj);
    return returnSession;
  }
  return undefined;
};

const deleteSession = async (id) => {
  // await SessionModel.destroy({where : {id : id}})
  await payload.delete({
    collection: 'session',
    where: {
      id: { equals: id },
    },
  })

  return true;
};

const sessionHandler = { storeSession, loadSession, deleteSession };

module.exports =  sessionHandler;
