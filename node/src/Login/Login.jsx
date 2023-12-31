import './Login.css'

export default function Login_User() {
    return (
        <div>
            <div className="Login_Box2">
                <div>
                    <img src="src/assets/img_barnav/image.png" alt="" />
                </div>
                <div>
                    <form>
                        <div className='Text_Log2'>
                            <span>Entrar</span>
                            <p>Fazer Login Com Sua Conta </p>
                            <p>GameHub</p>
                        </div>

                        <div className='Inputs2'>
                            <input type='email' name='email' placeholder='Digite Seu E-mail' required />
                        </div>
                        <div className='Inputs2'>
                            <input type='password' placeholder='Informe Sua Senha ' required />
                        </div>

                            <div className='CheckBox'>
                                <input type='checkbox' />
                                <p>Lembrar Senha <a href="">Esqueceu a Senha</a></p>
                            </div>

                  
                        <button className='Botao_Log2'><a href="./MinhaArea">Logar</a></button>
                        <div className='Login_Dir2'>
                            <p>Não Tem Conta ? <a href="/Cadastro">Cadastrar</a></p>
                        </div>

                        <div className='Politica'>
                            <a href="/">Política e Privacidade</a>
                        </div>
                        <div className='Return'>
                            <a href="/">Voltar para Todas as Opções de Início de Sessão </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
