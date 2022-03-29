# Template conexão NodeJs -> CEI

Criação de conexão com o SAP via RFC

### Instruções

> Baixar este repositório<br>
> Utilizar o WSL para o desenvolvimento<br>
> Docker deve estar instalado na sua maquina<br>
> Fazer todas as alterações dentro da pasta SRC<br>

### Para baixar o código fonte e executar direto :octocat:

|                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------- |
| **1 - clonar o repositório**<br> git clone https://github.com/SJ-Fabio/cei-rfc-template-.git                                |
| **2 - abrir a pasta criada**<br> cd cei-rfc-template-                                                                       |
| **3 - fazer o build da aplicação**<br> docker build -t silvafj/cei-rfc-template .                                           |
| **4 - Criar um container de teste**<br> docker run -d --name cei-rfc -p 8080:3000 silvafj/cei-rfc-template                  |
| **5 - Validar criação do container**<br> docker logs -t cei-rfc                                                             |
| **6 - Criar versão "Latest" da imagem**<br> docker build -t silvafj/cei-rfc-template:latest .                               |
| **7 - Criar app no heroku**<br> criar app -> cei-rfc-template                                                               |
| **8 - Vincular a imagem ao app no heroku**<br> docker tag silvafj/cei-rfc-template registry.heroku.com/cei-rfc-template/web |
| **9 - Logar no Docker**<br> docker login --username=silvafj                                                                 |
| **10 - Push da imagem no Docker Hub**<br> docker push silvafj/cei-rfc-template:latest                                       |
| **11 - Logar no heroku**<br> heroku container:login                                                                         |
| **12 - Push no heroku**<br> heroku container:push web --app=cei-rfc-template                                                |
| **13 - Liberar o app para utilização**<br> heroku container:release web --app=cei-rfc-template                              |
| **14 - Validar crash no build da maquina no heroku**<br> heroku run . console --app=cei-rfc-template                        |
| **15 - Validar se o app está rodando**<br> heroku logs --tail --app=cei-rfc-template                                        |

<br/>

### Para acessar o app recém criado :earth_africa:

```
https://cei-rfc-template.herokuapp.com

```
