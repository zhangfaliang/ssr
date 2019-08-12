import cookies from '../../utils/cookes'

const handler = (req, res) => {
  res.cookie('Next.js', 'api-middleware!')
  res.end('Hello Next.js middleware!')
}

export default cookies(handler)