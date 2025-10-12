// Dados das fotos do álbum
const photos = [
    // Fotos 1-10: Preferidas (conforme sua especificação)
    {
        id: 1,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto1.jpg",
        category: "preferidas",
        date: "2022-05-09",
        isFavorite: true
    },
    {
        id: 2,
        title: "Neneins sorriso hihi", // TODO: Adicionar título da foto2.jpg
        description: "Neneins sorrindo em um dia especial", // TODO: Adicionar descrição da foto2.jpg
        image: "fotos/foto2.jpg",
        category: "preferidas",
        date: "2024-01-02",
        isFavorite: true
    },
    {
        id: 3,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto3.jpg",
        category: "preferidas",
        date: "2022-05-09",
        isFavorite: true
    },
    {
        id: 4,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto4.jpg",
        category: "outras",
        date: "2022-05-09"
    },
    {
        id: 5,
        title: "Neneim tirou print de eu escovando denti", // TODO: Adicionar título da foto5.jpg
        description: "Neneim tirou print de eu escovando denti e ela amou e me mandou", // TODO: Adicionar descrição da foto5.jpg
        image: "fotos/foto5.jpg",
        category: "outras",
        date: "2024-01-05"
    },
    {
        id: 6,
        title: "Neneim com fone de ouvido no pescoço", // TODO: Adicionar título da foto6.jpg
        description: "print da neneim", // TODO: Adicionar descrição da foto6.jpg
        image: "fotos/foto6.jpg",
        category: "outras",
        date: "2024-01-06"
    },
    {
        id: 7,
        title: "neneim na pandemia de mascara", // TODO: Adicionar título da foto7.jpg
        description: "neneim na pandemia de mascara 2021 22 um ano bem dificil", // TODO: Adicionar descrição da foto7.jpg
        image: "fotos/foto7.jpg",
        category: "outras",
        date: "2024-01-07"
    },
    {
        id: 8,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto8.jpg",
        category: "outras",
        date: "2022-05-09"
    },
    {
        id: 9,
        title: "momento feliz dos neneins", // TODO: Adicionar título da foto9.jpg
        description: "momento feliz dos neneins na casa da neneim", // TODO: Adicionar descrição da foto9.jpg
        image: "fotos/foto9.jpg",
        category: "preferidas",
        date: "2024-01-09",
        isFavorite: true
    },
    {
        id: 10,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto10.jpg",
        category: "preferidas",
        date: "2022-05-09",
        isFavorite: true
    },
    // Fotos 11-20
    {
        id: 11,
        title: "momento feliz dos neneins", // TODO: Adicionar título da foto11.jpg
        description: "neneim pulando nas minhas costas", // TODO: Adicionar descrição da foto11.jpg
        image: "fotos/foto11.jpg",
        category: "preferidas",
        date: "2024-01-11",
        isFavorite: true
    },
    {
        id: 12,
        title: "coração de neneins", // TODO: Adicionar título da foto12.jpg
        description: "coração de neneins com a neneim", // TODO: Adicionar descrição da foto12.jpg
        image: "fotos/foto12.jpg",
        category: "preferidas",
        date: "2024-01-12",
        isFavorite: true
    },
    {
        id: 13,
        title: "Neneins no trabalho", // TODO: Adicionar título da foto13.jpg
        description: "neneins no trabalho chegando para um turno longo", // TODO: Adicionar descrição da foto13.jpg
        image: "fotos/foto13.jpg",
        category: "outras",
        date: "2024-01-13"
    },
    {
        id: 14,
        title: "fondue em campos do jordao", // TODO: Adicionar título da foto14.jpg
        description: "fondue em campos do jordao com a neneim", // TODO: Adicionar descrição da foto14.jpg
        image: "fotos/foto14.jpg",
        category: "viagem",
        date: "2024-01-14"
    },
    {
        id: 15,
        title: "neneins em campos do jordao", // TODO: Adicionar título da foto15.jpg
        description: "neneins em campos do jordao com a neneim", // TODO: Adicionar descrição da foto15.jpg
        image: "fotos/foto15.jpg",
        category: "viagem",
        date: "2024-01-15"
    },
    {
        id: 16,
        title: "cachoeira em campos do jordao", // TODO: Adicionar título da foto16.jpg
        description: "cachoeira em campos do jordao com a neneim", // TODO: Adicionar descrição da foto16.jpg
        image: "fotos/foto16.jpg",
        category: "viagem",
        date: "2024-01-16"
    },
    {
        id: 17,
        title: "entrada de campos do jordao", // TODO: Adicionar título da foto17.jpg
        description: "entrada de campos do jordao com a neneim", // TODO: Adicionar descrição da foto17.jpg
        image: "fotos/foto17.jpg",
        category: "viagem",
        date: "2024-01-17"
    },
    {
        id: 18,
        title: "parque centenario com a neneim", // TODO: Adicionar título da foto18.jpg
        description: "parque centenario com a neneim", // TODO: Adicionar descrição da foto18.jpg
        image: "fotos/foto18.jpg",
        category: "viagem",
        date: "2024-01-18"
    },
    {
        id: 19,
        title: "feijoada na amiga da neneim", // TODO: Adicionar título da foto19.jpg
        description: "feijoada na amiga da neneim", // TODO: Adicionar descrição da foto19.jpg
        image: "fotos/foto19.jpg",
        category: "outras",
        date: "2024-01-19"
    },
    {
        id: 20,
        title: "natal com a coca cola", // TODO: Adicionar título da foto20.jpg
        description: "natal com a coca cola com a neneim", // TODO: Adicionar descrição da foto20.jpg
        image: "fotos/foto20.jpg",
        category: "outras",
        date: "2024-01-20"
    },
    // Fotos 21-30
    {
        id: 21,
        title: "foto outubro rosa ", // TODO: Adicionar título da foto21.jpg
        description: "foto outubro rosa com a neneim", // TODO: Adicionar descrição da foto21.jpg
        image: "fotos/foto21.jpg",
        category: "preferidas",
        date: "2024-01-21",
        isFavorite: true
    },
    {
        id: 22,
        title: "foto de neneins bonitos", // TODO: Adicionar título da foto22.jpg
        description: "foto de neneins bonitos com a neneim", // TODO: Adicionar descrição da foto22.jpg
        image: "fotos/foto22.jpg",
        category: "preferidas",
        date: "2024-01-22",
        isFavorite: true
    },
    {
        id: 23,
        title: "neneins brincando", // TODO: Adicionar título da foto23.jpg
        description: "AHHHHHHHHHH", // TODO: Adicionar descrição da foto23.jpg
        image: "fotos/foto23.jpg",
        category: "preferidas",
        date: "2024-01-23",
        isFavorite: true
    },
    {
        id: 24,
        title: "akimatisuri com a neneim", // TODO: Adicionar título da foto24.jpg
        description: "akimatisuri com a neneim", // TODO: Adicionar descrição da foto24.jpg
        image: "fotos/foto24.jpg",
        category: "viagem",
        date: "2024-01-24"
    },
    {
        id: 25,
        title: "elevador com a neneim na liberdade em SP", // TODO: Adicionar título da foto25.jpg
        description: "elevador com a neneim na liberdade em SP", // TODO: Adicionar descrição da foto25.jpg
        image: "fotos/foto25.jpg",
        category: "viagem",
        date: "2024-01-25"
    },
    {
        id: 26,
        title: "Comendo lanche hello kitty na liberdade em SP", // TODO: Adicionar título da foto26.jpg
        description: "Comendo lanche hello kitty na liberdade em SP", // TODO: Adicionar descrição da foto26.jpg
        image: "fotos/foto26.jpg",
        category: "viagem",
        date: "2024-01-26"
    },
    {
        id: 27,
        title: "LULU candy com a neneim na liberdade em SP", // TODO: Adicionar título da foto27.jpg
        description: "LULU candy com a neneim na liberdade em SP", // TODO: Adicionar descrição da foto27.jpg
        image: "fotos/foto27.jpg",
        category: "viagem",
        date: "2024-01-27"
    },
    {
        id: 28,
        title: "neneins na piscina na casa da neneim", // TODO: Adicionar título da foto28.jpg
        description: "neneins na piscina na casa da neneim", // TODO: Adicionar descrição da foto28.jpg
        image: "fotos/foto28.jpg",
        category: "outras",
        date: "2024-01-28"
    },
    {
        id: 29,
        title: "Pastel no centro da cidade ", // TODO: Adicionar título da foto29.jpg
        description: "Pastel no centro da cidade com a neneim", // TODO: Adicionar descrição da foto29.jpg
        image: "fotos/foto29.jpg",
        category: "preferidas",
        date: "2024-01-29",
        isFavorite: true
    },
    {
        id: 30,
        title: "sorrindo com a neneim", // TODO: Adicionar título da foto30.jpg
        description: "sorrindo com a neneim", // TODO: Adicionar descrição da foto30.jpg
        image: "fotos/foto30.jpg",
        category: "preferidas",
        date: "2024-01-30",
        isFavorite: true
    },
    // Fotos 31-40
    {
        id: 31,
        title: "sorrindo com a neneim", // TODO: Adicionar título da foto31.jpg
        description: "sorrindo com a neneim", // TODO: Adicionar descrição da foto31.jpg
        image: "fotos/foto31.jpg",
        category: "preferidas",
        date: "2024-01-31",
        isFavorite: true
    },
    {
        id: 32,
        title: "neneim no primeiro trabalho", // TODO: Adicionar título da foto32.jpg
        description: "neneim no primeiro trabalho", // TODO: Adicionar descrição da foto32.jpg
        image: "fotos/foto32.jpg",
        category: "outras",
        date: "2024-02-01"
    },
    {
        id: 33,
        title: "neneins no shopping", // TODO: Adicionar título da foto33.jpg
        description: "neneins no shopping com a neneim", // TODO: Adicionar descrição da foto33.jpg
        image: "fotos/foto33.jpg",
        category: "outras",
        date: "2024-02-02"
    },
    {
        id: 34,
        title: "Dirigindo uninho da massa com a neneim", // TODO: Adicionar título da foto34.jpg
        description: "Dirigindo uninho da massa com a neneim", // TODO: Adicionar descrição da foto34.jpg
        image: "fotos/foto34.jpg",
        category: "outras",
        date: "2024-02-03"
    },
    {
        id: 35,
        title: "comendo mc donalds com a neneim em SP", // TODO: Adicionar título da foto35.jpg
        description: "comendo mc donalds com a neneim em SP", // TODO: Adicionar descrição da foto35.jpg
        image: "fotos/foto35.jpg",
        category: "viagem",
        date: "2024-02-04"
    },
    {
        id: 36,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto36.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto36.jpg
        image: "fotos/foto36.jpg",
        category: "viagem",
        date: "2024-02-05"
    },
    {
        id: 37,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto37.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto37.jpg
        image: "fotos/foto37.jpg",
        category: "viagem",
        date: "2024-02-06"
    },
    {
        id: 38,
        title: "Show do Hungria com a neneim", // TODO: Adicionar título da foto38.jpg
        description: "Show do Hungria com a neneim", // TODO: Adicionar descrição da foto38.jpg
        image: "fotos/foto38.jpg",
        category: "viagem",
        date: "2024-02-07"
    },
    {
        id: 39,
        title: "Dia de neneim habilitação e comendo BK", // TODO: Adicionar título da foto39.jpg
        description: "Dia de neneim habilitação e comendo BK com a neneim OBS EU PASSEI NA HABILITAÇÃO", // TODO: Adicionar descrição da foto39.jpg
        image: "fotos/foto39.jpg",
        category: "outras",
        date: "2024-02-08"
    },
    {
        id: 40,
        title: "Primeira vez na casa da neneim", // TODO: Adicionar título da foto40.jpg
        description: "Primeira vez na casa da neneim", // TODO: Adicionar descrição da foto40.jpg
        image: "fotos/foto40.jpg",
        category: "preferidas",
        date: "2024-02-09",
        isFavorite: true
    },
    // Fotos 41-50
    {
        id: 41,
        title: "Primeira vez na casa da neneim", // TODO: Adicionar título da foto41.jpg
        description: "Primeira vez na casa da neneim", // TODO: Adicionar descrição da foto41.jpg
        image: "fotos/foto41.jpg",
        category: "preferidas",
        date: "2024-02-10",
        isFavorite: true
    },
    {
        id: 42,
        title: "Neneins com a vittorya GATA", // TODO: Adicionar título da foto42.jpg
        description: "Neneins com a vittorya GATA", // TODO: Adicionar descrição da foto42.jpg
        image: "fotos/foto42.jpg",
        category: "outras",
        date: "2024-02-11"
    },
    {
        id: 43,
        title: "Sorrindo na casa da neneim", // TODO: Adicionar título da foto43.jpg
        description: "Sorrindo na casa da neneim", // TODO: Adicionar descrição da foto43.jpg
        image: "fotos/foto43.jpg",
        category: "outras",
        date: "2024-02-12"
    },
    {
        id: 44,
        title: "Aniversario de 18 anos do neneim", // TODO: Adicionar título da foto44.jpg
        description: "Aniversario de 18 anos do neneim", // TODO: Adicionar descrição da foto44.jpg
        image: "fotos/foto44.jpg",
        category: "outras",
        date: "2024-02-13"
    },
    {
        id: 45,
        title: "Neneins brincando", // TODO: Adicionar título da foto45.jpg
        description: "Neneins brincando", // TODO: Adicionar descrição da foto45.jpg
        image: "fotos/foto45.jpg",
        category: "outras",
        date: "2024-02-14"
    },
    {
        id: 46,
        title: "Fuleco neneim da COPA", // TODO: Adicionar título da foto46.jpg
        description: "Fuleco neneim da COPA", // TODO: Adicionar descrição da foto46.jpg
        image: "fotos/foto46.jpg",
        category: "outras",
        date: "2024-02-15"
    },
    {
        id: 47,
        title: "Neneim toda gatona", // TODO: Adicionar título da foto47.jpg
        description: "Neneim toda gatona", // TODO: Adicionar descrição da foto47.jpg
        image: "fotos/foto47.jpg",
        category: "outras",
        date: "2024-02-16"
    },
    {
        id: 48,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto48.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto48.jpg
        image: "fotos/foto48.jpg",
        category: "viagem",
        date: "2024-02-17"
    },
    {
        id: 49,
        title: "Show do Hungria com a neneim", // TODO: Adicionar título da foto49.jpg
        description: "Show do Hungria com a neneim", // TODO: Adicionar descrição da foto49.jpg
        image: "fotos/foto49.jpg",
        category: "viagem",
        date: "2024-02-18"
    },
    {
        id: 50,
        title: "Viagem pra campos do jordao no busão", // TODO: Adicionar título da foto50.jpg
        description: "Viagem pra campos do jordao no busão", // TODO: Adicionar descrição da foto50.jpg
        image: "fotos/foto50.jpg",
        category: "viagem",
        date: "2024-02-19"
    },
    // Fotos 51-60
    {
        id: 51,
        title: "Neneim gatona em campos do jordao", // TODO: Adicionar título da foto51.jpg
        description: "Neneim gatona em campos do jordao", // TODO: Adicionar descrição da foto51.jpg
        image: "fotos/foto51.jpg",
        category: "viagem",
        date: "2024-02-20"
    },
    {
        id: 52,
        title: "neneins olhar fofo em campos do jordao", // TODO: Adicionar título da foto52.jpg
        description: "neneins olhar fofo em campos do jordao", // TODO: Adicionar descrição da foto52.jpg
        image: "fotos/foto52.jpg",
        category: "viagem",
        date: "2024-02-21"
    },
    {
        id: 53,
        title: "neneins comendo em campos do jordao", // TODO: Adicionar título da foto53.jpg
        description: "neneins comendo em campos do jordao", // TODO: Adicionar descrição da foto53.jpg
        image: "fotos/foto53.jpg",
        category: "viagem",
        date: "2024-02-22"
    },
    {
        id: 54,
        title: "comendo no shopping com a neneim", // TODO: Adicionar título da foto54.jpg
        description: "comendo no shopping com a neneim", // TODO: Adicionar descrição da foto54.jpg
        image: "fotos/foto54.jpg",
        category: "outras",
        date: "2024-02-23"
    },
    {
        id: 55,
        title: "neneim no trabalho", // TODO: Adicionar título da foto55.jpg
        description: "neneim no trabalho", // TODO: Adicionar descrição da foto55.jpg
        image: "fotos/foto55.jpg",
        category: "outras",
        date: "2024-02-24"
    },
    {
        id: 56,
        title: "Neneins lindos", // TODO: Adicionar título da foto56.jpg
        description: "Neneins lindos", // TODO: Adicionar descrição da foto56.jpg
        image: "fotos/foto56.jpg",
        category: "outras",
        date: "2024-02-25"
    },
    {
        id: 57,
        title: "fofinhos neneins", // TODO: Adicionar título da foto57.jpg
        description: "fofinhos neneins", // TODO: Adicionar descrição da foto57.jpg
        image: "fotos/foto57.jpg",
        category: "outras",
        date: "2024-02-26"
    },
    {
        id: 58,
        title: "aniversario de 20 anos do neneim", // TODO: Adicionar título da foto58.jpg
        description: "aniversario de 20 anos do neneim na casa da neneim", // TODO: Adicionar descrição da foto58.jpg
        image: "fotos/foto58.jpg",
        category: "outras",
        date: "2024-02-27"
    },
    {
        id: 59,
        title: "Neneins na escola",
        description: "Quando neneins se conheceram e começaram a namorar no dia 09/05/2022",
        image: "fotos/foto59.jpg",
        category: "outras",
        date: "2022-05-09"
    },
    {
        id: 60,
        title: "Foto linda da neneim", // TODO: Adicionar título da foto60.jpg
        description: "Foto linda da neneim", // TODO: Adicionar descrição da foto60.jpg
        image: "fotos/foto60.jpg",
        category: "outras",
        date: "2024-02-29"
    },
    // Fotos 61-70
    {
        id: 61,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto61.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto61.jpg
        image: "fotos/foto61.jpg",
        category: "viagem",
        date: "2024-03-01"
    },
    {
        id: 62,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto62.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto62.jpg
        image: "fotos/foto62.jpg",
        category: "viagem",
        date: "2024-03-02"
    },
    {
        id: 63,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto63.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto63.jpg
        image: "fotos/foto63.jpg",
        category: "viagem",
        date: "2024-03-03"
    },
    {
        id: 64,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto64.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto64.jpg
        image: "fotos/foto64.jpg",
        category: "viagem",
        date: "2024-03-04"
    },
    {
        id: 65,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto65.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto65.jpg
        image: "fotos/foto65.jpg",
        category: "viagem",
        date: "2024-03-05"
    },
    {
        id: 67,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto67.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto67.jpg
        image: "fotos/foto67.jpg",
        category: "viagem",
        date: "2024-03-06"
    },
    {
        id: 68,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto68.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto68.jpg
        image: "fotos/foto68.jpg",
        category: "viagem",
        date: "2024-03-07"
    },
    {
        id: 69,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto69.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto69.jpg
        image: "fotos/foto69.jpg",
        category: "viagem",
        date: "2024-03-08"
    },
    {
        id: 70,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto70.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto70.jpg
        image: "fotos/foto70.jpg",
        category: "viagem",
        date: "2024-03-09"
    },
    // Fotos 71-79
    {
        id: 71,
        title: "exposição van gogh com a neneim em SP", // TODO: Adicionar título da foto71.jpg
        description: "exposição van gogh com a neneim em SP", // TODO: Adicionar descrição da foto71.jpg
        image: "fotos/foto71.jpg",
        category: "viagem",
        date: "2024-03-10"
    },
    {
        id: 72,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto72.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto72.jpg
        image: "fotos/foto72.jpg",
        category: "viagem",
        date: "2024-03-11"
    },
    {
        id: 73,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto73.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto73.jpg
        image: "fotos/foto73.jpg",
        category: "viagem",
        date: "2024-03-12"
    },
    {
        id: 74,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto74.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto74.jpg
        image: "fotos/foto74.jpg",
        category: "viagem",
        date: "2024-03-13"
    },
    {
        id: 75,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto75.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto75.jpg
        image: "fotos/foto75.jpg",
        category: "viagem",
        date: "2024-03-14"
    },
    {
        id: 76,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto76.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto76.jpg
        image: "fotos/foto76.jpg",
        category: "viagem",
        date: "2024-03-15"
    },
    {
        id: 77,
        title: "show do hungria com a neneim", // TODO: Adicionar título da foto77.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto77.jpg
        image: "fotos/foto77.jpg",
        category: "viagem",
        date: "2024-03-16"
    },
    {
        id: 78,
        title: "show do hungria com a neneim    ", // TODO: Adicionar título da foto78.jpg
        description: "show do hungria com a neneim", // TODO: Adicionar descrição da foto78.jpg
        image: "fotos/foto78.jpg",
        category: "viagem",
        date: "2024-03-17"
    },
    {
        id: 79,
        title: "show do hungria com a neneim",
        description: "show do hungria com a neneim",
        image: "fotos/foto79.jpg",
        category: "viagem",
        date: "2024-03-18"
    },
    // Fotos 80-84
    {
        id: 80,
        title: "neneins na ligação",
        description: "foto fofa da neneins na ligação",
        image: "fotos/foto80.jpg",
        category: "preferidas",
        date: "2024-03-19",
        isFavorite: true
    },
    {
        id: 81,
        title: "fotos preferidas da neneim",
        description: "do neneim",
        image: "fotos/foto81.jpg",
        category: "preferidas",
        date: "2024-03-20"
    },
    {
        id: 82,
        title: "fotos preferidas da neneim",
        description: "do neneim",
        image: "fotos/foto82.jpg",
        category: "preferidas",
        date: "2024-03-21"
    },
    {
        id: 83,
        title: "fotos preferidas da neneim",
        description: "do neneim",
        image: "fotos/foto83.jpg",
        category: "preferidas",
        date: "2024-03-22",
        isFavorite: true
    },
    {
        id: 84,
        title: "fotos preferidas da neneim",
        description: "do neneim",
        image: "fotos/foto84.jpg",
        category: "preferidas",
        date: "2024-03-23",
        isFavorite: true
    }
];

