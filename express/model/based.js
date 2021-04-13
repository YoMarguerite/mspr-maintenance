const { clientBased } = require('../database');

module.exports = {
    getEclairage : function(date) {
        return clientBased.connect().then(async () => {
            const res = await clientBased.query('SELECT *' +
            'FROM public.Arrondissement;')
            console.log(res.rows);
            clientBased.end();
            return res.rows;
        })
        .catch(err => {console.log(err)});
        
    }
}