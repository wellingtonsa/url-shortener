import { verifyURL } from '@utils/index'

describe('URL', () => {
    it('Should verify if URL is valid', async () => {
      const validURL = 'https://www.google.com.br'
      const valid = await verifyURL(validURL)
  
      expect(valid).toBe(true)
    })

    it('Should verify if URL is invalid', async () => {
        const validURL = 'https://www.meusitequenaofunciona.com.br'
        const valid = await verifyURL(validURL)
    
        expect(valid).toBe(false)
      })
    
  
  })