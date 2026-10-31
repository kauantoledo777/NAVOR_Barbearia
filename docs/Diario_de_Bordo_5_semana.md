# Diário de Bordo — Desenvolvimento Front-End

# Diário de Bordo — Desenvolvimento Front-End

## Projeto NAVØR – Barber • Lounge

**Disciplina:** Desenvolvimento Front-End
**Equipe:** Grupo 3

**Professor:** Paulo Henrique

**Semana:** 5 — Validação das paginas, estrutura, formatação e documentação técnica do projeto

**Data:** 04/10/2026

---
## Atividades realizadas

Nesta semana, a equipe iniciou a validação pelo W3C Validator, e igualdade da formatação das paginas, acrescentamos uma leve base de CSS no projeto para facilitar para o início da próxima entrega.

### Áreas projetadas
1. **Barbearia - Início**
2. **Sobre nós**
3. **Loja**
4. **Lounge**
5. **Galeria**
6. **Contato**
7. **Localização**
8. **Depoimentos**
9. **Agendamento**
10. **Equipe**
---

## Decisões relevantes

Foram identificados os códigos HEX das cores previamente estabelecidas para manter um padrão visual durante o desenvolvimento.

- **Cores de fundo: grafite/preto**
- **HEX - #171717; #292929;**
- **Cor de destaque: dourado =**  #D3AF37;
- **Textos e botões: branco e tons claros =** #F5F2E8;
- **Fontes de Textos:** "Instrument Serif", "open-sans" e "Geist"
- **Estilo:** moderno, urbano e sofisticado

A página inicial será utilizada para apresentar a NAVØR e direcionar o usuário para as demais áreas do site.

**Validação de páginas no W3C Validator**

Realizamos a validação de algumas das páginas já desenvolvidas pela equipe utilizando o W3C Validator.
Durante a validação, foram identificados alguns erros na estrutura do código. A equipe retornou ao desenvolvimento dessas páginas para realizar as correções necessárias, e foi realizado a correção das mesmas.

**Inclusão de relatório de hospedagem e domínio**

Realizamos uma comparação inicial entre algumas opções de hospedagem e domínio e adicionamos em PDF dentro do DOCS.

**Inclusão de acessibilidade ao site**

Foi incrementado o uso de tags de acessibilidade em todas as páginas do projeto, como:
- textos alternativos em imagens;
- organização adequada dos títulos;
- identificação dos campos de formulários;
- utilização de elementos HTML semânticos;
- navegação e organização clara do conteúdo.
---

## Status do projeto

**Etapa atual:** Finalização da primeira entrega do projeto.

## Iniciamos a estilização das páginas com CSS

No dia 21/10/2026 estilizamos as páginas de localização e agendamento.
- Alinhamento da página com a identidade visual proposta;
- Criação de cards;
- versionamento via git;

No dia 28/10/2026 Foi realizada a estilização de elementos da página “Sobre Nós”, incluindo CSS dos títulos, textos e das tabelas com foco em manter o estilo pré-definido. 
- ajustes de alinhamento;
- nova apresentação visual;
- versionamento via git.

**CSS dos botões**

Foi incrementado o uso de tags de botões em todas as páginas do projeto, para a criação de um efieto de movimento:

    ".equipe-container article:hover {
   transform: translateY(-15px);
   box-shadow: 0 5px 10px rgba(212, 175, 55, 0.3);
}"

