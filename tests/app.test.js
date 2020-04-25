const express = require('express')
const request = require('supertest')
const app = require('../src/app')
const apiRequest = require('../src/utils/apirequest.js')



test('Should return correct endpoint response', async () => {
  await request(app).get('/api').send({
    text: 'Some text for testing purposes of API work and so on so forth'
  }).expect(200);
})