// Variáveis globais
let currentPhotoIndex = 0;
let filteredPhotos = [...photos];
let currentFilter = 'all';

// Elementos DOM
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const backToTop = document.getElementById('backToTop');
const navButtons = document.querySelectorAll('.nav-btn');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const photoCount = document.getElementById('photoCount');
const galleryTitle = document.getElementById('galleryTitle');
const viewButtons = document.querySelectorAll('.view-btn');
const themeToggle = document.getElementById('themeToggle');

// Função para carregar preferência de tema
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Função para salvar preferência de tema
function saveThemePreference() {
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Configurar toggle de tema
function setupThemeToggle() {
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        saveThemePreference();
        
        // Animação no botão
        this.style.transform = 'scale(0.9) rotate(180deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadThemePreference();
    renderGallery();
    setupEventListeners();
    setupScrollToTop();
    updatePhotoCounter();
    updateGalleryTitle();
});

// Renderizar galeria
function renderGallery() {
    gallery.innerHTML = '';
    
    if (filteredPhotos.length === 0) {
        gallery.innerHTML = `
            <div class="loading">
                <i class="fas fa-images"></i>
                <div>Nenhuma foto encontrada nesta categoria</div>
            </div>
        `;
        return;
    }
    
    filteredPhotos.forEach((photo, index) => {
        const photoElement = createPhotoElement(photo, index);
        gallery.appendChild(photoElement);
    });
    
    // Reativar animações e observers
    setTimeout(() => {
        animateOnScroll();
    }, 100);
}

