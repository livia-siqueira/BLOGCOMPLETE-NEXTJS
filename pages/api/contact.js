import {MongoClient} from 'mongodb'

async function handler(req, res){
    if(req.method === 'POST'){
        const {email, name, message} = req.body;

        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
            res.status(422).json({message: 'Invalid input'})
            return;
        }

        let client;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ajdkw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        const newMessageObject = {
            email: email,
            name: name,
            message: message
        }

        try {
         client = await MongoClient.connect(connectionString)
        }catch(error){
            res.status(500).json({message: 'error'})
            return;
        }


        const db = client.db();
        try {
        const result = await db.collection("messages").insertOne(newMessageObject)
        newMessageObject.id = result.insertedId;
        }catch(error) {
            client.close();
            res.status(500).json({message: 'error'})
            return;
        }
        client.close();
        res.status(201).json({message: 'Success'})
    }
}

export default handler;