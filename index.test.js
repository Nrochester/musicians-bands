const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band1 = await Band.create({ name: 'Marshall', genre:"rap"});
        expect(band1.name).toBe('Marshall');
        expect(band1.instrument).toBe('rap');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician1 = await Musician.create({ name: 'Will', instrument: 'flute' });
    
        expect(musician1.name).toBe('Will');
        expect(musician1.instrument).toBe('flute')
    })
    })