// Criar elemento da foto
function createPhotoElement(photo, index) {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'gallery-item';
    photoDiv.setAttribute('data-index', index);
    
    photoDiv.innerHTML = `
        <div class="category">${getCategoryName(photo.category)}</div>
        ${photo.isFavorite ? '<div class="favorite-icon"><i class="fas fa-heart"></i></div>' : ''}
        <img src="${photo.image}" alt="${photo.title || 'Foto do álbum'}" loading="lazy">
        <div class="gallery-item-content">
            <h3>${photo.title || 'Sem título'}</h3>
            <p>${photo.description || 'Descrição não disponível'}</p>
        </div>
    `;
    
    // Adicionar evento de clique
    photoDiv.addEventListener('click', () => openModal(index));
    
    return photoDiv;
}

// Obter nome da categoria
function getCategoryName(category) {
    const categories = {
        'viagem': 'Viagens',
        'preferidas': 'Favoritas'
    };
    return categories[category] || category;
}

// Abrir modal
function openModal(index) {
    currentPhotoIndex = index;
    const photo = filteredPhotos[currentPhotoIndex];
    
    modalImage.src = photo.image;
    modalImage.alt = photo.title || 'Foto do álbum';
    modalTitle.textContent = photo.title || 'Sem título';
    modalDescription.textContent = photo.description || 'Descrição não disponível';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Adicionar animação de entrada
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Fechar modal
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navegar entre fotos no modal
function navigatePhoto(direction) {
    if (direction === 'prev') {
        currentPhotoIndex = currentPhotoIndex > 0 ? currentPhotoIndex - 1 : filteredPhotos.length - 1;
    } else {
        currentPhotoIndex = currentPhotoIndex < filteredPhotos.length - 1 ? currentPhotoIndex + 1 : 0;
    }
    
    const photo = filteredPhotos[currentPhotoIndex];
    modalImage.src = photo.image;
    modalImage.alt = photo.title || 'Foto do álbum';
    modalTitle.textContent = photo.title || 'Sem título';
    modalDescription.textContent = photo.description || 'Descrição não disponível';
}

// Filtrar fotos por categoria
function filterPhotos(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredPhotos = [...photos];
    } else if (category === 'preferidas') {
        filteredPhotos = photos.filter(photo => photo.isFavorite === true);
    } else {
        filteredPhotos = photos.filter(photo => photo.category === category);
    }
    
    // Atualizar botões de navegação
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    
    // Limpar busca
    if (searchInput) {
        searchInput.value = '';
        clearSearch.style.display = 'none';
    }
    
    updateGalleryTitle();
    updatePhotoCounter();
    renderGallery();
}

