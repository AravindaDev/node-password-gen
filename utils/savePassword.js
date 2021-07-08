import fs from 'fs'
import path from 'path'
import os from 'os'
import chalk from 'chalk'

const savePassword = (password) => {
    let __dirname = path.resolve()
    console.log(__dirname, process.cwd())
    fs.open(path.join(__dirname,  "passwords.txt"), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to passwords.txt'))
            })
        })
    })
}

export default savePassword;