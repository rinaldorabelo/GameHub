import './Cadastro.css'

export default function Cad_User() {

  return (
    <div className="Login_Box">
      <div>
        <img src="src/assets/img_barnav/image.png" alt="" />
      </div>
      <div>
        <form>
          <div className='Text_Log'>
            <span>Cadastro</span>
            <p>Crie uma conta gratuita com seu e-mail.</p>
          </div>

          <div className='Inputs'>
            <input type='text' placeholder='Informe Seu Nome Completo' />
          </div>         
          <div className='Inputs'>
            <input type='text' placeholder='Digite Nome de Usuário' />
          </div>
          <div className='Inputs'>
            <input type='email' placeholder='Digite Seu E-mail' />
          </div>
          <div className='Inputs'>
            <input type='password' placeholder='Informe Sua Senha ' />
          </div>
          <div className='Inputs'>
            <input type='password' placeholder='Confirme Sua Senha' />
          </div>
          <button className='Botao_Log'>Inscreva-se</button>
          <div className='Login_Dir'>
            <p>Já é Inscrito ? <a href="/Login">Entrar</a></p>
          </div>

        </form>
      </div>

    </div>
  )
}
