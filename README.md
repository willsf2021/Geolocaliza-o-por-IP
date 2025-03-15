# Webapp de Geolocalização

Este projeto é um **webapp de geolocalização** desenvolvido como parte de um desafio do **Frontend Mentor**. O objetivo do desafio é criar uma interface simples que mostre a localização do usuário com base no IP, utilizando APIs externas para obter dados de geolocalização e exibi-los de forma clara e interativa.

## ***** SITE RESPONSIVO

## Tecnologias Utilizadas

- **Leaflet.js**: Para renderização e visualização do mapa.
- **Geo.ipify API**: Para obter dados de geolocalização com base no IP.
- **CSS Puro**: Para estilização da interface, sem o uso de pré-processadores ou frameworks.
- **JavaScript Puro**: Para a lógica de funcionalidades e chamadas de API.

## Funcionalidades

- O aplicativo solicita o IP do usuário e exibe a localização no mapa.
- Realiza chamadas de API para obter a cidade, região, país, fuso horário e ISP (Provedor de Serviços de Internet).
- Exibe um mapa interativo com a localização exata do IP fornecido, utilizando a API **Leaflet.js**.
- O layout foi desenvolvido com **CSS puro**, sem a utilização de frameworks.

## Como Funciona

1. O usuário digita o IP no campo de entrada.
2. O aplicativo valida o IP e, se válido, faz uma requisição à **Geo.ipify API**.
3. Recebe os dados da geolocalização e os exibe na interface, incluindo:
   - **IP**
   - **Localização** (cidade, região e país)
   - **Fuso horário**
   - **ISP**
4. Um mapa é renderizado utilizando a **Leaflet.js**, centralizando as coordenadas do IP.

## Desafios Enfrentados

Foi um ótimo momento para colocar em prática:
- **Chamadas de API**: Aprendi a trabalhar com requisições HTTP assíncronas usando JavaScript puro.
- **Funções e Lógica de Renderização**: Estruturei a lógica de chamadas de funções e como lidar com os dados recebidos para atualizar a interface do usuário.
- **Apresentação de Dados**: Trabalhei com a exibição e formatação dos dados na interface de maneira clara e eficiente.

## Como Rodar o Projeto

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/willsf2021/Geolocaliza-o-por-IP.git
   ```
2. Abra o arquivo index.html em seu navegador para visualizar o projeto.

## Considerações Finais
- **Esse desafio foi uma excelente oportunidade para aprimorar minhas habilidades em JavaScript puro, interações com APIs externas e renderização dinâmica de dados. Foi também uma ótima forma de trabalhar no design e experiência do usuário utilizando CSS puro.**

- **Esse é um projeto simples, mas que me proporcionou grande aprendizado sobre como integrar diferentes tecnologias para criar uma aplicação funcional e interativa.**