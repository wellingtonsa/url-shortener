import fs from 'fs'
import { Application } from 'express'
import { resolve } from 'path'

module.exports = (app:Application) => {
  fs
    .readdirSync(__dirname)
    .filter((file:string) => ((file.indexOf('.')) !== 0 && (file !== 'index.ts')))
    .forEach((file:string) => require(resolve(__dirname, file))(app))
}
