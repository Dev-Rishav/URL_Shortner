const fs=require("fs")

async function createLog(req, res, next) {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} ${req.ip} ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
}

module.exports={createLog};
