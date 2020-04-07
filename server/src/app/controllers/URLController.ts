import URL from '@models/URL'
import Click from '@models/Click'
import Algolia from '@services/AlgoliaService'
import { verifyURL } from '@utils/index'
import { Request, Response } from 'express'

class URLController {
  public async findURL (req: Request, res: Response): Promise<Response<string>> {
    const { short } = req.params
    try {
      const url = await URL.findOne({ short })
      const click = await Click.create({})
      await url.set({ clicks: [...url.clicks, click] })
      await url.save()
      return res.json({ url: url.full })
    } catch (err) {
      return res.status(404).send({ error: true, message: 'Sorry, this URL not working.' })
    }
  }

  public async topFive (req: Request, res: Response): Promise<Response<string>> {
    try {
      const urls = await URL
        .find().populate('clicks')
        .sort('-clicks')
        .limit(5)

      return res.json({ urls })
    } catch (err) {
      return res.status(404).send({ error: true, message: 'Sorry, happen a error when try get the URLs.' })
    }
  }

  public async create (req: Request, res: Response): Promise<Response<string>> {
    const { full } = req.body
    try {
      if (!await verifyURL(full)) return res.status(405).send({ error: true, message: 'Sorry, this URL not working. Try again using another URL' })

      const { short: url } = await URL.create({ ...req.body })

      Algolia.pushData(await URL.find().populate('clicks'))

      return res.json({ url })
    } catch (err) {
      return res.status(404).send({ error: true, message: 'Sorry, happen a error when try create a new URLs.' })
    }
  }
}

export default new URLController()
