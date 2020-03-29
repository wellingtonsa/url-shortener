/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'
import { verifyURL } from '@utils/index'

describe('URL', () => {
    it('Should list topFive URL', async () => {
  
      const response = await request(app)
        .get('/url')
  
      expect(response.status).toBe(200)
    })
  
    it('Should find the URL that contains short=4utbKSzpU', async () => {
      const short = '4utbKSzpU'
      const response = await request(app)
        .get(`/url/${short}`)
  
      expect(response.status).toBe(200)
    })
  
    it('Should create a new URL', async () => {
 
      const URL = {
        full: "https://www.facebook.com/"
      }
  
      const response = await request(app)
        .post('/url')
        .send({
          ...URL
        })
  
      expect(response.status).toBe(200)
    })
  })