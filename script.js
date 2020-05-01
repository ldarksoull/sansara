let app = new Vue({
    el: '#app',
    data:{
        resources:[
            {
                id: 1,
                name: 'Агава',
                weight: 5,
                type: 'Добыча',
                components: []
            },
            {
                id: 2,
                name: 'Акрил',
                weight: 3,
                type: 'Переработка',
                components: [124]
            },
            {
                id: 3,
                name: 'Апельсины',
                weight: 5,
                type: 'Добыча',
                components: []
            },
            {
                id: 4,
                name: 'Апельсиновый сок',
                weight: 5,
                type: 'Переработка',
                components: [3]  //апельсины
            },
            {
                id: 5,
                name: 'Апельсиновое масло',
                weight: 5,
                type: 'Переработка',
                components: [3]  //апельсины
            },
            {
                id: 6,
                name: 'Апероль шприц',
                weight: 5,
                type: 'Переработка',
                components: [35, 4, 78]
                
            },
            {
                id: 7,
                name: 'Арбуз',
                weight: 5,
                type: 'Переработка',
                components: []
            },
            {
                id: 8,
                name: 'Арматура',
                weight: 8.2,
                type: 'Переработка',
                components: [114, 58] // сталь, лак
            },
            {
                id: 9,
                name: 'Бананы',
                weight: 5,
                type: 'Переработка',
                components: []
            },
            {
                id: 10,
                name: 'Бетон',
                weight: 11.3,
                type: 'Переработка',
                components: [138,141,78,83]
            },
            {
                id: 11,
                name: 'Бензин',
                weight: 5,
                type: 'Переработка',
                components: [80,89]
            },
            {
                id: 12,
                name: 'Браслет',
                weight: 5,
                type: 'Крафт',
                components: []
            },
            {
                id: 13,
                name: 'Бумага',
                weight: 1.1,
                type: 'Переработка',
                components: [138,78]
            },
            {
                id: 14,
                name: 'Бетон',
                weight: '11.3кг',
                type: 'Крафт',
                components: [139,142,78,83]
            },
            {
                id: 15,
                name: 'Булочки',
                weight: 5,
                type: 'Крафт',
                components: [78,26,65,87]
            },
            {
                id: 16,
                name: 'Водка',
                weight: 3,
                type: 'Крафт',
                components: [90]
            },
            {
                id: 17,
                name: 'Виски',
                weight: 5,
                type: 'Крафт',
                components: [113,78]
            },
            {
                id: 18,
                name: 'Виноград',
                weight: 5,
                type: 'Добыча'
            },
            {
                id: 19,
                name: 'Вода',
                weight: 4.2,
                type: 'Добыча'
            },
            {
                id: 20,
                name: 'Виноградный сок',
                weight: 5,
                type: 'Переработка',
                components: [18]
            },
            {
                id: 21,
                name: 'Говядина',
                weight: 3.3,
                type: 'Добыча'
            },
            {
                id: 22,
                name: 'Говяжий фарш',
                weight: 5,
                type: 'Переработка',
                components: [21]
            },
            {
                id: 23,
                name: 'Дизельное топливо',
                weight: 5,
                type: 'Крафт',
                components: []
            },
            {
                id: 24,
                name: 'Доска',
                weight: 9,
                type: 'Переработка',
                components: [25]
            },
            {
                id: 25,
                name: 'Древесина',
                weight: 12,
                type: 'Переработка',
                components: []
            },
            {
                id: 26,
                name: 'Дрожжи',
                weight: 5,
                type: 'Переработка',
                components: [] 
            },
            {
                id: 27,
                name: 'Дыня',
                weight: 2.5,
                type: 'Добыча'
            },
            {
                id: 28,
                name: 'Железо',
                weight: 5,
                type: 'Переработка',
                components: [29]
            },
            {
                id: 29,
                name: 'Железная руда',
                weight: 5,
                type: 'Переработка'
            },
            {
                id: 30,
                name: 'Запчасти для доков',
                weight: 7.8,
                type: 'Крафт',
                components: [115,2]
            },
            {
                id: 31,
                name: 'Зелень',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 32,
                name: 'Золото',
                weight: 0,
                type: 'Переработка',
                components: [34]
            },
            {
                id: 33,
                name: 'Зерна кофе',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 34,
                name: 'Золотая руда',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 35,
                name: 'Игристое вино',
                weight: 0,
                type: 'Крафт',
                components: [20,96]
            },
            {
                id: 36,
                name: 'Камень',
                weight: 2.3,
                type: 'Добыча'
            },
            {
                id: 37,
                name: 'Кампари',
                weight: 8.3,
                type: 'Крафт',
                components: [90,4,42]
            },
            {
                id: 38,
                name: 'Керосин',
                weight: 5,
                type: 'Переработка',
                components: []
            },
            {
                id: 39,
                name: 'Картофель',
                weight: 5,
                type: 'Добыча'
            },
            {
                id: 40,
                name: 'Картофель фри',
                weight: 0,
                type: 'Крафт',
                components: [62,91,87]
            },
            {
                id: 41,
                name: 'Кимберлит',
                weight: 0,
                type: 'Добыча',
                components: []
            },
            {
                id: 42,
                name: 'Клубника',
                weight: 3,
                type: 'Добыча'
            },
            {
                id: 43,
                name: 'Клубничный джем',
                weight: 0,
                type: 'Переработка',
                components: [42]
            },
            {
                id: 44,
                name: 'Кетчуп',
                weight: 0,
                type: 'Крафт',
                components: [129,87]
            },
            {
                id: 45,
                name: 'Котлеты',
                weight: 0,
                type: 'Крафт',
                components: [22,98,87,146]
            },
            {
                id: 46,
                name: 'Кольцо',
                weight: 0,
                type: 'Крафт',
                components: [147,32]
            },
            {
                id: 47,
                name: 'Комплектующие для ветряков',
                weight: 8.1,
                type: 'Крафт',
                components: [115,2,128]
            },
            {
                id: 48,
                name: 'Кофе',
                weight: 0,
                type: 'Крафт',
                components: [63,78,96,79]
            },
            {
                id: 49,
                name: 'Креветки',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 50,
                name: 'Кровавая мэри',
                weight: 0,
                type: 'Крафт',
                components: [16,129,146]
            },
            {
                id: 51,
                name: 'Курица',
                weight: 1.8,
                type: 'Переработка'
            },
            {
                id: 52,
                name: 'Курица-гриль',
                weight: 0,
                type: 'Переработка',
                components: [62,87,51]
            },
            {
                id: 53,
                name: 'Куриное филе',
                weight: 0,
                type: 'Переработка',
                components: [51]
            },
            {
                id: 54,
                name: 'Курица в кляре',
                weight: 5,
                type: 'Крафт',
                components: [56,87,146]
            },
            {
                id: 55,
                name: 'Куриные ножки',
                weight: 0,
                type: 'Крафт',
                components: [53,87,62,65]
            },
            {
                id: 56,
                name: 'Куриный фарш',
                weight: 0,
                type: 'Переработка',
                components: [51]
            },
            {
                id: 57,
                name: 'Креветки в кляре',
                weight: 2.5,
                type: 'Крафт',
                components: []
            },
            {
                id: 58,
                name: 'Лак',
                weight: 3.1,
                type: 'Крафт',
                components: [78, 2]
            },
            {
                id: 59,
                name: 'Лапша',
                weight: 0,
                type: 'Крафт',
                components: [65,87,78]
            },
            {
                id: 60,
                name: 'Лепешки',
                weight: 0,
                type: 'Крафт',
                components: [65,87,78,146]
            },
            {
                id: 61,
                name: 'Мазут',
                weight: 8.3,
                type: 'Переработка',
                components: [80,92]
            },
            {
                id: 62,
                name: 'Масло оливковое',
                weight: 0,
                type: 'Переработка',
                components: [76]
            },
            {
                id: 63,
                name: 'Молотый кофе',
                weight: 0,
                type: 'Переработка',
                components: [33]
            },
            {
                id: 64,
                name: 'Моющее средство',
                weight: 0.3,
                type: 'Крафт',
                components: [73,114,5]
            },
            {
                id: 65,
                name: 'Мука',
                weight: 0,
                type: 'Переработка',
                components: [90]
            },
            {
                id: 66,
                name: 'Медь',
                weight: 0.5,
                type: 'Переработка',
                components: [67]
            },
            {
                id: 67,
                name: 'Медная руда',
                weight: 10,
                type: 'Переработка',
            },
            {
                id: 68,
                name: 'Молоко',
                weight: 2.3,
                type: 'Добыча'
            },
            {
                id: 69,
                name: 'Морковь',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 70,
                name: 'Морковный сок',
                weight: 0,
                type: 'Переработка',
                components: [69]
            },
            {
                id: 71,
                name: 'Напольное покрытие',
                weight: 8.5,
                type: 'Переработка',
                components: [24,58]
            },
            {
                id: 72,
                name: 'Нарезанная зелень',
                weight: 0,
                type: 'Переработка',
                components: [31]
            },
            {
                id: 73,
                name: 'Нафтеновая кислота',
                weight: 0.3,
                type: 'Переработка',
                components: [80]
            },
            {
                id: 74,
                name: 'Овощной салат',
                weight: 0,
                type: 'Крафт',
                components: [62,87,69,129]
            },
            {
                id: 75,
                name: 'Одежда',
                weight: 4.1,
                type: 'Крафт',
                components: [133,128]
            },
            {
                id: 76,
                name: 'Оливки',
                weight: 2.3,
                type: 'Добыча'
            },
            {
                id: 77,
                name: 'Отвертка',
                weight: 5,
                type: 'Крафт',
                components: [16,5] // водка, апельсиновый сок
            },
            {
                id: 78,
                name: 'Очищенная вода',
                weight: 2.5,
                type: 'Переработка',
                components: [19]
            },
            {
                id: 79,
                name: 'Пастеризованное молоко',
                weight: 0,
                type: 'Переработка',
                components: [68]
            },
            {
                id: 80,
                name: 'Переработанная нефть',
                weight: 5,
                type: 'Переработка',
                components: [124]
            },
            {
                id: 81,
                name: 'Персики',
                weight: 6.4,
                type: 'Добыча'
            },
            {
                id: 82,
                name: 'Персиковый сок',
                weight: 5,
                type: 'Переработка',
                components: [81]
            },
            {
                id: 83,
                name: 'Песок',
                weight: 10,
                type: 'Добыча'
            },
            {
                id: 84,
                name: 'Пиво',
                weight: 0,
                type: 'Крафт',
                components: [78,137,113]
            },
            {
                id: 85,
                name: 'Платиновая руда',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 86,
                name: 'Платина',
                weight: 0,
                type: 'Переработка',
                components: [85]
            },
            {
                id: 87,
                name: 'Поваренная соль',
                weight: 3.8,
                type: 'Переработка',
                components: [112]
            },
            {
                id: 88,
                name: 'Пончик',
                weight: 0,
                type: 'Крафт',
                components: [65,96,26,146]
            },
            {
                id: 89,
                name: 'Присадка из серы',
                weight: 0,
                type: 'Переработка',
                components: [102]
            },
            {
                id: 90,
                name: 'Пшеница',
                weight: 1.3,
                type: 'Добыча',
                components: []
            },
            {
                id: 91,
                name: 'Резаный картофель',
                weight: 0,
                type: 'Переработка',
                components: [39]
            },
            {
                id: 92,
                name: 'Резина',
                weight: 3.1,
                type: 'Переработка',
                components: [116]
            },
            {
                id: 93,
                name: 'Рыба',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 94,
                name: 'Рыбные палочки',
                weight: 0,
                type: 'Крафт',
                components: [95,62,87]
            },
            {
                id: 95,
                name: 'Рыбное филе',
                weight: 0,
                type: 'Переработка',
                components: [93]
            },
            {
                id: 96,
                name: 'Сахар',
                weight: 0.2,
                type: 'Переработка',
                components: [131]
            },
            {
                id: 97,
                name: 'Свинина',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 98,
                name: 'Свиной фарш',
                weight: 0,
                type: 'Переработка',
                components: [98]
            },
            {
                id: 99,
                name: 'Свиные отбивные',
                weight: 0,
                type: 'Крафт',
                components: [62,87,146,98]
            },
            {
                id: 100,
                name: 'Серебро',
                weight: 0,
                type: 'Переработка',
                components: [101]
            },
            {
                id: 101,
                name: 'Серебряная руда',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 102,
                name: 'Серная руда',
                weight: 11,
                type: 'Добыча'
            },
            {
                id: 103,
                name: 'Серьги',
                weight: 0,
                type: 'Крафт',
                components: []
            },
            {
                id: 104,
                name: 'Сигареты',
                weight: 3.9,
                type: 'Крафт',
                components: [138,122]
            },
            {
                id: 105,
                name: 'Сигары',
                weight: 2.1,
                type: 'Крафт',
                components: [122,104]
            },
            {
                id: 106,
                name: 'Смузи из арбуза',
                weight: 0,
                type: 'Переработка',
                components: [7]
            },
            {
                id: 107,
                name: 'Смузи из дыни',
                weight: 1.8,
                type: 'Переработка',
                components: [27]
            },
            {
                id: 108,
                name: 'Сок агавы',
                weight: 0,
                type: 'Переработка',
                components: [1]
            },
            {
                id: 109,
                name: 'Сода',
                weight: 3,
                type: 'Добыча',
            },
            {
                id: 110,
                name: 'Сосиски',
                weight: 5,
                type: 'Крафт',
                components: [98,22,87]
            },
            {
                id: 111,
                name: 'Соус',
                weight: 5,
                type: 'Крафт',
                components: [146,87,72,62]
            },
            {
                id: 112,
                name: 'Соль',
                weight: 10,
                type: 'Добыча'
            },
            {
                id: 113,
                name: 'Солод',
                weight: 0,
                type: 'Переработка',
                components: []
            },
            {
                id: 114,
                name: 'Спирт',
                weight: 0,
                type: 'Переработка',
                components: [90]
            },
            {
                id: 115,
                name: 'Сталь',
                weight: 6,
                type: 'Крафт',
                components: [134, 28]
            },
            {
                id: 116,
                name: 'Старые покрышки',
                weight: 4.2,
                type: 'Добыча'
            },
            {
                id: 117,
                name: 'Стейки',
                weight: 0,
                type: 'Крафт',
                components: [87,21]
            },
            {
                id: 118,
                name: 'Стейки рыбные',
                weight: 0,
                type: 'Крафт',
                components: [95,87]
            },
            {
                id: 119,
                name: 'Стекло',
                weight: 5,
                type: 'Крафт',
                components: [83,109]
            },
            {
                id: 120,
                name: 'Стеклопакет',
                weight: 5,
                type: 'Крафт',
                components: [119,115]
            },
            {
                id: 121,
                name: 'Строительные блоки',
                weight: 5,
                type: 'Крафт',
                components: [10,8]
            },
            {
                id: 122,
                name: 'Сушеный табак',
                weight: 0.6,
                type: 'Переработка',
                components: [125]
            },
            {
                id: 123,
                name: 'Сыр',
                weight: 0,
                type: 'Крафт',
                components: []
            },
            {
                id: 124,
                name: 'Сырая нефть',
                weight: 10,
                type: 'Добыча'
            },
            {
                id: 125,
                name: 'Табак',
                weight: 2,
                type: 'Добыча'
            },
            {
                id: 126,
                name: 'Текила',
                weight: 4.6,
                type: 'Крафт',
                components: [108,96]
            },
            {
                id: 127,
                name: 'Текила бум',
                weight: 7,
                type: 'Крафт',
                components: [126,84]
            },
            {
                id: 128,
                name: 'Ткань',
                weight: 0.3,
                type: 'Переработка',
                components: [136]
            },
            {
                id: 129,
                name: 'Томаты',
                weight: 6.2,
                type: 'Добыча'
            },
            {
                id: 130,
                name: 'Томатный сок',
                weight: 5,
                type: 'Переработка',
                components: [129]
            },
            {
                id: 131,
                name: 'Тростник',
                weight: 1.3,
                type: 'Добыча'
            },
            {
                id: 132,
                name: 'Фруктовый салат',
                weight: 5,
                type: 'Крафт',
                components: [3,9,81,144]
            },
            {
                id: 133,
                name: 'Фурнитура',
                weight: 0,
                type: 'Крафт',
                components: [115,66]
            },
            {
                id: 134,
                name: 'Углерод',
                weight: 0,
                type: 'Переработка',
                components: [135]
            },
            {
                id: 135,
                name: 'Уголь',
                weight: 5,
                type: 'Добыча'
            },
            {
                id: 136,
                name: 'Хлопок',
                weight: 5,
                type: 'Добыча'
            },
            {
                id: 137,
                name: 'Хмель',
                weight: 0,
                type: 'Добыча'
            },
            {
                id: 138,
                name: 'Целюлоза',
                weight: 3,
                type: 'Переработка',
                components: [25]
            },
            {
                id: 139,
                name: 'Цемент',
                weight: 1.7,
                type: 'Переработка',
                components: [36]
            },
            {
                id: 140,
                name: 'Цепочка',
                weight: 0,
                type: 'Крафт',
                components: []
            },
            {
                id: 141,
                name: 'Чищеные креветки',
                weight: 0,
                type: 'Переработка',
                components: [49]
            },
            {
                id: 142,
                name: 'Щебень',
                weight: 2,
                type: 'Переработка',
                components: [36]
            },
            {
                id: 143,
                name: 'Этнический браслет',
                weight: 0,
                type: 'Крафт',
                components: []
            },
            {
                id: 144,
                name: 'Яблоки',
                weight: 5.5,
                type: 'Добыча'
            },
            {
                id: 145,
                name: 'Яблочный сок',
                weight: 0,
                type: 'Переработка',
                components: [144]
            },
            {
                id: 146,
                name: 'Яйцо',
                weight: 0.1,
                type: 'Переработка',
                components: [51]
            },
            {
                id: 147,
                name: 'Бриллиант',
                weight: 0.1,
                type: 'Крафт',
                components: [41]
            },
            
        ],
        title: '',
        weight: '',
        type: '',
        activeItem: null,
        activeResource: null,
        search: '',
        searchResult: ''
    },
    methods:{
        c(){
            // console.log(this.resources[1].craftItems.item1)
        },
        setContent(item){
            this.title = item.name;
            this.weight = item.weight;
            this.type = item.type;
            this.craft.name = item.craft.name;
            console.log(item.id)
            this.activeItem = item;
        },
        getResource(item) {
            if (item === null) {
                return [];
            }
            if (item.components === undefined) {
                return [];
            }
            const resources = [];

            item.components.forEach(id => {
                const resource = this.resources.find(item => {
                    return item.id === id
                })
                resources.push(resource);
            });
            return resources;
            
        }, 
     
    },
  })