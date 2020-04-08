/* eslint-disable @typescript-eslint/no-explicit-any */
import algoliasearch, { SearchIndex } from 'algoliasearch'
import { URL } from '@models/URL'
import { Click } from '@models/Click'
import _ from 'lodash'
class AlgoliaService {
    private algolia:SearchIndex;

    constructor () {
      const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_SECRET_KEY)
      this.algolia = client.initIndex('urlshortener')
    }

    public async pushData (data:Array<URL>):Promise<any> {
      const result = await this.chuck(data, 1000)
      result.forEach((d:any) => this.algolia.saveObjects(d))
    }

    private async chuck (data: Array<URL>, size: number): Promise<any[][]> {
      const result = await data.map((d:URL) => {
        const { full, short, clicks: click, totalClicks, _id } = d.toJSON()

        const clicks = click.map((c:Click) => ({ createdAt: c.createdAt.getTime() }))

        return ({ full, short, clicks: clicks, totalClicks, objectID: _id })
      })

      return await _.chunk(result, size)
    }
}

export default new AlgoliaService()
