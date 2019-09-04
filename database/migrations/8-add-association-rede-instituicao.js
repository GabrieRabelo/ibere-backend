module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("Redes", "InstituicaoID", {
            type: Sequelize.INTEGER,
            references: {
                model: "Instituicao",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn("Redes", "InstituicaoID");
    }
};
