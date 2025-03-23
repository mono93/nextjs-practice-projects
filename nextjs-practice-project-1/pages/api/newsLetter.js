import { connectDatabase, insertDocument } from '../../helpers/db-utils';
import { validateEmail } from '../../utils/sharedFunctions';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email: userEmail } = req.body;
    if (!userEmail || !validateEmail(userEmail)) {
      res.status(400).send({ message: "Invalid input" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
