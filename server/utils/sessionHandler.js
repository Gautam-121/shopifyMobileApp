const { Session } = require('@shopify/shopify-api');
const Cryptr = require('cryptr');
const SessionModel = require('../models/SessionModels.js');

const cryption = new Cryptr(process.env.ENCRYPTION_STRING);
const payload = require('payload');


const storeSession = async (session) => {

  console.log("Enter Inside It" , session.id)

  // const [result , created ] = await SessionModel.findOrCreate({
  //       where: { id: session.id },
  //       defaults: {
  //        content : cryption.encrypt(JSON.stringify(session)),
  //        shop : session.shop,
  //       }
  //     })

  const result = await payload.find({
    collection: 'session', // required
    where: {
      id: { equals: session.id},
    }
    
  })

  console.log("1st Payload Entry" , result)

  if(result.docs?.length!=0){
    // Update Document
    const data = await payload.update({
      collection: 'session',
      where: {
        id: { equals: session.id},
      },
      data: {
        content : cryption.encrypt(JSON.stringify(session)),
        shop: session.shop
      }
    })

    console.log("After 1st Entry Payload Update" , data)
  }
  else{
    // Document Created
    const data = await payload.create({
      collection: 'session', // required
      data: {
        id: session.id,
        content : cryption.encrypt(JSON.stringify(session)),
        shop : session.shop,
      },
    })

    console.log("After 1st payload entry Create" , data)
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
    where: {
      id: { equals: id},
    }
  })

  console.log("sessionResult" , sessionResult)


  // console.log(sessionRes)

  if (sessionResult.docs.length === 0) {
    return undefined;
  }
  console.log(sessionResult.docs[0].content.length)
  if (sessionResult.docs[0].content.length > 0) {
    const sessionObj = JSON.parse(cryption.decrypt(sessionResult.docs[0].content));
    const returnSession = new Session(sessionObj);
    return returnSession;
  }
  return undefined;
};

const deleteSession = async (id) => {
  // await SessionModel.destroy({where : {id : id}})
  const data = await payload.delete({
    collection: 'session',
    where: {
      id: { equals: id },
    },
  })

  console.log("Deleting a session" , data)

  return true;
};

const sessionHandler = { storeSession, loadSession, deleteSession };

module.exports =  sessionHandler;