// Atualizar contador de fotos
function updatePhotoCounter() {
    if (photoCount) {
        photoCount.textContent = filteredPhotos.length;
    }
}

// Atualizar título da galeria
function updateGalleryTitle() {
    if (!galleryTitle) return;
    
    const titles = {
        'all': 'Todas as Fotos',
        'viagem': '✈️ Fotos de Viagens',
        'preferidas': '❤️ Fotos Preferidas'
    };
    
    galleryTitle.textContent = titles[currentFilter] || 'Todas as Fotos';
}

// Funcionalidade de busca
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            clearSearch.style.display = 'flex';
            
            // Filtrar fotos com base no filtro atual
            const basePhotos = currentFilter === 'all' 
                ? photos 
                : currentFilter === 'preferidas'
                    ? photos.filter(p => p.isFavorite === true)
                    : photos.filter(p => p.category === currentFilter);
            
            filteredPhotos = basePhotos.filter(photo => 
                photo.title.toLowerCase().includes(query) ||
                photo.description.toLowerCase().includes(query) ||
                photo.category.toLowerCase().includes(query)
            );
        } else {
            clearSearch.style.display = 'none';
            filterPhotos(currentFilter);
            return;
        }
        
        updatePhotoCounter();
        renderGallery();
    });
    
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.style.display = 'none';
        filterPhotos(currentFilter);
    });
}

