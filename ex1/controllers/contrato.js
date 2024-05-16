const Contrato = require('../models/contrato');

module.exports.list = async () => {
    return Contrato
        .find()
        .exec();
}

module.exports.findById = async id => {
    return Contrato
        .findOne({ _id: id })
        .exec();
}

module.exports.findByEntidade = async entidade => {
    return Contrato
        .find({ NIPC_entidade_comunicante: entidade })
        .exec();
}

module.exports.findByTipo = async tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.entidades = async () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.tipos = async () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.inserir = async contrato => {
    if((Contrato.find({_id : contrato._id}).exec()).length != 1){
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}

module.exports.remove = async id => {
    Contrato
        .find({_id : id})
        .deleteOne()
        .exec()
}

module.exports.update = async (id, contrato) => {
    return Contrato
        .updateOne({_id : id}, contrato)
        .exec()
}