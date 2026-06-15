# Blackjack Frontend

Frontend de um jogo de Blackjack desenvolvido com **React**, **TypeScript** e **Vite**.
A aplicação consome uma API backend em Spring Boot responsável pelas regras do jogo, criação do jogador, apostas e fluxo da partida.

## Tecnologias utilizadas

* React
* TypeScript
* Vite
* Axios
* React Router DOM
* CSS Modules/arquivos CSS por componente

## Funcionalidades

* Tela inicial para criação do jogador
* Validação de nome e saldo inicial
* Integração com API para criação do jogador
* Navegação entre tela inicial e mesa de jogo
* Sistema de apostas com fichas
* Validação para impedir aposta maior que o saldo disponível
* Renderização dinâmica das cartas do jogador e dealer
* Carta oculta do dealer
* Botões de ação: Hit, Stand, Dealer Next, Deal e Clear
* Atualização de pontuação em tempo real
* Atualização do saldo do jogador após cada rodada
* Card de resultado final com opção de jogar novamente

## Estrutura principal

```txt
src/
├── components/
│   ├── Buttons/
│   ├── Card/
│   ├── Chip/
│   ├── PlayerInfo/
│   └── ScoreDisplay/
│
├── pages/
│   ├── home/
│   └── blackjack/
│
├── services/
│   ├── api.ts
│   ├── playerService.ts
│   └── blackjackService.ts
│
├── types/
│   ├── Player.ts
│   ├── Card.ts
│   ├── Game.ts
│   └── Button.ts
│
├── App.tsx
└── main.tsx
```

## Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar a URL da API

No arquivo:

```txt
src/services/api.ts
```

confirme se a URL está apontando para o backend:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});
```

### 3. Rodar o frontend

```bash
npm run dev
```

A aplicação será iniciada normalmente em:

```txt
http://localhost:5173
```

## Fluxo do jogo

1. O usuário informa nome e saldo inicial.
2. O frontend envia os dados para o backend criar o jogador.
3. O usuário é redirecionado para a mesa de Blackjack.
4. O usuário monta a aposta clicando nas fichas.
5. Ao clicar em Deal, a rodada é iniciada.
6. O jogador pode escolher Hit ou Stand.
7. Após Stand, o botão Dealer Next permite acompanhar cada ação do dealer.
8. Ao final da rodada, o resultado é exibido e o saldo é atualizado.
9. O jogador pode iniciar uma nova rodada.

## Observações

Este projeto foi desenvolvido como prática de integração entre frontend e backend, utilizando React com TypeScript no frontend e Spring Boot no backend.
