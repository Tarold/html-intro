const http = require('http');
const app = require('./app');
const { sequelize, Processor, phone: Phones } = require('./models');
const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);

// sequelize.sync({ force: true });

// (async () => {
//   const b = await Phones.create({
//     model: 'Test',
//     brand: 'Test',
//     year: '2022',
//     ram: '12 gb',
//     processorId: 1,
//     screenSize: '1920x1080',
//     isNfc: 'false',
//   });

//   const a = await Processor.create({
//     id: 1,
//     processorId: 1,
//     family: 'a',
//     socket: 'b',
//     cores: 2,
//     threads: 4,
//   });
// })();
