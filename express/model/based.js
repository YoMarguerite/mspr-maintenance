const { clientBased } = require('../database');

module.exports = {
    getEclairage : function(date) {
        let formatDate = date.slice(0,2) + '-' + date.slice(2,4) + '-' + date.slice(4,8);
        console.log(formatDate);
        return clientBased.connect().then(async () => {
            const res = await clientBased.query(
                "SELECT * FROM public.lampadaire l join public.horaire h on l.arrondissement = h.arrondissement where h.date = $1", [formatDate]);
            console.log(res.rows);
            clientBased.end();
            return res.rows;
        })
        .catch(err => {console.log(err)});
        
    }
}