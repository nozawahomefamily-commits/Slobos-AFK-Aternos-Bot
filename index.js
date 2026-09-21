const mineflayer = require('mineflayer')
const bedrock = require('mineflayer-bedrock')

const bot = mineflayer.createBot({
  host: 'nozawahomefamily.aternos.me', 
  port: 50265,                        // 💡 あなたの統合版ポート番号
  username: 'nozawabot',              // 💡 ボットのゲーム内の名前（好きな名前に変えてOK）
  auth: 'microsoft',                  // 💡 これでマイクロソフトの8桁コードを作ります
  offline: false
})

bedrock(bot)

// 👇 ここで画面に8桁のコードを大きく表示します！
bot.on('auth_code', (code) => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('★ マイクラ統合版のアクセス許可コードを発行したよ！ ★')
  console.log('【 8桁のコード 】👉 ' + code.user_code)
  console.log('👉 入力するページ: ' + code.verification_uri)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
})

bot.on('login', () => {
  console.log('【成功】ボットが統合版サーバーにログインしました！')
})

bot.on('error', (err) => {
  console.log('エラーが起きたよ。パッケージが足りないかも:', err.message)
})

            
