process.stdout.write('prompt > ')

const commands = require("./commands")

process.stdin.on('data', function (data) {
  let cmd = data.toString().trim().split(" ")
  let commandName = cmd[0]
  let arg = cmd.slice(1)
  let argStr = arg.join(" ")
  commands[commandName](argStr)
});