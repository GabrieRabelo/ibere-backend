const express = require('express');
const router = express.Router();
const institutionService = require('../../business/instituicao/instituicaoService');


/**
 * @swagger
 *
 * definitions:
 *  Institution:
 *   type: object
 *   properties:
 *    descricao:
 *     type: string
 *    endereco:
 *     type: string
 *    latitude:
 *     type: number
 *     format: float
 *    longitude:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    observacoes:
 *     type: string
 *    telefone:
 *     type: string
 *    tempoVisita:
 *     type: integer
 */

/**
 * @swagger
 * tags:
 *   - name: instituicao
 *     description: Tudo sobre Instituicoes
 */

/**
 * @swagger
 *
 * /api/v1/instituicao:
 *   post:
 *    tags: [instituicao]
 *    description: Add Application Institution
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Institution'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Institution'
 *
 */
router.post('/', async function (req, res) {
  const institution = await institutionService.salvarInstituicao(req.body);
  res.status(201);
  res.json(institution);
});

/**
 * @swagger
 *
 * /api/v1/instituicao:
 *   get:
 *     tags: [instituicao]
 *     description: Get Application Institutions
 *     responses:
 *       200:
 *         description: Application Institutions
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Institution'
 *
 */
router.get('/', async (req, res) => {
  const instituicao = await institutionService.buscarInstituicoes();
  res.json(instituicao);
});

module.exports = router;