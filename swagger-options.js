const options = {
    definition: {
      openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
      info: {
        title: 'Mapas Culturais', // Title (required)
        version: '1.0.0', // Version (required)
      },
    },
    // Path to the API docs
    apis: ['./src/api/*Rest.js'],
};

module.exports = options;