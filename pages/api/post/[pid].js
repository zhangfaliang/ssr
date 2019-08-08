import Cors from "micro-cors";

const cors = Cors({
  allowedMethods: ["GET", "HEAD"]
});

function Endpoint(req, res) {
  const {
    query: { pid }
  } = req;

  res.status(200).json({
    message: "Hello Everyone!",
    pid,
    cookies: req.cookies,
    query: req.query,
    body: req.body
  });
  //   res.end(
  //     `Post: ${pid} ${JSON.stringify(req.cookies)} ${JSON.stringify(
  //       req.query
  //     )}  ${JSON.stringify(req.body)}`
  //   );
}

export default cors(Endpoint);
