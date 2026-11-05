# Diário de Bordo — Desenvolvimento Front-End

## Projeto NAVØR – Barber • Lounge

**Disciplina:** Desenvolvimento Front-End
**Equipe:** Grupo 3

**Professor:** Paulo Henrique

**Semana:** 6 — Finalização da estilização, JavaScript e documentação do projeto

**Data:** 04/11/2026

---
## Atividades realizadas

Nesta semana, a equipe concluiu a estilização com CSS das páginas que ainda faltavam, incluiu as primeiras funcionalidades em JavaScript e atualizou a documentação do projeto no GitHub, deixando o site pronto para a entrega.

### Áreas trabalhadas
1. **Loja**
2. **Galeria**
3. **Lounge**
4. **Contato**
5. **Localização**
6. **Equipe**
7. **Sobre nós**
8. **Agendamento**
---

## Decisões relevantes

Foi mantido o padrão visual definido nas semanas anteriores, para que todas as páginas seguissem a mesma identidade.

- **Cores de fundo: grafite/preto**
- **HEX - #171717; #292929;**
- **Cor de destaque: dourado =** #D3AF37;
- **Textos e botões: branco e tons claros =** #F5F2E8;
- **Fontes de Textos:** "Instrument Serif", "open-sans" e "Geist"
- **Estilo:** moderno, urbano e sofisticado

**Estilização das páginas**

No dia 29/10/2026 foi atualizada a página da **Loja**:
- novo estilo nas tabelas dos produtos;
- destaque em dourado para o texto "qualidade Premium" e para os preços;
- otimização do peso das imagens de produtos.

No dia 03/11/2026 foram realizados os ajustes de CSS e HTML nas demais páginas:
- **Lounge:** novo alinhamento e estilização dos textos e da lista de serviços;
- **Contato:** troca dos ícones antigos (.jpeg) por imagens em formato .webp, mais leves, e novo layout dos botões;
- **Localização:** ajuste do alinhamento do mapa e dos textos;
- **Equipe:** inclusão das fotos dos integrantes e organização dos cards em grade;
- **Sobre nós:** ajustes de alinhamento e estilo;
- **Agendamento:** correção do estilo do formulário e da logo no topo da página.

**Inclusão de JavaScript**

No dia 31/10/2026 foi criado o arquivo `script.js`, com o primeiro código JavaScript do projeto:
- captura dos dados do formulário de agendamento (especialista, data, nome, serviço, horário e telefone);
- bloqueio do envio padrão do formulário.

No dia 03/11/2026 foram acrescentadas novas funções:
- **Carrossel da galeria:** botões de "anterior" e "próximo" para navegar entre as fotos;
- **Agendamento:** mensagem de confirmação ao enviar o formulário e limpeza dos campos.

Algumas partes do JavaScript ainda precisam de correção. Elas ficam registradas como melhoria para as próximas etapas.

**Documentação**

No dia 04/11/2026 o `README.md` do repositório foi reescrito, contendo:
- apresentação do projeto e link do site;
- lista das páginas;
- identidade visual, tecnologias e estrutura de pastas;
- equipe e próximos passos.

**Versionamento**

Todas as alterações da semana foram registradas por commits no GitHub, com mensagens padronizadas (`feat` para novidades e `fix` para correções).
---

## Status do projeto

**Etapa atual:** Finalização e entrega do projeto.

## Próximos passos

- Fazer o agendamento salvar os dados de verdade;
- Deixar o site responsivo para celular;
- Preparar a integração com um sistema ERP.

**Exemplo de código desenvolvido nesta semana (carrossel da galeria):**

    function mudarSlide(direcao) {
        slideAtual += direcao;
        if (slideAtual >= imagens.length) {
            slideAtual = 0;
        }
        if (slideAtual < 0) {
            slideAtual = imagens.length - 1;
        }
        slides.style.transform = `translateX(-${slideAtual * 100}%)`;
    }
