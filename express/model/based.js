const { clientBased } = require('../database');

module.exports = {
    getEclairage : async function(date) {
        let formatDate = date.slice(0,2) + '-' + date.slice(2,4) + '-' + date.slice(4,8);

        const res = await clientBased.query(
            "SELECT * FROM public.lampadaire l join public.horaire h on l.arrondissement = h.arrondissement where h.date = $1", [formatDate]);
        return res.rows;
    }
}