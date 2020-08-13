
const { Bitbucket } = require('bitbucket')
require('dotenv/config')

const clientOptions = {
  baseUrl: 'https://api.bitbucket.org/2.0',
  request: {
    timeout: 3000,
  },
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  }
};
const bitbucket = new Bitbucket(clientOptions)

class BitbucketHandler {
  static async getAllProjectsInWorkspace(req, res) {
    const {workspace} = req.params
    // const { data, headers } = await bitbucket.workspaces.getProjects({ workspace, page, pagelen, q, sort, fields })

    try {
      const { data, headers } = await bitbucket.workspaces.getProjects({ workspace })

      res.json({data})
    } catch (err) {
      const { message, error, headers, request, status } = err

      console.log(message)
    }
  }
}

const {getAllProjectsInWorkspace} = BitbucketHandler

module.exports = getAllProjectsInWorkspace