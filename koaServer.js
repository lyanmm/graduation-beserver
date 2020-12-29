const Koa = require('koa')
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')


const router = koaRouter();
const app = new Koa();

router.get('/login',async (ctx)=>{
  ctx.response.body = '123'
})


router.post('/signin', async (ctx, next) => {
  var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);