// Toggle de visualização
function setupViewToggle() {
    if (!viewButtons || viewButtons.length === 0) return;
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            gallery.classList.remove('grid-view', 'masonry-view');
            gallery.classList.add(`${view}-view`);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Fechar modal
    closeModal.addEventListener('click', closeModalHandler);
    
    // Fechar modal clicando fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // Navegação no modal
    prevBtn.addEventListener('click', () => navigatePhoto('prev'));
    nextBtn.addEventListener('click', () => navigatePhoto('next'));
    
    // Navegação com teclado
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModalHandler();
                    break;
                case 'ArrowLeft':
                    navigatePhoto('prev');
                    break;
                case 'ArrowRight':
                    navigatePhoto('next');
                    break;
            }
        }
    });
    
    // Filtros de categoria
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterPhotos(category);
        });
    });
    
    // Configurar busca e view toggle
    setupSearch();
    setupViewToggle();
    
    // Configurar tema
    setupThemeToggle();
}


// Configurar botão de voltar ao topo
function setupScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Lazy loading para imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Efeitos de hover suaves
function setupHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Animações de entrada
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Função para adicionar nova foto (para futuras expansões)
function addPhoto(photoData) {
    photos.push(photoData);
    if (currentFilter === 'all' || photoData.category === currentFilter) {
        filteredPhotos.push(photoData);
        renderGallery();
    }
}

// Função para remover foto
function removePhoto(photoId) {
    const index = photos.findIndex(photo => photo.id === photoId);
    if (index > -1) {
        photos.splice(index, 1);
        filterPhotos(currentFilter);
    }
}

// Função para buscar fotos
function searchPhotos(query) {
    const searchQuery = query.toLowerCase();
    filteredPhotos = photos.filter(photo => 
        photo.title.toLowerCase().includes(searchQuery) ||
        photo.description.toLowerCase().includes(searchQuery) ||
        photo.category.toLowerCase().includes(searchQuery)
    );
    renderGallery();
}

// Exportar funções para uso global (se necessário)
window.AlbumManager = {
    addPhoto,
    removePhoto,
    searchPhotos,
    filterPhotos,
    photos
};

// Inicializar funcionalidades adicionais quando a página carregar
window.addEventListener('load', () => {
    setupLazyLoading();
    setupHoverEffects();
    animateOnScroll();
});

// Prevenir comportamento padrão de arrastar imagens
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Adicionar suporte para touch/swipe no modal (mobile)
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            navigatePhoto('next');
        } else {
            navigatePhoto('prev');
        }
    }
}