const { clientSedatif } = require('../database');

module.exports = {
    getTravaux : async function() {
        const res = await clientSedatif.query(
            "select * from espace e join tache ta on e.id=ta.espace where ta.etat=0");
        return res.rows;
    },
    getOuvert : async function() {
        const res = await clientSedatif.query(
            "select * from espace e join tache ta on e.id=ta.espace where ta.etat=1");
        return res.rows;
    }
}